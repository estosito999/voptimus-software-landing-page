'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './nosotros.module.css'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <span className="section-label">Sobre nosotros</span>
              <h1 className="section-title">Voptimus SOFTWARE</h1>
              <p className="section-subtitle">
                Transformamos ideas en soluciones de software inteligente y sostenible
              </p>
            </div>

            <div className={styles.content}>
              <div className={styles.mission}>
                <h2>Nuestra Misión</h2>
                <p>
                  Empoderar empresas de todos los tamaños con tecnología innovadora, sostenible y accesible.
                  Creemos que la tecnología debe ser un catalizador para el crecimiento responsable y el impacto positivo
                  en la sociedad.
                </p>
              </div>

              <div className={styles.mission}>
                <h2>Nuestra Visión</h2>
                <p>
                  Ser el socio tecnológico preferido para empresas que buscan transformarse digitalmente con inteligencia,
                  sostenibilidad y excelencia. Queremos contribuir a un futuro donde la tecnología y la naturaleza coexistan
                  en armonía.
                </p>
              </div>

              <div className={styles.values}>
                <h2>Valores</h2>
                <div className={styles.valuesList}>
                  {[
                    { title: 'Innovación', desc: 'Buscamos constantemente nuevas formas de resolver problemas' },
                    { title: 'Sostenibilidad', desc: 'Desarrollamos con responsabilidad ambiental' },
                    { title: 'Excelencia', desc: 'Nos comprometemos con la calidad en cada proyecto' },
                    { title: 'Transparencia', desc: 'Comunicación clara y honesta con nuestros clientes' },
                    { title: 'Colaboración', desc: 'Trabajamos juntos para alcanzar resultados excepcionales' },
                    { title: 'Impacto', desc: 'Generamos valor real y medible para nuestros socios' },
                  ].map((value) => (
                    <div key={value.title} className={styles.valueCard}>
                      <h3>{value.title}</h3>
                      <p>{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.team}>
                <h2>Nuestro Equipo</h2>
                <p>
                  Contamos con un equipo multidisciplinario de expertos en desarrollo, diseño, inteligencia artificial,
                  y consultoría tecnológica. Cada miembro aporta años de experiencia y una pasión genuina por la tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
