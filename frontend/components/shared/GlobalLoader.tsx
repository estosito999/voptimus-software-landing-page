import type { CSSProperties } from 'react'
import styles from '@/components/PageTransition.module.css'

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  tx: `${((i * 19) % 70) - 35}px`,
  ty: `${-20 - ((i * 23) % 60)}px`,
  delay: `${((i * 0.07) % 0.6).toFixed(2)}s`,
}))

const NETWORK_NODES = [
  { id: 1, x: '13%', y: '29%', size: '7px', delay: '0s' },
  { id: 2, x: '26%', y: '64%', size: '5px', delay: '0.18s' },
  { id: 3, x: '41%', y: '22%', size: '6px', delay: '0.34s' },
  { id: 4, x: '58%', y: '70%', size: '8px', delay: '0.12s' },
  { id: 5, x: '72%', y: '36%', size: '5px', delay: '0.46s' },
  { id: 6, x: '86%', y: '58%', size: '7px', delay: '0.28s' },
]

const NETWORK_PATHS = [
  { id: 1, d: 'M 10 32 C 21 23 32 22 44 31 S 68 48 88 38', delay: '0s' },
  { id: 2, d: 'M 15 66 C 30 54 42 68 56 70 S 76 65 90 56', delay: '0.35s' },
  { id: 3, d: 'M 28 17 C 36 34 50 42 63 40 S 77 31 88 43', delay: '0.7s' },
  { id: 4, d: 'M 22 77 C 36 65 45 43 58 39 S 76 40 86 62', delay: '1.05s' },
]

const TESSERACT_LINKS = [
  { id: 1, x: '8px', y: '9px', angle: '45deg' },
  { id: 2, x: '105px', y: '9px', angle: '135deg' },
  { id: 3, x: '105px', y: '105px', angle: '225deg' },
  { id: 4, x: '8px', y: '105px', angle: '315deg' },
]

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
      <div className={styles.grid} />
      <div className={styles.aurora} />
      <div className={styles.network} aria-hidden="true">
        <svg className={styles.networkSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          {NETWORK_PATHS.map((path) => (
            <path
              key={path.id}
              d={path.d}
              className={styles.networkPath}
              style={{ '--delay': path.delay } as CSSProperties}
            />
          ))}
        </svg>
        {NETWORK_NODES.map((node) => (
          <span
            key={node.id}
            className={styles.networkNode}
            style={{
              '--x': node.x,
              '--y': node.y,
              '--size': node.size,
              '--delay': node.delay,
            } as CSSProperties}
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
              '--tx': particle.tx,
              '--ty': particle.ty,
              '--delay': particle.delay,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className={styles.loaderCard}>
        <div className={styles.tesseractStage} aria-hidden="true">
          <div className={styles.tesseract}>
            <span className={`${styles.tesseractSquare} ${styles.tesseractBack}`} />
            <span className={`${styles.tesseractSquare} ${styles.tesseractFront}`} />
            {TESSERACT_LINKS.map((link) => (
              <span
                key={link.id}
                className={styles.tesseractLink}
                style={{
                  '--x': link.x,
                  '--y': link.y,
                  '--angle': link.angle,
                } as CSSProperties}
              />
            ))}
            <span className={`${styles.tesseractNode} ${styles.nodeA}`} />
            <span className={`${styles.tesseractNode} ${styles.nodeB}`} />
            <span className={`${styles.tesseractNode} ${styles.nodeC}`} />
            <span className={`${styles.tesseractNode} ${styles.nodeD}`} />
          </div>
        </div>
        <div className={styles.loaderCopy}>
          <span className={styles.loaderEyebrow}>Voptimus SOFTWARE</span>
          <p className={styles.loaderText}>Conectando nodos digitales</p>
          <div className={styles.progress} aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
