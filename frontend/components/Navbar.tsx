'use client'

import { useState, useEffect } from 'react'
import TransitionButton from '@/components/TransitionButton'
import { NAV_LINKS, ROUTES } from '@/lib/routes'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Navegación principal">
        <TransitionButton
          href={ROUTES.home}
          onClick={() => setMenuOpen(false)}
          className={styles.logo}
          aria-label="Voptimus SOFTWARE - Inicio"
        >
          <span className={styles.logoV}>V</span>optimus{' '}
          <span className={styles.logoSoft}>SOFTWARE</span>
        </TransitionButton>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <TransitionButton
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={styles.link}
              >
                {l.label}
              </TransitionButton>
            </li>
          ))}
          <li>
            <TransitionButton
              href={ROUTES.contacto}
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
            >
              Contáctanos
            </TransitionButton>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
