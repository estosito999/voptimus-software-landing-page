import styles from './Industries.module.css'

const INDUSTRIES = [
  { icon: '◎', label: 'Educación',      color: 'cyan',   desc: 'Plataformas LMS, aulas virtuales y herramientas educativas.' },
  { icon: '◉', label: 'Blockchain',     color: 'green',  desc: 'Sistemas descentralizados, tokenización y autoridad descentralizada.' },
  { icon: '◈', label: 'Comercio',       color: 'violet', desc: 'E-commerce, inventarios y puntos de venta inteligentes.' },
  { icon: '◬', label: 'Restaurantes',   color: 'cyan',   desc: 'Menús digitales, reservas y gestión de pedidos en tiempo real.' },
  { icon: '◆', label: 'Finanzas',       color: 'green',  desc: 'Dashboards financieros, reportes y análisis predictivo.' },
  { icon: '◇', label: 'Optimización de datos y negocios', color: 'violet', desc: 'Soluciones corporativas completas, medibles y escalables.' },
  { icon: '◎', label: 'Startups',       color: 'cyan',   desc: 'MVPs rápidos y arquitecturas preparadas para escalar.' },
  { icon: '◉', label: 'Facturación SIAT', color: 'green', desc: 'Software para facturación, gestión tributaria y automatización de procesos.' },
]

const COLOR_MAP: Record<string, string> = {
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  violet: 'var(--violet)',
}

export default function Industries() {
  return (
    <section className={styles.section} aria-labelledby="industries-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Industrias</span>
          <h2 id="industries-title" className="section-title">
            Soluciones para cada <span>industria</span>
          </h2>
          <p className="section-subtitle">
            Desarrollamos software especializado adaptado a los retos únicos de cada sector.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {INDUSTRIES.map((ind, i) => (
            <article
              key={ind.label}
              className={`glass-card ${styles.card}`}
              role="listitem"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div
                className={styles.iconRing}
                style={{
                  borderColor: `${COLOR_MAP[ind.color]}40`,
                  boxShadow: `0 0 20px ${COLOR_MAP[ind.color]}15`,
                }}
              >
                <span
                  className={styles.icon}
                  style={{ color: COLOR_MAP[ind.color] }}
                  aria-hidden="true"
                >
                  {ind.icon}
                </span>
              </div>
              <h3
                className={styles.label}
                style={{ color: COLOR_MAP[ind.color] }}
              >
                {ind.label}
              </h3>
              <p className={styles.desc}>{ind.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
