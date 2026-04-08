'use client'

import { Fragment } from 'react'

import Hero from '@/components/home/hero'
import PaymentMethodsScroll from '@/components/home/payment-method-scroll'
import ServicesBrief from '@/components/home/services-brief'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Clock, CreditCard, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const quickServices = [
    {
      icon: Zap,
      title: 'Cepat & Efisien',
      description: 'Proses permohonan yang cepat dalam hitungan menit',
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Sistem keamanan berlapis untuk melindungi data Anda',
    },
    {
      icon: CreditCard,
      title: 'Berbagai Metode Pembayaran',
      description: 'Terima berbagai metode pembayaran untuk kemudahan Anda',
    },
    {
      icon: Clock,
      title: 'Tersedia 24/7',
      description: 'Layanan pelanggan kami siap membantu kapan saja',
    },
  ]

  return (
    <Fragment>
      <Hero />
      <ServicesBrief />
      <PaymentMethodsScroll />

      {/* Why Choose Us Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-accent'>
        <div className='absolute inset-0 z-0 bg-grid-pattern opacity-10 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_75%)]' />

        <div className='relative z-10 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-primary-foreground mb-2.5'>
              Mengapa Memilih Kami?
            </h2>
            <p className='text-base sm:text-lg text-primary-foreground max-w-2xl mx-auto'>
              Kami menyediakan solusi gesek tunai terbaik di Palembang dengan
              layanan terpercaya dan transparan
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {quickServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300'
                >
                  <div className='mb-4'>
                    <IconComponent className='size-6 sm:size-8 text-primary' />
                  </div>
                  <h3 className='text-base md:text-lg font-semibold text-foreground mb-1'>
                    {service.title}
                  </h3>
                  <p className='text-sm md:text-base text-muted-foreground'>
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='flex gap-4 justify-center mt-12 flex-col sm:flex-row'
          >
            <Link href='/services'>
              <Button
                size='lg'
                className='bg-white text-primary hover:bg-white/80 w-full sm:w-auto'
              >
                Lihat Semua Layanan
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-green-600 text-white hover:bg-green-600/80 w-full sm:w-auto'
              >
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Fragment>
  )
}
