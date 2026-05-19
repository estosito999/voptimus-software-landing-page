'use client'

import { useState, useEffect } from 'react'
import { usePageTransition } from '@/hooks/usePageTransition'
import { NAV_LINKS, ROUTES } from '@/lib/routes'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { transition } = usePageTransition()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    transition(href)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Navegación principal">
        <button
          onClick={() => handleNav(ROUTES.home)}
          className={styles.logo}
          aria-label="Voptimus SOFTWARE - Inicio"
        >
          <span className={styles.logoV}>V</span>optimus{' '}
          <span className={styles.logoSoft}>SOFTWARE</span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={styles.link}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav(ROUTES.contacto)}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
            >
              Contáctanos
            </button>
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
