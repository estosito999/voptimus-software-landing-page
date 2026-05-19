'use client'

import TransitionButton from '@/components/TransitionButton'
import { ROUTES } from '@/lib/routes'
import HeroVisual from './HeroVisual'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Sección principal">
      {/* Animated bg gradient */}
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left: Copy */}
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Tecnología de próxima generación
          </div>

          <h1 className={styles.title}>
            Transformamos ideas en{' '}
            <span className={styles.highlight}>software inteligente</span>
          </h1>

          <p className={styles.subtitle}>
            Desarrollamos soluciones web, sistemas empresariales, automatización
            e inteligencia artificial para optimizar el crecimiento de tu negocio.
          </p>

          <div className={styles.actions}>
            <TransitionButton
              href={ROUTES.contacto}
              className="btn-primary"
            >
              Contáctanos
            </TransitionButton>
            <TransitionButton
              href={ROUTES.servicios}
              className="btn-secondary"
            >
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TransitionButton>
          </div>

          {/* Stats */}
          <div className={styles.stats} aria-label="Estadísticas">
            {[
              { n: '50+', label: 'Proyectos entregados' },
              { n: '98%', label: 'Satisfacción del cliente' },
              { n: '8+',  label: 'Años de experiencia' },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.n}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className={styles.visual} aria-hidden="true">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <TransitionButton
        href={ROUTES.servicios}
        className={styles.scroll}
        aria-label="Ir a servicios"
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Explorar</span>
      </TransitionButton>
    </section>
  )
}
