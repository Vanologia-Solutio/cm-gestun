'use client'

import { Button } from '@/components/ui/button'
import { LINK_WHATSAPP } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-secondary to-background pt-16'>
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: scrollY * 0.5 }}
        className='absolute inset-0 opacity-20'
      >
        <div className='absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
      </motion.div>

      <div className='relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center'>
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6'>
            Solusi Tunai{' '}
            <span className='bg-linear-to-r from-primary to-accent bg-clip-text text-transparent'>
              Terpercaya
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto'
        >
          Dapatkan solusi tunai cepat dan aman untuk kebutuhan finansial Anda di
          Palembang dengan proses yang transparan dan terpercaya.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
        >
          <motion.a
            href='/services'
            whileHover={{ scale: 1.025 }}
          >
            <Button
              size='lg'
              className='bg-primary text-primary-foreground w-full sm:w-auto'
            >
              Jelajahi Layanan <ArrowRight size={20} />
            </Button>
          </motion.a>
          <motion.a
            href={LINK_WHATSAPP}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.025 }}
          >
            <Button size='lg' className='bg-green-600 text-white hover:bg-green-600/80 w-full sm:w-auto'>
              Chat WhatsApp
            </Button>
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-foreground/60'
        >
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span>Proses Cepat & Mudah</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span>Terpercaya & Transparan</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span>Pelayanan Profesional</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='text-primary'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
