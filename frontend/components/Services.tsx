'use client'

import { usePageTransition } from '@/hooks/usePageTransition'
import { services } from '@/lib/services'
import { ROUTES } from '@/lib/routes'
import styles from './Services.module.css'

const COLOR_MAP: Record<string, string> = {
  cyan:   'var(--cyan)',
  violet: 'var(--violet)',
  green:  'var(--green)',
}

export default function Services() {
  const { transition } = usePageTransition()
  return (
    <section id="servicios" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Nuestros servicios</span>
          <h2 id="services-title" className="section-title">
            Soluciones que <span>impulsan tu negocio</span>
          </h2>
          <p className="section-subtitle">
            Ofrecemos un portafolio completo de servicios tecnológicos diseñados para
            transformar y escalar empresas de cualquier industria.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {services.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => transition(ROUTES.servicio(s.slug))}
              className={`glass-card ${styles.card}`}
              role="listitem"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div
                className={styles.iconWrap}
                style={{
                  color: COLOR_MAP[s.iconStyle],
                  background: `${COLOR_MAP[s.iconStyle]}14`,
                  borderColor: `${COLOR_MAP[s.iconStyle]}30`,
                }}
              >
                <span className={styles.iconChar} aria-hidden="true">{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <div
                className={styles.cardLine}
                style={{ background: `linear-gradient(90deg, ${COLOR_MAP[s.iconStyle]}, transparent)` }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
