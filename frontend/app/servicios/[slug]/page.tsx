import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TransitionButton from '@/components/TransitionButton'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services'
import { ROUTES } from '@/lib/routes'
import styles from './services.module.css'

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <span className="section-label">Nuestro Servicio</span>
              <h1 className="section-title">{service.title}</h1>
              <p className="section-subtitle">{service.description}</p>
            </div>

            <div className={styles.content}>
              <div className={styles.details}>
                <h2>¿Qué incluye?</h2>
                <ul className={styles.list}>
                  {service.details.map((detail) => (
                    <li key={detail} className={styles.listItem}>
                      <span className={styles.checkmark}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cta}>
                <h2>¿Listo para comenzar?</h2>
                <p>Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos.</p>
                <TransitionButton href={ROUTES.contacto} className="btn-primary">
                  Solicitar consulta
                </TransitionButton>
              </div>
            </div>

            <div className={styles.backRow}>
              <TransitionButton href={ROUTES.servicios} className={styles.backBtn}>
                ← Volver a servicios
              </TransitionButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
