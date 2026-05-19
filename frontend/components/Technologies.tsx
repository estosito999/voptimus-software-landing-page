import styles from './Technologies.module.css'

const TECHS = [
  { label: 'Next.js',                color: 'cyan',   tier: 1 },
  { label: 'React',                  color: 'cyan',   tier: 1 },
  { label: 'TypeScript',             color: 'cyan',   tier: 1 },
  { label: 'Inteligencia Artificial',color: 'green',  tier: 1 },
  { label: 'NoSQL',                  color: 'violet', tier: 1 },
  { label: 'APIs REST',              color: 'cyan',   tier: 2 },
  { label: 'Cloud',                  color: 'green',  tier: 2 },
  { label: 'Vercel',                 color: 'violet', tier: 2 },
  { label: 'Node.js',                color: 'green',  tier: 2 },
  { label: 'Python',                 color: 'cyan',   tier: 2 },
  { label: 'MongoDB',                color: 'green',  tier: 2 },
  { label: 'Firebase',               color: 'violet', tier: 2 },
  { label: 'Docker',                 color: 'cyan',   tier: 3 },
  { label: 'Git',                    color: 'green',  tier: 3 },
  { label: 'CI / CD',                color: 'violet', tier: 3 },
  { label: 'Automatización',         color: 'cyan',   tier: 3 },
]

const COLOR_MAP: Record<string, string> = {
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  violet: 'var(--violet)',
}

export default function Technologies() {
  return (
    <section className={styles.section} aria-labelledby="tech-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Stack tecnológico</span>
          <h2 id="tech-title" className="section-title">
            Herramientas de <span>vanguardia</span>
          </h2>
          <p className="section-subtitle">
            Trabajamos con las tecnologías más modernas y demandadas del mercado para
            garantizar soluciones robustas y escalables.
          </p>
        </div>

        <div className={styles.tags} role="list" aria-label="Tecnologías">
          {TECHS.map((t, i) => (
            <span
              key={t.label}
              className={styles.tag}
              role="listitem"
              style={{
                color: COLOR_MAP[t.color],
                borderColor: `${COLOR_MAP[t.color]}30`,
                background: `${COLOR_MAP[t.color]}0c`,
                animationDelay: `${i * 0.05}s`,
                fontSize: t.tier === 1 ? '0.95rem' : t.tier === 2 ? '0.875rem' : '0.8rem',
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
