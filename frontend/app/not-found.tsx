'use client'

import TransitionButton from '@/components/TransitionButton'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.page} aria-label="Página no encontrada">
      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* 404 large numeral */}
        <div className={styles.code} aria-hidden="true">
          <span className={styles.digit}>4</span>
          <span className={styles.zero}>0</span>
          <span className={styles.digit}>4</span>
        </div>

        <div className={styles.content}>
          <span className="section-label">Error 404</span>
          <h1 className={styles.title}>Página no encontrada</h1>
          <p className={styles.desc}>Parece que esta ruta no existe.</p>

          <div className={styles.actions}>
            <TransitionButton href="/" className="btn-primary">
              Volver al inicio
            </TransitionButton>
            <TransitionButton href="/servicios" className="btn-secondary">
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TransitionButton>
          </div>
        </div>
      </div>
    </main>
  )
}
