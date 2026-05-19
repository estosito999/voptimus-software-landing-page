/** Centralized route constants — import these instead of hardcoding strings */

export const ROUTES = {
  home:        '/',
  servicios:   '/servicios',
  soluciones:  '/soluciones-ia',
  equipo:       '/equipo',
  proyectos:   '/proyectos',
  nosotros:    '/nosotros',
  contacto:    '/contacto',
  servicio: (slug: string) => `/servicios/${slug}`,
} as const

/** Nav links used by Navbar and Footer */
export const NAV_LINKS = [
  { href: ROUTES.home,       label: 'Inicio' },
  { href: ROUTES.servicios,  label: 'Servicios' },
  { href: ROUTES.soluciones, label: 'Soluciones IA' },
  { href: ROUTES.equipo,     label: 'Equipo' },
  { href: ROUTES.nosotros,   label: 'Nosotros' },
  { href: ROUTES.contacto,   label: 'Contacto' },
] as const
