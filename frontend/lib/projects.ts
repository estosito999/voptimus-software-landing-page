export interface Project {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  accentColor: 'cyan' | 'violet' | 'green'
}

export const PROJECTS: Project[] = [
  {
    slug: 'erp-logistico',
    title: 'ERP Logístico',
    category: 'Sistemas Empresariales',
    description: 'Sistema de gestión integral para operaciones de distribución con seguimiento en tiempo real.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    accentColor: 'cyan',
  },
  {
    slug: 'asistente-ia-salud',
    title: 'Asistente IA en Salud',
    category: 'Inteligencia Artificial',
    description: 'Chatbot médico con NLP para triaje automático y orientación de pacientes.',
    tech: ['Python', 'FastAPI', 'LLM', 'React'],
    accentColor: 'green',
  },
  {
    slug: 'plataforma-ecommerce',
    title: 'Plataforma E-commerce',
    category: 'Desarrollo Web',
    description: 'Tienda online de alto rendimiento con checkout optimizado y analíticas avanzadas.',
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Vercel'],
    accentColor: 'violet',
  },
  {
    slug: 'app-finanzas-movil',
    title: 'App Finanzas Móvil',
    category: 'Aplicaciones Móviles',
    description: 'Aplicación para gestión de finanzas personales con sincronización bancaria automática.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Plaid'],
    accentColor: 'cyan',
  },
  {
    slug: 'automatizacion-rrhh',
    title: 'Automatización RRHH',
    category: 'Automatización de Procesos',
    description: 'Pipeline automatizado de selección y onboarding con integración a ATS y Slack.',
    tech: ['Python', 'n8n', 'PostgreSQL', 'Slack API'],
    accentColor: 'green',
  },
  {
    slug: 'dashboard-iot',
    title: 'Dashboard IoT Industrial',
    category: 'Consultoría Tecnológica',
    description: 'Plataforma de monitoreo en tiempo real para sensores industriales con alertas predictivas.',
    tech: ['React', 'WebSockets', 'InfluxDB', 'Grafana'],
    accentColor: 'violet',
  },
]
