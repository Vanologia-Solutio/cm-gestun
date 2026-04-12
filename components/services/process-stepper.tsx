'use client'

import { motion } from 'framer-motion'
import { CheckCircle, FileText, Zap } from 'lucide-react'
import ServiceCalculator from './service-calculator'

export default function ProcessStepper() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Isi Formulir',
      desc: 'Data diri dengan akurat',
    },
    {
      number: 2,
      icon: CheckCircle,
      title: 'Transaksi',
      desc: 'Proses 5 menit kerja (S&K berlaku)',
    },
    {
      number: 3,
      icon: Zap,
      title: 'Dana Cair',
      desc: 'Transfer ke rekening Anda',
    },
  ]

  return (
    <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary to-accent overflow-hidden'>
      {/* Elegant Background Texture */}
      <div className='absolute inset-0 z-0 bg-dot-pattern opacity-35 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-background mb-2.5'>
            Proses Gesek Tunai Kami
          </h2>
          <p className='text-base sm:text-lg text-background/75 max-w-3xl mx-auto'>
            Ikuti langkah-langkah sederhana kami untuk mendapatkan dana tunai
            dengan cepat dan aman. Hitung estimasi dana yang akan Anda terima di
            bawah ini.
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Stepper */}
        <div className='relative mb-8 sm:mb-16'>
          {/* Connecting Line */}
          <div className='hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border' />

          <div className='grid md:grid-cols-3 gap-4 sm:gap-8'>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className='relative'>
                  {/* Step Number */}
                  <div className='hidden sm:flex justify-center mb-6'>
                    <div className='size-16 bg-background text-primary rounded-full flex items-center justify-center font-bold text-xl relative z-10 shadow-sm'>
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className='text-center p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-200'>
                    <Icon className='size-6 text-accent mx-auto mb-3' />
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      {step.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <ServiceCalculator />
      </div>
    </section>
  )
}
