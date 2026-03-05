'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CreditCard, Shield, TrendingDown, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ServicesBrief() {
  const services = [
    {
      icon: CreditCard,
      title: 'Gesek Tunai',
      description:
        'Tarik tunai dengan kartu kredit Anda secara mudah dan cepat tanpa biaya tambahan.',
    },
    {
      icon: TrendingDown,
      title: 'Pelunasan Kartu Kredit',
      description:
        'Solusi untuk menghindari bunga berbunga dengan proses cepat dan rate kompetitif.',
    },
    {
      icon: Zap,
      title: 'Proses Kilat',
      description:
        'Dana cair dalam 10-15 menit langsung ke rekening Anda dengan keamanan terjamin.',
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description:
        'Sistem keamanan berlapis untuk melindungi data dan kepemilikan kartu Anda.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-background'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Layanan Kami
          </h2>
          <p className='text-lg text-foreground/60 max-w-2xl mx-auto'>
            Solusi gesek tunai terbaik dengan berbagai pilihan kartu kredit dan
            platform pembayaran digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300'
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'
                >
                  <Icon className='w-6 h-6 text-primary' />
                </motion.div>
                <h3 className='text-lg font-bold text-foreground mb-2'>
                  {service.title}
                </h3>
                <p className='text-sm text-foreground/60 leading-relaxed'>
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <Link href='/services'>
            <Button
              size='lg'
              className='bg-primary text-primary-foreground hover:bg-accent'
            >
              Lihat Semua Layanan Selengkapnya
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
