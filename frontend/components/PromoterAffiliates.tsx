'use client'

import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Handshake,
  Network,
  Users,
} from 'lucide-react'
import TransitionButton from '@/components/TransitionButton'
import { ROUTES } from '@/lib/routes'
import styles from './PromoterAffiliates.module.css'

const STEPS = [
  {
    title: 'Recomiendas un contacto',
    text: 'Nos compartes el negocio, emprendedor o empresa que necesita una solución digital.',
  },
  {
    title: 'Evaluamos el proyecto',
    text: 'Conversamos con el cliente, entendemos la necesidad y preparamos una propuesta.',
  },
  {
    title: 'Ganas por resultado',
    text: 'Si el proyecto se concreta, recibes una comisión acordada según el tipo de servicio.',
  },
]

const BENEFITS = [
  { icon: Users, label: 'Ideal para personas con red de contactos empresariales' },
  { icon: Building2, label: 'Aplica para sistemas, páginas web, automatización e IA' },
  { icon: Handshake, label: 'Acuerdo claro antes de iniciar la recomendación' },
  { icon: BadgeDollarSign, label: 'Comisiones del 5% al 15% por proyecto concretado' },
]

export default function PromoterAffiliates() {
  return (
    <section
      id="promotores"
      className={styles.section}
      aria-labelledby="promoter-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className="section-label">Promotores afiliados</span>
          <h1 id="promoter-title" className={styles.title}>
            Gana comisiones recomendando clientes a{' '}
            <span>Voptimus Software</span>
          </h1>
          <p className={styles.lead}>
            ¿Conoces personas o empresas que necesitan un sistema, una página web
            o automatización? Únete como promotor afiliado de Voptimus Software y
            gana comisiones del 5% al 15% por cada cliente que recomiendes y
            concrete un proyecto con nosotros.
          </p>
          <p className={styles.text}>
            Muchas empresas necesitan soluciones digitales, pero no conocen a
            quién acudir. Si tú conoces negocios, emprendedores o empresas con
            una necesidad real, puedes recomendarlos y participar en el valor que
            generamos juntos.
          </p>

          <div className={styles.actions}>
            <TransitionButton
              href={`${ROUTES.soluciones}#formulario-promotores`}
              className="btn-primary"
            >
              Unirme como promotor
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </TransitionButton>
            <TransitionButton
              href={`${ROUTES.equipo}#formulario-equipo`}
              className="btn-secondary"
            >
              Unirme al equipo de desarrollo
            </TransitionButton>
          </div>
        </div>

        <div className={styles.panel} aria-label="Resumen del programa de promotores">
          <div className={styles.commission}>
            <Network size={26} strokeWidth={1.8} aria-hidden="true" />
            <div>
              <p className={styles.commissionValue}>5% - 15%</p>
              <p className={styles.commissionLabel}>
                Comisión por proyecto concretado
              </p>
            </div>
          </div>

          <div className={styles.benefits}>
            {BENEFITS.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.benefit}>
                <span className={styles.benefitIcon}>
                  <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.steps} aria-label="Proceso para promotores">
        {STEPS.map((step, index) => (
          <article key={step.title} className={`glass-card ${styles.step}`}>
            <span className={styles.stepNumber}>0{index + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
