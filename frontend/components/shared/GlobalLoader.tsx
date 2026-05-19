import type { CSSProperties } from 'react'
import styles from '@/components/PageTransition.module.css'

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  delay: `${((i * 0.07) % 0.6).toFixed(2)}s`,
}))

interface GlobalLoaderProps {
  active?: boolean
  phase?: 'visible' | 'hiding'
  ariaLabel?: string
}

export default function GlobalLoader({
  active = true,
  phase = 'visible',
  ariaLabel,
}: GlobalLoaderProps) {
  if (!active) return null

  const accessibilityProps = ariaLabel
    ? { role: 'status' as const, 'aria-label': ariaLabel }
    : { role: 'presentation' as const, 'aria-hidden': true }

  return (
    <div
      className={`${styles.overlay} ${phase === 'hiding' ? styles.hiding : ''}`}
      {...accessibilityProps}
    >
      <div className={styles.background} />

      <div className={styles.glowContainer}>
        <svg viewBox="0 0 1024 1024" className={styles.linesSvg}>
          <line x1="0" y1="256" x2="1024" y2="256" className={styles.line} />
          <line x1="0" y1="512" x2="1024" y2="512" className={styles.line} />
          <line x1="0" y1="768" x2="1024" y2="768" className={styles.line} />
          <line x1="256" y1="0" x2="256" y2="1024" className={styles.line} />
          <line x1="512" y1="0" x2="512" y2="1024" className={styles.line} />
          <line x1="768" y1="0" x2="768" y2="1024" className={styles.line} />
          <line x1="0" y1="0" x2="1024" y2="1024" className={styles.line} />
          <line x1="1024" y1="0" x2="0" y2="1024" className={styles.line} />
          <path d="M 200 200 Q 400 300 600 200 T 900 200" className={styles.neuralPath} />
          <path d="M 150 500 Q 300 600 500 500 T 800 500" className={styles.neuralPath} />
          <path d="M 100 800 Q 350 700 600 800 T 950 800" className={styles.neuralPath} />
        </svg>
      </div>

      <div className={styles.cubesContainer}>
        {[0, 0.1, 0.2, 0.3, 0.4].map((delay) => (
          <div
            key={delay}
            className={styles.cube}
            style={{ '--delay': `${delay}s` } as CSSProperties}
          />
        ))}
      </div>

      <div className={styles.particlesContainer}>
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              '--x': particle.x,
              '--y': particle.y,
              '--delay': particle.delay,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className={styles.ringsContainer}>
        {[0, 0.25, 0.5].map((delay) => (
          <div
            key={delay}
            className={styles.ring}
            style={{ '--delay': `${delay}s` } as CSSProperties}
          />
        ))}
      </div>

      <div className={styles.portalGlow} />
      <div className={styles.distortion} />

      <div className={styles.loaderLabel}>
        <span className={styles.loaderV}>V</span>optimus
        <span className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
      </div>
    </div>
  )
}
