'use client'

import TransitionButton from '@/components/TransitionButton'
import { ROUTES } from '@/lib/routes'
import styles from './WhyUs.module.css'

const BENEFITS = [
  {
    num: '01',
    color: 'cyan',
    title: 'Soluciones a medida',
    desc: 'Diseñamos cada proyecto pensando en tus necesidades específicas, no usamos plantillas genéricas.',
  },
  {
    num: '02',
    color: 'green',
    title: 'Diseño moderno y escalable',
    desc: 'Arquitecturas limpias que crecen con tu negocio, sin deuda técnica.',
  },
  {
    num: '03',
    color: 'violet',
    title: 'Integración con IA',
    desc: 'Incorporamos inteligencia artificial en cada capa de tu sistema para mayor eficiencia.',
  },
  {
    num: '04',
    color: 'cyan',
    title: 'Arquitectura segura',
    desc: 'Seguridad desde el diseño: cifrado, autenticación robusta y mejores prácticas en cada línea.',
  },
  {
    num: '05',
    color: 'green',
    title: 'Desarrollo rápido',
    desc: 'Metodología ágil que entrega resultados en semanas, no en meses.',
  },
  {
    num: '06',
    color: 'violet',
    title: 'Soporte continuo',
    desc: 'Acompañamiento post-lanzamiento para que tu solución siempre opere en óptimas condiciones.',
  },
]

const COLOR_MAP: Record<string, string> = {
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  violet: 'var(--violet)',
}

export default function WhyUs() {
  return (
    <section id="nosotros" className={styles.section} aria-labelledby="whyus-title">
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className="section-label">¿Por qué elegirnos?</span>
          <h2 id="whyus-title" className="section-title">
            Construimos el software que tu empresa{' '}
            <span>merece</span>
          </h2>
          <p className="section-subtitle">
            Combinamos experiencia técnica, visión estratégica y pasión por la innovación
            para entregar soluciones que realmente marcan la diferencia.
          </p>

          <div className={styles.cta}>
            <TransitionButton href={ROUTES.contacto} className="btn-primary">
              Comienza tu proyecto
            </TransitionButton>
          </div>

          {/* Decorative element */}
          <div className={styles.deco} aria-hidden="true">
            <div className={styles.decoRing} />
            <div className={styles.decoRing2} />
            <div className={styles.decoCore} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.grid} role="list">
            {BENEFITS.map((b, i) => (
              <article
                key={b.num}
                className={`glass-card ${styles.card}`}
                role="listitem"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span
                  className={styles.num}
                  style={{ color: COLOR_MAP[b.color] }}
                >
                  {b.num}
                </span>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
                <div
                  className={styles.accent}
                  style={{ background: COLOR_MAP[b.color] }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
