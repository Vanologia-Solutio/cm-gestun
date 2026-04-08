'use client'

import heroImage from '@/assets/hero-image.webp'
import { Button } from '@/components/ui/button'
import { LINK_WHATSAPP } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-secondary to-background py-28 sm:py-24'>
      {/* Elegant Background Texture */}
      <div className='absolute inset-0 z-0 bg-grid-pattern opacity-50 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_80%)]' />

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: scrollY * 0.5 }}
        className='absolute inset-0 opacity-20'
      >
        <div className='absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
      </motion.div>

      <div className='relative z-10 w-full max-w-6xl mx-auto px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-12'>
        {/* Content Side */}
        <div className='flex-1 text-center lg:text-left'>
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6'>
              Kepepet Tapi Harus Cair?{' '}
              <span className='bg-linear-to-br from-primary to-amber-600 bg-clip-text text-transparent animate-bounce inline-block'>
                Gaskeun!
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0'
          >
            Solusi pencairan dana terpercaya di Palembang dengan proses jelas
            dan aman.{' '}
            <strong>
              Pengajuan bisa dilakukan secara <em>online</em>
            </strong>
            , jadi lebih fleksibel kapan saja.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12'
          >
            <motion.a href='/services' whileHover={{ scale: 1.025 }}>
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
              <Button
                size='lg'
                className='bg-green-600 text-white hover:bg-green-600/80 w-full sm:w-auto'
              >
                Chat WhatsApp
              </Button>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className='relative aspect-square rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src={heroImage}
            alt='Hero Image'
            fill
            className='object-cover'
            priority
          />
        </div>
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
