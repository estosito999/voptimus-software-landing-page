'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

const PROJECT_TYPES = [
  'Desarrollo Web',
  'Sistema Empresarial',
  'Inteligencia Artificial',
  'Automatización',
  'Aplicación Móvil',
  'Consultoría',
  'Otro',
]

const BUDGETS = [
  'Menos de $5,000 USD',
  '$5,000 – $15,000 USD',
  '$15,000 – $50,000 USD',
  'Más de $50,000 USD',
  'Por definir',
]

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.inner}>
        {/* Left: Info */}
        <div className={styles.info}>
          <span className="section-label">Contacto</span>
          <h2 id="contact-title" className="section-title">
            Hablemos de tu <span>próximo proyecto</span>
          </h2>
          <p className={styles.infoText}>
            Cuéntanos tu idea y te ayudaremos a convertirla en una solución digital
            poderosa. Respondemos en menos de 24 horas.
          </p>

          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} style={{ background: 'var(--cyan-dim)', borderColor: 'var(--border)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
                    stroke="var(--cyan)" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M2 4l7 6 7-6" stroke="var(--cyan)" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Correo</p>
                <p className={styles.contactValue}>contacto@voptimus.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon} style={{ background: 'var(--green-dim)', borderColor: 'var(--border-green)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" stroke="var(--green)" strokeWidth="1.4"/>
                  <path d="M9 3v6l3 3" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Tiempo de respuesta</p>
                <p className={styles.contactValue}>Menos de 24 horas</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon} style={{ background: 'var(--violet-dim)', borderColor: 'var(--border-violet)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2C6.2 2 4 4.2 4 7c0 4.3 5 9 5 9s5-4.7 5-9c0-2.8-2.2-5-5-5z"
                    stroke="var(--violet)" strokeWidth="1.4"/>
                  <circle cx="9" cy="7" r="2" stroke="var(--violet)" strokeWidth="1.4"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Ubicación</p>
                <p className={styles.contactValue}>Trabajo remoto global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={`glass-card ${styles.success}`} role="alert">
              <div className={styles.successIcon} aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="var(--green)" strokeWidth="1.5"/>
                  <path d="M12 20l6 6 10-12" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>¡Solicitud enviada!</h3>
              <p className={styles.successText}>
                Gracias por contactarnos. Revisaremos tu proyecto y te responderemos pronto.
              </p>
            </div>
          ) : (
            <form
              className={`glass-card ${styles.form}`}
              onSubmit={handleSubmit}
              aria-label="Formulario de contacto"
              noValidate
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Nombre *</label>
                  <input
                    id="name"
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
                  <label htmlFor="email" className={styles.label}>Correo electrónico *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    value={formState.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="company" className={styles.label}>Empresa</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={formState.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="projectType" className={styles.label}>Tipo de proyecto</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Selecciona una opción</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="budget" className={styles.label}>Presupuesto aproximado</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Selecciona un rango</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                  value={formState.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={`btn-primary ${styles.submit}`}>
                Enviar solicitud
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
