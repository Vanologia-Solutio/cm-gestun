'use client'

import { motion } from 'framer-motion'
import { CreditCard, Shield, TrendingDown, Zap } from 'lucide-react'

export default function ServiceCards() {
  const services = [
    {
      icon: CreditCard,
      title: 'Gesek Tunai (Tarik Tunai)',
      description: 'Menarik sejumlah uang dengan menggunakan kartu kredit Anda di merchant resmi. Uang tunai langsung Anda peroleh tanpa barang, dengan maksimal sesuai limit kartu kredit Anda.',
      rate: 'Rate mulai dari 3.2%',
      features: ['Proses 10-15 menit', 'Dana Langsung Cair', 'Tanpa Biaya Tambahan'],
    },
    {
      icon: TrendingDown,
      title: 'Pelunasan Kartu Kredit',
      description: 'Solusi terbaik untuk menghindari bunga berbunga. Kami membantu melunasi hutang kartu kredit Anda, kemudian gesek ulang dengan jumlah yang disepakati untuk menunda jatuh tempo.',
      rate: 'Rate mulai dari 3.2%',
      features: ['Hindari Bunga Berbunga', 'Track Record Bagus', 'Peluang Naik Limit'],
    },
    {
      icon: Zap,
      title: 'Proses Kilat',
      description: 'Pencairan dana dalam waktu singkat dengan sistem yang efisien. Transaksi Anda diproses dengan cepat sehingga Anda mendapatkan uang tunai dengan segera.',
      features: ['10-15 Menit Cair', 'Proses Mudah', 'Keamanan Terjamin'],
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Keamanan data dan kepemilikan kartu Anda terjamin sepenuhnya. KTP asli langsung dikembalikan dengan kepercayaan penuh kepada pemilik kartu.',
      features: ['Data Aman', 'Tidak Bisa Diwakilkan', 'Privasi Terjamin'],
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="services"
      className="w-full py-20 bg-background px-4 sm:px-6 lg:px-8"
    >
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
            Layanan Gesek Tunai Kami
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Kami melayani gesek tunai secara offline dan online untuk berbagai kartu kredit dan layanan finansial digital dengan rate yang kompetitif dan proses yang cepat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="size-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-4 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {service.title}
                    </h3>
                    {service.rate && (
                      <p className="text-sm font-semibold text-primary">
                        {service.rate}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.features && (
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-foreground/60"
                      >
                        <div className="size-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
