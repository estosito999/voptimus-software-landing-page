export interface Service {
  slug: string
  title: string
  description: string
  icon: string
  iconStyle: 'cyan' | 'violet' | 'green'
  details: string[]
}

export const services: Service[] = [
  {
    slug: 'desarrollo-web',
    icon: '⬡',
    iconStyle: 'cyan',
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, rápidas y escalables con las mejores tecnologías del mercado.',
    details: [
      'Aplicaciones web progresivas (PWA)',
      'Desarrollo full-stack con React, Next.js y TypeScript',
      'Optimización de rendimiento y SEO',
      'Diseño responsive y accesibilidad (WCAG)',
      'Integración con APIs y servicios externos',
      'Hosting y monitoreo en la nube',
    ],
  },
  {
    slug: 'sistemas-empresariales',
    icon: '◈',
    iconStyle: 'violet',
    title: 'Sistemas Empresariales',
    description: 'ERPs, CRMs y plataformas a medida para optimizar la operación de tu empresa.',
    details: [
      'Desarrollo de ERP personalizados',
      'Plataformas CRM integradas',
      'Automatización de procesos de negocio',
      'Gestión de inventario y logística',
      'Reportería y dashboards analíticos',
      'Integración con sistemas legacy',
    ],
  },
  {
    slug: 'inteligencia-artificial',
    icon: '◬',
    iconStyle: 'green',
    title: 'Inteligencia Artificial',
    description: 'Modelos de IA, machine learning y procesamiento de datos para decisiones más inteligentes.',
    details: [
      'Modelos de machine learning personalizados',
      'Procesamiento de lenguaje natural (NLP)',
      'Visión por computadora y análisis de imágenes',
      'Predicción y análisis predictivo',
      'Chatbots y asistentes virtuales con IA',
      'Fine-tuning de modelos grandes (LLMs)',
    ],
  },
  {
    slug: 'automatizacion-procesos',
    icon: '⬡',
    iconStyle: 'cyan',
    title: 'Automatización de Procesos',
    description: 'Flujos automatizados que eliminan tareas repetitivas y aumentan la productividad.',
    details: [
      'Automatización RPA (Robotic Process Automation)',
      'Workflows inteligentes y orquestación',
      'Integración de datos automática',
      'Monitoreo y alertas en tiempo real',
      'Reducción de costos operacionales',
      'Escalabilidad sin intervención humana',
    ],
  },
  {
    slug: 'aplicaciones-moviles',
    icon: '◈',
    iconStyle: 'violet',
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma para iOS y Android con experiencias fluidas.',
    details: [
      'Apps nativas iOS y Android',
      'Desarrollo multiplataforma con React Native',
      'Diseño UX/UI optimizado para mobile',
      'Integración con servicios de geolocalización',
      'Notificaciones push y real-time',
      'Optimización de batería y almacenamiento',
    ],
  },
  {
    slug: 'bases-datos-nosql',
    icon: '◬',
    iconStyle: 'green',
    title: 'Bases de Datos NoSQL',
    description: 'Arquitecturas de datos flexibles y de alto rendimiento con MongoDB, Firebase y más.',
    details: [
      'Arquitectura de datos NoSQL',
      'MongoDB, Firebase, DynamoDB y más',
      'Escalabilidad horizontal y sharding',
      'Replicación y backup automático',
      'Optimización de consultas',
      'Migración desde bases relacionales',
    ],
  },
  {
    slug: 'consultoria-tecnologica',
    icon: '⬡',
    iconStyle: 'cyan',
    title: 'Consultoría Tecnológica',
    description: 'Análisis, estrategia y guía experta para tomar las mejores decisiones tecnológicas.',
    details: [
      'Análisis de arquitectura actual',
      'Recomendaciones de modernización',
      'Planificación de proyectos tecnológicos',
      'Selección de herramientas y plataformas',
      'Capacitación y transfer de conocimiento',
      'Optimización de operaciones de TI',
    ],
  },
  {
    slug: 'integracion-apis',
    icon: '◈',
    iconStyle: 'violet',
    title: 'Integración de APIs',
    description: 'Conectamos tus sistemas con servicios externos para una operación unificada y eficiente.',
    details: [
      'Integración con múltiples APIs',
      'Desarrollo de APIs REST y GraphQL',
      'Webhooks y integraciones en tiempo real',
      'Sincronización de datos entre plataformas',
      'Manejo de errores y reintentos',
      'Documentación y testing de APIs',
    ],
  },
]

export const SERVICES = services

/** Get a single service by slug. Returns undefined if not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

/** Get all valid slugs (used for generateStaticParams) */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
