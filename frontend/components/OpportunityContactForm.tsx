'use client'

import { useState } from 'react'
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Code2,
  Mail,
  Send,
  Users,
} from 'lucide-react'
import styles from './ContactForm.module.css'

type OpportunityType = 'promoter' | 'developer'

type OpportunityContactFormProps = {
  type: OpportunityType
}

const FORM_CONFIG = {
  promoter: {
    id: 'formulario-promotores',
    eyebrow: 'Formulario para promotores',
    title: (
      <>
        Recomienda clientes y gana una <span>comisión</span>
      </>
    ),
    intro:
      'Cuéntanos sobre ti y el tipo de clientes que podrías recomendar. Revisaremos tu solicitud y te responderemos para coordinar el acuerdo de promotor afiliado.',
    formType: 'Promotor afiliado',
    companyLabel: 'Numero de contacto',
    companyPlaceholder: 'Ej: +591 12345678',
    optionLabel: 'Cual es Fuerte?',
    options: [
      'Diseño Grafico y branding',
      'Editorial y redacción de contenidos',
      'Edicion de video y multimedia',
      'Comunicación y marketing digital',
      'Todavía no lo sé pero quiero aprender',
    ],
    messageLabel: 'Mensaje para Voptimus *',
    messagePlaceholder:
      'Cuéntanos si ya tienes un cliente para recomendar, qué necesita o qué tipo de negocios conoces...',
    submitLabel: 'Enviar solicitud de promotor',
    successTitle: '¡Solicitud de promotor enviada!',
    successText:
      'Gracias por tu interés. Revisaremos tu perfil y te responderemos para explicarte el proceso de afiliación.',
    contacts: [
      {
        icon: BadgeDollarSign,
        label: 'Comisión',
        value: 'Del 5% al 15%',
        color: 'var(--green)',
        background: 'var(--green-dim)',
        border: 'var(--border-green)',
      },
      {
        icon: Users,
        label: 'Ideal para',
        value: 'Personas que quieran ganar recomendando a su red de contactos',
        color: 'var(--cyan)',
        background: 'var(--cyan-dim)',
        border: 'var(--border)',
      },
      {
        icon: Clock,
        label: 'Respuesta',
        value: 'Menos de 24 horas',
        color: 'var(--violet)',
        background: 'var(--violet-dim)',
        border: 'var(--border-violet)',
      },
    ],
  },
  developer: {
    id: 'formulario-equipo',
    eyebrow: 'Formulario para equipo',
    title: (
      <>
        Postula al equipo de <span>desarrollo</span>
      </>
    ),
    intro:
      'Queremos conocer tus habilidades, tus proyectos y el área en la que te gustaría colaborar con Voptimus Software.',
    formType: 'Equipo de desarrollo',
    companyLabel: 'Área o stack principal',
    companyPlaceholder: 'Ej: frontend, backend, IA, automatización, diseño UI',
    optionLabel: 'Disponibilidad',
    options: [
      'Tiempo completo',
      'Medio tiempo',
      'Por proyecto',
      'Prácticas o aprendizaje',
      'A conversar',
    ],
    messageLabel: 'Cuéntanos sobre tu experiencia *',
    messagePlaceholder:
      'Incluye tus habilidades, proyectos, GitHub/portafolio y por qué quieres colaborar con Voptimus...',
    submitLabel: 'Enviar postulación',
    successTitle: '¡Postulación enviada!',
    successText:
      'Gracias por querer formar parte del equipo. Revisaremos tu información y te responderemos pronto.',
    contacts: [
      {
        icon: Code2,
        label: 'Áreas',
        value: 'Web, sistemas, IA y automatización',
        color: 'var(--cyan)',
        background: 'var(--cyan-dim)',
        border: 'var(--border)',
      },
      {
        icon: BriefcaseBusiness,
        label: 'Modalidad',
        value: 'Colaboración remota',
        color: 'var(--green)',
        background: 'var(--green-dim)',
        border: 'var(--border-green)',
      },
      {
        icon: Mail,
        label: 'Contacto',
        value: 'Respuesta por correo',
        color: 'var(--violet)',
        background: 'var(--violet-dim)',
        border: 'var(--border-violet)',
      },
    ],
  },
} as const

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
  website: '',
}

export default function OpportunityContactForm({ type }: OpportunityContactFormProps) {
  const config = FORM_CONFIG[type]
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          formType: config.formType,
        }),
      })
      const result = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar la solicitud.')
      }

      setSubmitted(true)
      setFormState(INITIAL_FORM_STATE)
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'No se pudo enviar la solicitud. Intenta nuevamente.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={config.id} className={styles.section} aria-labelledby={`${config.id}-title`}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <span className="section-label">{config.eyebrow}</span>
          <h2 id={`${config.id}-title`} className="section-title">
            {config.title}
          </h2>
          <p className={styles.infoText}>{config.intro}</p>

          <div className={styles.contacts}>
            {config.contacts.map(({ icon: Icon, label, value, color, background, border }) => (
              <div key={label} className={styles.contactItem}>
                <div
                  className={styles.contactIcon}
                  style={{ background, borderColor: border, color }}
                >
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div>
                  <p className={styles.contactLabel}>{label}</p>
                  <p className={styles.contactValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formWrap}>
          {submitted ? (
            <div className={`glass-card ${styles.success}`} role="alert">
              <div className={styles.successIcon} aria-hidden="true">
                <CheckCircle2 size={44} strokeWidth={1.6} />
              </div>
              <h3 className={styles.successTitle}>{config.successTitle}</h3>
              <p className={styles.successText}>{config.successText}</p>
            </div>
          ) : (
            <form
              className={`glass-card ${styles.form}`}
              onSubmit={handleSubmit}
              aria-label={config.eyebrow}
            >
              <div className={styles.hiddenField} aria-hidden="true">
                <label htmlFor={`${config.id}-website`}>Sitio web</label>
                <input
                  id={`${config.id}-website`}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState.website}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor={`${config.id}-name`} className={styles.label}>
                    Nombre *
                  </label>
                  <input
                    id={`${config.id}-name`}
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formState.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={`${config.id}-email`} className={styles.label}>
                    Correo electrónico *
                  </label>
                  <input
                    id={`${config.id}-email`}
                    name="email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={formState.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor={`${config.id}-company`} className={styles.label}>
                  {config.companyLabel}
                </label>
                <input
                  id={`${config.id}-company`}
                  name="company"
                  type="text"
                  placeholder={config.companyPlaceholder}
                  value={formState.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor={`${config.id}-budget`} className={styles.label}>
                  {config.optionLabel}
                </label>
                <select
                  id={`${config.id}-budget`}
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Selecciona una opción</option>
                  {config.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor={`${config.id}-message`} className={styles.label}>
                  {config.messageLabel}
                </label>
                <textarea
                  id={`${config.id}-message`}
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder={config.messagePlaceholder}
                  value={formState.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              {errorMessage && (
                <p className={styles.error} role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className={`btn-primary ${styles.submit}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : config.submitLabel}
                {!isSubmitting && <Send size={16} strokeWidth={1.8} aria-hidden="true" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
