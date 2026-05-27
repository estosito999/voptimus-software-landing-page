import { Quote, Star } from 'lucide-react'
import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    quote:
      'El sistema de gestion de Eventos Academicos Universitarios es una herramienta indispensable para nuestra universidad. Nos ha permitido organizar y gestionar nuestros eventos académicos de manera eficiente, ahorrando tiempo y recursos. La interfaz es intuitiva y el soporte técnico es excelente. ¡Recomiendo esta solución a cualquier institución educativa!',
    person: 'Administradora Institucional',
    context: 'Sistema de gestión de eventos académicos',
    result: 'Procesos más ordenados',
    color: 'cyan',
  },
  {
    quote:
      'Necesitábamos un software que validara las facturas para nuestro negocio de Restaurante JAJO. Voptimus desarrolló una solución personalizada que se integró perfectamente con nuestra plataforma. Ahora, el proceso de validación es automático y confiable, lo que nos ha permitido reducir errores y mejorar la eficiencia en la gestión de nuestras finanzas. ¡Estamos muy satisfechos con los resultados!',
    person: 'Responsable comercial',
    context: 'Sistema de gestión de facturas',
    result: 'Mejora en la gestión financiera',
    color: 'green',
  },
  {
    quote:
      'Buscaba una solución integral para el control de cuentas y la atención al cliente en mi restaurante. Voptimus diseñó un sistema a medida para la gestión de pedidos que se adaptó perfectamente a nuestro flujo de trabajo. Gracias a esto, optimizamos la eficiencia operativa y elevamos la calidad del servicio. ¡El resultado superó mis expectativas!',
    person: 'Responsable comercial',
    context: 'Sistema de gestión de pedidos para restaurante',
    result: 'Operación más eficiente',
    color: 'violet',
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
} as const

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">Testimonios</span>
          <h2 id="testimonials-title" className="section-title">
            Opiniones de clientes sobre <span>soluciones desarrolladas</span>
          </h2>
          <p className="section-subtitle">
            Empresas y emprendedores valoran trabajar con sistemas claros,
            útiles y pensados para su operación diaria.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {TESTIMONIALS.map((item, index) => {
            const color = COLOR_MAP[item.color]

            return (
              <article
                key={item.context}
                className={`glass-card ${styles.card}`}
                role="listitem"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.cardHead}>
                  <span
                    className={styles.quoteIcon}
                    style={{
                      color: color.solid,
                      background: color.dim,
                      borderColor: color.border,
                    }}
                    aria-hidden="true"
                  >
                    <Quote size={18} strokeWidth={2} />
                  </span>
                  <span className={styles.stars} aria-label="Valoración positiva">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={14}
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                </div>

                <p className={styles.quote}>“{item.quote}”</p>

                <div className={styles.footer}>
                  <div>
                    <h3 className={styles.person}>{item.person}</h3>
                    <p className={styles.context}>{item.context}</p>
                  </div>
                  <span
                    className={styles.result}
                    style={{
                      color: color.solid,
                      background: color.dim,
                      borderColor: color.border,
                    }}
                  >
                    {item.result}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
