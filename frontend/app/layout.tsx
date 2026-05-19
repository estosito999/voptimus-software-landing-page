import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { LoadingProvider } from '@/context/LoadingContext'
import PageTransition from '@/components/PageTransition'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voptimus SOFTWARE – Software Inteligente para Empresas',
  description:
    'Desarrollamos soluciones web, sistemas empresariales, automatización e inteligencia artificial para optimizar el crecimiento de tu negocio.',
  keywords:
    'software, inteligencia artificial, desarrollo web, automatización, sistemas empresariales, NoSQL, APIs',
  authors: [{ name: 'Voptimus SOFTWARE' }],
  openGraph: {
    title: 'Voptimus SOFTWARE',
    description: 'Transformamos ideas en software inteligente',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#020817',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <LoadingProvider>
          <PageTransition />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
