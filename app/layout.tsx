import FloatingWhatsAppButton from '@/components/global/floating-whatsapp-button'
import Footer from '@/components/global/footer'
import NavigationBar from '@/components/global/navigation-bar'
import ScrollToTop from '@/shared/providers/scroll-to-top'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CM Gestun - Layanan Tunai Palembang',
  description:
    'CM Gestun adalah layanan tunai palembang yang menawarkan solusi gesek tunai secara offline dan online untuk berbagai kartu kredit dan layanan finansial digital dengan rate yang kompetitif dan proses yang cepat.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color='#333'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing='ease'
          speed={200}
          zIndex={99999}
        />
        <ScrollToTop />
        <NavigationBar />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
