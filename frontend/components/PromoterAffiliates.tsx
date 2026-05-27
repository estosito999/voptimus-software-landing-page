'use client'

import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Code2,
  Handshake,
  Laptop,
  Network,
  Rocket,
  Users,
} from 'lucide-react'
import TransitionButton from '@/components/TransitionButton'
import { ROUTES } from '@/lib/routes'
import styles from './PromoterAffiliates.module.css'

const STEPS = [
  {
    title: 'Eliges cómo colaborar',
    text: 'Puedes recomendar clientes con necesidades digitales o postularte como programador para sumarte al equipo.',
  },
  {
    title: 'Conversamos contigo',
    text: 'Revisamos tu perfil, tus contactos o tus habilidades técnicas para encontrar la mejor forma de trabajar juntos.',
  },
  {
    title: 'Creamos oportunidades',
    text: 'Si la colaboración avanza, definimos acuerdos claros, responsabilidades y próximos pasos para cada proyecto.',
  },
]

const OPPORTUNITIES = [
  {
    tone: 'promoter',
    icon: Network,
    eyebrow: 'Promotores afiliados',
    title: 'Recomienda clientes y gana comisión',
    text: 'Para personas con red de contactos que conocen negocios, empresas o emprendedores que necesitan software, páginas web, automatización o IA.',
    highlight: '5% - 15%',
    highlightLabel: 'comisión por proyecto concretado',
    benefits: [
      { icon: Users, label: 'Ideal si tienes contactos empresariales' },
      { icon: Building2, label: 'Aplica para empresas, tiendas y emprendedores' },
      { icon: BadgeDollarSign, label: 'Ganas cuando el proyecto se concreta' },
    ],
  },
  {
    tone: 'developer',
    icon: Code2,
    eyebrow: 'Equipo de desarrollo',
    title: 'Súmate como programador o colaborador técnico',
    text: 'Para desarrolladores que quieran colaborar en proyectos de software, Blockchain, automatización o IA, con flexibilidad para trabajar por proyecto o de forma remota.',
    highlight: 'Automatización, Blockchain y sistemas',
    highlightLabel: 'áreas para colaborar por proyecto o remoto',
    benefits: [
      { icon: Laptop, label: 'Participación en proyectos reales' },
      { icon: Rocket, label: 'Espacio para crecer y aprender con práctica' },
      { icon: Handshake, label: 'Colaboración clara según tu disponibilidad' },
    ],
  },
] as const

export default function PromoterAffiliates() {
  return (
    <section
      id="colaboradores"
      className={styles.section}
      aria-labelledby="collaboration-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className="section-label">Colabora con Voptimus</span>
          <h1 id="collaboration-title" className={styles.title}>
            Únete como promotor o forma parte del{' '}
            <span>equipo de desarrollo</span>
          </h1>
          <p className={styles.lead}>
            En Voptimus Software buscamos personas que quieran crear oportunidades:
            promotores que conecten clientes con soluciones digitales y programadores
            que quieran construir software, automatizaciones e inteligencia artificial
            con nosotros.
          </p>

          <div className={styles.actions}>
            <TransitionButton
              href={`${ROUTES.soluciones}#formulario-promotores`}
              className="btn-primary"
            >
              Recomendar clientes
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </TransitionButton>
            <TransitionButton
              href={`${ROUTES.equipo}#formulario-equipo`}
              className="btn-secondary"
            >
              Postularme como programador
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </TransitionButton>
          </div>
        </div>

        <div className={styles.opportunities} aria-label="Formas de colaborar">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon

            return (
              <article
                key={opportunity.title}
                className={`${styles.opportunity} ${
                  opportunity.tone === 'developer' ? styles.developer : styles.promoter
                }`}
              >
                <div className={styles.opportunityHeader}>
                  <span className={styles.opportunityIcon}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={styles.opportunityEyebrow}>{opportunity.eyebrow}</span>
                </div>

                <h2>{opportunity.title}</h2>
                <p className={styles.opportunityText}>{opportunity.text}</p>

                <div className={styles.highlight}>
                  <p className={styles.highlightValue}>{opportunity.highlight}</p>
                  <p className={styles.highlightLabel}>{opportunity.highlightLabel}</p>
                </div>

                <div className={styles.benefits}>
                  {opportunity.benefits.map(({ icon: BenefitIcon, label }) => (
                    <div key={label} className={styles.benefit}>
                      <span className={styles.benefitIcon}>
                        <BenefitIcon size={18} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className={styles.steps} aria-label="Proceso para colaboradores">
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
