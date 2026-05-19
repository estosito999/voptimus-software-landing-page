import { ExternalLink, Github } from 'lucide-react'
import styles from './Portfolio.module.css'

const TEAM_PROFILES = [
  {
    name: 'Luis Ernesto Barrionuevo Aparicio',
    role: 'Desarrollador Backend',
    username: '@usuario-github-1',
    github: 'https://github.com/estosito999',
    initials: 'LEBA',
    focus: ['Análisis de datos', 'APIs', 'Sistemas SOAP/REST'],
    color: 'cyan',
  },
  
] as const

const COLOR_MAP = {
  cyan: {
    solid: 'var(--cyan)',
    dim: 'var(--cyan-dim)',
    border: 'var(--border)',
  },
  green: {
    solid: 'var(--green)',
    dim: 'var(--green-dim)',
    border: 'var(--border-green)',
  },
  violet: {
    solid: 'var(--violet)',
    dim: 'var(--violet-dim)',
    border: 'var(--border-violet)',
  },
  blue: {
    solid: 'var(--blue)',
    dim: 'var(--blue-dim)',
    border: 'var(--border-blue)',
  }
} as const

export default function Portfolio() {
  return (
    <section id="equipo" className={styles.section} aria-labelledby="team-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Equipo</span>
          <h2 id="team-title" className="section-title">
            Nuestro equipo, <span>sus proyectos en GitHub</span>
          </h2>
          <p className="section-subtitle">
            Entra al perfil de cada integrante para ver sus repositorios, proyectos y
            contribuciones sin tener que listar cada trabajo uno por uno.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {TEAM_PROFILES.map((member, i) => {
            const color = COLOR_MAP[member.color]

            return (
              <a
                key={member.github}
                href={member.github}
                className={`glass-card ${styles.card}`}
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir perfil de GitHub de ${member.name}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={styles.topBar}
                  style={{ background: `linear-gradient(90deg, ${color.solid}, transparent)` }}
                />

                <div className={styles.cardBody}>
                  <div className={styles.profileHead}>
                    <div
                      className={styles.avatar}
                      style={{
                        color: color.solid,
                        background: color.dim,
                        borderColor: color.border,
                      }}
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>

                    <span
                      className={styles.githubBadge}
                      style={{
                        color: color.solid,
                        background: color.dim,
                        borderColor: color.border,
                      }}
                    >
                      <Github size={14} aria-hidden="true" />
                      GitHub
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{member.name}</h3>
                  <p className={styles.cardRole}>{member.role}</p>
                  <p className={styles.username}>{member.username}</p>

                  <div className={styles.focusList} aria-label="Áreas principales">
                    {member.focus.map((item) => (
                      <span
                        key={item}
                        className={styles.focusTag}
                        style={{ borderColor: color.border, color: color.solid }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className={styles.profileLink} style={{ color: color.solid }}>
                    Ver perfil y proyectos
                    <ExternalLink size={16} aria-hidden="true" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
