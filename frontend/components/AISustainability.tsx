'use client'

import TransitionButton from '@/components/TransitionButton'
import { ROUTES } from '@/lib/routes'
import styles from './AISustainability.module.css'

export default function AISustainability() {
  return (
    <section id="ia" className={styles.section} aria-labelledby="ai-title">
      <div className={styles.inner}>
        {/* Left: Visual */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualInner}>
            {/* SVG eco-tech illustration */}
            <svg
              viewBox="0 0 420 460"
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="aiGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="rootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Central core */}
              <circle cx="210" cy="230" r="40" fill="none" stroke="var(--cyan)" strokeWidth="1.5"
                filter="url(#aiGlow)"
                style={{ animation: 'pulse 3s ease-in-out infinite' }} />
              <circle cx="210" cy="230" r="26" fill="rgba(0,212,255,0.12)" stroke="var(--cyan)" strokeWidth="1"
                filter="url(#aiGlow)" />
              <circle cx="210" cy="230" r="12" fill="var(--cyan)" filter="url(#aiGlow)"
                style={{ animation: 'pulse 2s ease-in-out infinite' }} />

              {/* Orbit rings */}
              <ellipse cx="210" cy="230" rx="90" ry="30" fill="none" stroke="rgba(0,212,255,0.2)"
                strokeWidth="1" strokeDasharray="4 6"
                style={{ animation: 'spin 8s linear infinite', transformOrigin: '210px 230px' }} />
              <ellipse cx="210" cy="230" rx="130" ry="44" fill="none" stroke="rgba(0,255,140,0.15)"
                strokeWidth="1" strokeDasharray="4 8"
                style={{ animation: 'spinReverse 12s linear infinite', transformOrigin: '210px 230px' }} />

              {/* Tree trunk */}
              <line x1="210" y1="270" x2="210" y2="380" stroke="url(#rootGrad)" strokeWidth="3"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1.5s ease forwards', animationDelay: '0.5s' }} />

              {/* Root branches */}
              <line x1="210" y1="380" x2="150" y2="430" stroke="url(#rootGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.2s' }} />
              <line x1="210" y1="380" x2="270" y2="430" stroke="url(#rootGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.3s' }} />
              <line x1="210" y1="350" x2="120" y2="410" stroke="url(#rootGrad)" strokeWidth="1.5"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.5s' }} />
              <line x1="210" y1="350" x2="300" y2="410" stroke="url(#rootGrad)" strokeWidth="1.5"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.6s' }} />

              {/* Canopy branches */}
              <line x1="210" y1="190" x2="130" y2="130" stroke="url(#leafGrad)" strokeWidth="2.5"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '0.8s' }} />
              <line x1="210" y1="190" x2="290" y2="130" stroke="url(#leafGrad)" strokeWidth="2.5"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '0.9s' }} />
              <line x1="130" y1="130" x2="80" y2="80" stroke="url(#leafGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.1s' }} />
              <line x1="130" y1="130" x2="150" y2="70"  stroke="url(#leafGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.2s' }} />
              <line x1="290" y1="130" x2="260" y2="70"  stroke="url(#leafGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.3s' }} />
              <line x1="290" y1="130" x2="340" y2="80"  stroke="url(#leafGrad)" strokeWidth="2"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'branchGrow 1s ease forwards', animationDelay: '1.4s' }} />

              {/* Leaf nodes */}
              {[
                [80, 80], [150, 70], [260, 70], [340, 80],
                [110, 105], [310, 105],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="6" fill="var(--green)" filter="url(#aiGlow)"
                  style={{ animation: `nodePulse ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${1.5 + i * 0.15}s` }} />
              ))}

              {/* Data orbs around core */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const rx = 90, ry = 30
                const x = 210 + rx * Math.cos(rad)
                const y = 230 + ry * Math.sin(rad)
                return (
                  <circle key={i} cx={x} cy={y} r="5"
                    fill={i % 2 === 0 ? 'var(--cyan)' : 'var(--violet)'}
                    filter="url(#aiGlow)"
                    style={{ animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
                )
              })}

              {/* Energy lines */}
              {[
                [80, 80, 210, 230], [150, 70, 210, 230],
                [260, 70, 210, 230], [340, 80, 210, 230],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="url(#leafGrad)" strokeWidth="0.8" strokeDasharray="6 4"
                  opacity="0.4"
                  style={{ animation: `lineGrow 2s ease forwards`, animationDelay: `${1.8 + i * 0.1}s` }} />
              ))}
            </svg>

            {/* Floating particles inside visual */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={styles.vParticle}
                style={{
                  left: `${10 + i * 8}%`,
                  width: 3 + (i % 3),
                  height: 3 + (i % 3),
                  background: i % 2 === 0 ? 'var(--green)' : 'var(--cyan)',
                  animationDuration: `${3 + (i * 0.4)}s`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <span className="section-label">Oportunidades + Afiliación</span>
          <h2 id="ai-title" className="section-title">
            Crece con Voptimus y participa en{' '}
            <span>proyectos inteligentes</span>
          </h2>
          <p className={styles.text}>
            Únete a un equipo que desarrolla software, automatización e inteligencia
            artificial para empresas. Si eres anunciador, promotor o afiliado, también
            puedes generar ingresos con comisiones del 5% al 15% por cada cliente o
            venta concretada.
          </p>

          <div className={styles.features}>
            {[
              { label: 'Oportunidades para talento técnico y comercial', color: 'var(--green)' },
              { label: 'Comisiones del 5% al 15% por resultados', color: 'var(--cyan)' },
              { label: 'Participación en proyectos de software e IA', color: 'var(--violet)' },
              { label: 'Crecimiento profesional con acompañamiento', color: 'var(--green)' },
              { label: 'Modelo flexible para promotores y afiliados', color: 'var(--cyan)' },
              { label: 'Ingresos por clientes y ventas generadas', color: 'var(--violet)' },
            ].map((f) => (
              <div key={f.label} className={styles.feature}>
                <div className={styles.featureDot} style={{ background: f.color }} />
                <span className={styles.featureLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <TransitionButton href={ROUTES.contacto} className="btn-primary">
              Quiero unirme al equipo
            </TransitionButton>
            <TransitionButton href={ROUTES.contacto} className="btn-secondary">
              Ser promotor o afiliado
            </TransitionButton>
          </div>
        </div>
      </div>
    </section>
  )
}
