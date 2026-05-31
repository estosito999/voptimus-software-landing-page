import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'voptimusoftware@gmail.com'
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'Voptimus SOFTWARE <onboarding@resend.dev>'

let resendClient: Resend | null = null

type ContactPayload = {
  name: string
  email: string
  formType?: string
  company: string
  budget: string
  message: string
  website?: string
}

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY')
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY)
  }

  return resendClient
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function parsePayload(body: unknown): ContactPayload {
  if (!isRecord(body)) {
    throw new Error('Invalid payload')
  }

  return {
    name: getString(body.name, 120),
    email: getString(body.email, 180).toLowerCase(),
    formType: getString(body.formType, 80),
    company: getString(body.company, 180),
    budget: getString(body.budget, 80),
    message: getString(body.message, 3000),
    website: getString(body.website, 200),
  }
}

function validatePayload(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.message) {
    return 'Completa tu nombre, correo y mensaje.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Escribe un correo válido.'
  }

  if (payload.message.length < 10) {
    return 'Cuéntanos un poco más sobre tu proyecto.'
  }

  return null
}

function buildEmailHtml(payload: ContactPayload) {
  const fields = [
    ...(payload.formType ? [['Tipo de formulario', payload.formType]] : []),
    ['Nombre', payload.name],
    ['Correo', payload.email],
    ['Proyecto / necesidad', payload.company || 'No especificado'],
    ['Presupuesto', payload.budget || 'No especificado'],
    ['Mensaje', payload.message],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">Nueva solicitud desde Voptimus SOFTWARE</h1>
      <p style="margin: 0 0 24px;">Alguien envió el formulario de contacto de la web.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${fields
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #e5e7eb; padding: 10px 12px; font-weight: 700; width: 180px; vertical-align: top;">
                  ${escapeHtml(label)}
                </td>
                <td style="border: 1px solid #e5e7eb; padding: 10px 12px; white-space: pre-wrap;">
                  ${escapeHtml(value)}
                </td>
              </tr>
            `
          )
          .join('')}
      </table>
    </div>
  `
}

function buildEmailText(payload: ContactPayload) {
  return [
    'Nueva solicitud desde Voptimus SOFTWARE',
    '',
    ...(payload.formType ? [`Tipo de formulario: ${payload.formType}`] : []),
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Proyecto / necesidad: ${payload.company || 'No especificado'}`,
    `Presupuesto: ${payload.budget || 'No especificado'}`,
    '',
    'Mensaje:',
    payload.message,
  ].join('\n')
}

export async function POST(request: Request) {
  try {
    const payload = parsePayload(await request.json())

    if (payload.website) {
      return NextResponse.json({ ok: true })
    }

    const validationError = validatePayload(payload)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const resend = getResend()
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `${payload.formType ? `${payload.formType}: ` : ''}Nueva solicitud de ${payload.name}`,
      html: buildEmailHtml(payload),
      text: buildEmailText(payload),
    })

    if (error) {
      console.error('Resend contact email error:', error)
      return NextResponse.json(
        { error: 'No se pudo enviar el correo. Intenta nuevamente.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'El servicio de correo no está configurado correctamente.' },
      { status: 500 }
    )
  }
}
