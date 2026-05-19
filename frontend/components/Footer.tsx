'use client'

import TransitionButton from '@/components/TransitionButton'
import { services } from '@/lib/services'
import { NAV_LINKS, ROUTES } from '@/lib/routes'
import styles from './Footer.module.css'

const SERVICE_LINKS = services.map((service) => ({
  href: ROUTES.servicio(service.slug),
  label: service.title,
}))

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Top separator */}
      <div className={styles.separator} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <TransitionButton href={ROUTES.home} className={styles.logo} aria-label="Voptimus SOFTWARE">
            <span className={styles.logoV}>V</span>optimus{' '}
            <span className={styles.logoSoft}>SOFTWARE</span>
          </TransitionButton>
          <p className={styles.tagline}>
            Software inteligente para empresas que quieren crecer.
          </p>
          <a href="mailto:duicornista@gmail.com" className={styles.email}>
            duicornista@gmail.com
          </a>

          {/* Social links */}
          <div className={styles.socials} aria-label="Redes sociales">
            <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M6 8v5M6 6v.01M9 13V10a1.5 1.5 0 013 0v3M9 8v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="https://github.com" className={styles.socialLink} aria-label="GitHub" rel="noopener noreferrer" target="_blank">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2C5.134 2 2 5.134 2 9c0 3.09 2.007 5.715 4.793 6.637.35.064.478-.152.478-.337v-1.18c-1.948.424-2.36-.94-2.36-.94-.318-.809-.777-1.025-.777-1.025-.636-.434.048-.425.048-.425.703.05 1.073.722 1.073.722.624 1.07 1.637.76 2.036.582.063-.452.244-.761.444-.937-1.555-.177-3.19-.777-3.19-3.46 0-.764.273-1.389.72-1.879-.072-.178-.312-.89.07-1.854 0 0 .587-.188 1.922.715A6.69 6.69 0 019 5.524c.594.003 1.192.08 1.75.235 1.333-.903 1.92-.715 1.92-.715.383.965.142 1.676.07 1.854.449.49.72 1.115.72 1.879 0 2.69-1.638 3.28-3.2 3.453.252.217.476.645.476 1.3v1.928c0 .187.127.405.482.336A7.001 7.001 0 0016 9c0-3.866-3.134-7-7-7z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter" rel="noopener noreferrer" target="_blank">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M15 3L10.5 8.5M3 15l5.5-5.5M10.5 8.5L15 15H11L8.5 9.5M10.5 8.5L3 3h4l3 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Enlaces rápidos">
          <h3 className={styles.colTitle}>Navegación</h3>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <TransitionButton href={l.href} className={styles.link}>
                  {l.label}
                </TransitionButton>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Servicios">
          <h3 className={styles.colTitle}>Servicios</h3>
          <ul className={styles.linkList}>
            {SERVICE_LINKS.map((s) => (
              <li key={s.href}>
                <TransitionButton href={s.href} className={styles.link}>
                  {s.label}
                </TransitionButton>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.ctaCol}>
          <h3 className={styles.colTitle}>¿Listo para empezar?</h3>
          <p className={styles.ctaText}>
            Transforma tu negocio con software a medida e inteligencia artificial.
          </p>
          <TransitionButton
            href={ROUTES.contacto}
            className="btn-primary"
            style={{ fontSize: '0.875rem', padding: '12px 24px' }}
          >
            Iniciar proyecto
          </TransitionButton>

          <div className={styles.badge} aria-label="Garantía de respuesta">
            <div className={styles.badgeDot} />
            Respondemos en &lt; 24h
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            © {year} Voptimus SOFTWARE. Todos los derechos reservados.
          </p>
          <p className={styles.copy} style={{ color: 'rgba(148,163,184,0.4)' }}>
            Hecho con tecnología de vanguardia
          </p>
        </div>
      </div>
    </footer>
  )
}
