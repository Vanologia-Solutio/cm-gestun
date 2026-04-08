'use client'

import serviceImage from '@/assets/cc.webp'
import { motion } from 'framer-motion'
import {
  Calculator,
  CreditCard,
  Globe,
  Shield,
  TrendingDown,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesBrief() {
  const services = [
    {
      icon: CreditCard,
      title: 'Gesek Tunai',
      description:
        'Tarik tunai dari limit kartu kredit Anda dengan proses mudah, cepat, dan transparan.',
    },
    {
      icon: TrendingDown,
      title: 'Pelunasan Kartu Kredit',
      description:
        'Solusi untuk menghindari bunga berbunga dengan proses efisien dan rate kompetitif.',
    },
    {
      icon: Globe,
      title: 'Layanan Online',
      description:
        'Seluruh proses dapat dilakukan secara online dengan praktis, tanpa perlu datang langsung.',
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description:
        'Sistem keamanan berlapis untuk menjaga kerahasiaan data dan keamanan transaksi Anda.',
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
    <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary to-amber-800 overflow-hidden'>
      <div className='absolute inset-0 z-10 bg-dot-pattern opacity-20 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_80%)]' />

      <div className='absolute inset-0 z-0'>
        <Image
          src={serviceImage}
          alt='Ilustrasi Tim'
          fill
          className='object-cover opacity-25 grayscale'
        />
        <div className='absolute inset-0 backdrop-blur-xs' />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-background mb-2.5'>
            Layanan Kami
          </h2>
          <p className='text-lg text-background max-w-2xl mx-auto'>
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
          <Link
            href='/services#calculator'
            className='inline-flex items-center justify-center gap-4 px-10 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-accent transition-colors duration-300 w-full sm:w-auto'
          >
            <Calculator />
            <div className='flex flex-col items-start'>
              <p>Simulasi Sekarang</p>
              <span className='text-xs text-white/75'>
                *Hitung estimasi biaya
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
