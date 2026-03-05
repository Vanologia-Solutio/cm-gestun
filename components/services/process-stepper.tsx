'use client'

import { motion } from 'framer-motion'
import { Banknote, CheckCircle2, Clock, CreditCard, FileCheck } from 'lucide-react'

export default function ProcessStepper() {
  const steps = [
    {
      number: 1,
      title: 'Persiapan Dokumen',
      description: 'Siapkan kartu kredit atau identitas diri Anda dengan data yang lengkap dan jelas',
      icon: FileCheck,
    },
    {
      number: 2,
      title: 'Verifikasi Data',
      description: 'Tim kami akan melakukan verifikasi data kartu kredit dan identitas Anda dengan aman',
      icon: CheckCircle2,
    },
    {
      number: 3,
      title: 'Proses Transaksi',
      description: 'Lakukan transaksi gesek tunai dengan sistem pembayaran yang aman dan terjamin',
      icon: CreditCard,
    },
    {
      number: 4,
      title: 'Approval & Konfirmasi',
      description: 'Dapatkan persetujuan dalam hitungan menit dengan konfirmasi yang jelas',
      icon: Clock,
    },
    {
      number: 5,
      title: 'Dana Cair',
      description: 'Dana langsung ditransfer ke rekening Anda tanpa proses tambahan yang rumit',
      icon: Banknote,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Proses Gesek Tunai Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ikuti langkah-langkah sederhana kami untuk mendapatkan dana tunai dengan cepat dan aman
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-between mb-12"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex items-center flex-1">
                {/* Step */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 relative z-10"
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground text-center">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2 max-w-xs">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={itemVariants}
                    className="flex-1 h-1 bg-linear-to-r from-primary to-accent mx-4 relative -top-12"
                  />
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Mobile View - Vertical Stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:hidden flex flex-col"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number}>
                <motion.div
                  variants={itemVariants}
                  className="flex gap-6 mb-8"
                >
                  {/* Left Circle and Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4"
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-16 bg-linear-to-b from-primary to-accent" />
                    )}
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
