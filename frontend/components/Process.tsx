import styles from './Process.module.css'

const STEPS = [
  { num: 1, color: 'cyan',   title: 'Analizamos tu idea',          desc: 'Escuchamos tus objetivos y mapeamos los requerimientos técnicos y de negocio.' },
  { num: 2, color: 'green',  title: 'Diseñamos la solución',       desc: 'Arquitectura, wireframes y plan de desarrollo aprobado por tu equipo.' },
  { num: 3, color: 'violet', title: 'Desarrollamos el sistema',    desc: 'Código limpio, escalable y bien documentado con entregas iterativas.' },
  { num: 4, color: 'cyan',   title: 'Integramos IA y base de datos', desc: 'Incorporamos inteligencia artificial y conexiones de datos en cada módulo.' },
  { num: 5, color: 'green',  title: 'Probamos y desplegamos',      desc: 'QA exhaustivo, pruebas de carga y despliegue en producción sin interrupciones.' },
  { num: 6, color: 'violet', title: 'Soporte y mejora continua',   desc: 'Monitoreo, actualizaciones y optimización constante post-lanzamiento.' },
]

const COLOR_MAP: Record<string, string> = {
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  violet: 'var(--violet)',
}

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Proceso de trabajo</span>
          <h2 id="process-title" className="section-title">
            Así transformamos tu visión en <span>realidad</span>
          </h2>
          <p className="section-subtitle">
            Un proceso probado y transparente que garantiza resultados de calidad
            en cada etapa del proyecto.
          </p>
        </div>

        <div className={styles.timeline} role="list">
          {STEPS.map((step, i) => (
            <article
              key={step.num}
              className={styles.step}
              role="listitem"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Connector line (not on last) */}
              {i < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <div
                    className={styles.connectorLine}
                    style={{ background: `linear-gradient(90deg, ${COLOR_MAP[step.color]}, ${COLOR_MAP[STEPS[i+1].color]})` }}
                  />
                </div>
              )}

              {/* Number badge */}
              <div
                className={styles.numBadge}
                style={{
                  borderColor: `${COLOR_MAP[step.color]}50`,
                  boxShadow: `0 0 20px ${COLOR_MAP[step.color]}20`,
                }}
              >
                <span style={{ color: COLOR_MAP[step.color] }}>{step.num.toString().padStart(2,'0')}</span>
              </div>

              {/* Content */}
              <div className={`glass-card ${styles.content}`}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div
                  className={styles.stepAccent}
                  style={{ background: `linear-gradient(90deg, ${COLOR_MAP[step.color]}, transparent)` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
