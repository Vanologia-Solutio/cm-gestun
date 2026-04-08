'use client'

import valueImage from '@/assets/trust.webp'
import { START_YEAR } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import { CheckCircle, CheckCircle2, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function AboutPage() {
  const yearsOfExperience = new Date().getFullYear() - START_YEAR

  const highlights = [
    { text: `Berpengalaman selama ${yearsOfExperience}+ tahun di industri` },
    { text: 'Ribuan pelanggan puas' },
    { text: 'Proses transparan dan terpercaya' },
    { text: 'Tim yang siap membantu 24/7' },
  ]

  const values = [
    {
      title: 'Kepercayaan',
      description:
        'Kami berkomitmen untuk membangun kepercayaan dengan transparansi penuh dalam setiap transaksi',
    },
    {
      title: 'Profesionalisme',
      description:
        'Tim kami terdiri dari profesional berpengalaman yang siap memberikan layanan terbaik',
    },
    {
      title: 'Keamanan',
      description:
        'Sistem keamanan berlapis melindungi data dan aset Anda dengan standar internasional',
    },
    {
      title: 'Kecepatan',
      description:
        'Proses gesek tunai yang efisien memastikan Anda mendapatkan dana dengan cepat',
    },
  ]

  return (
    <Fragment>
      {/* About Header */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance'>
              Tentang Kami
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Pelajari lebih lanjut tentang komitmen kami terhadap layanan gesek
              tunai berkualitas tinggi di Palembang
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section
        id='highlights'
        className='relative w-full py-20 bg-background px-4 sm:px-6 lg:px-8 overflow-hidden'
      >
        {/* Elegant Background Texture */}
        <div className='absolute inset-0 z-0 bg-grid-pattern opacity-50 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]' />

        <div className='relative z-10 max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl sm:text-5xl font-bold text-primary mb-6'>
                CM Gestun
              </h2>
              <p className='text-base sm:text-lg text-foreground/70 mb-6 leading-relaxed'>
                Kami adalah solusi tunai terpercaya di Palembang yang
                berkomitmen memberikan layanan terbaik dengan proses yang cepat,
                mudah, dan transparan. Dengan pengalaman bertahun-tahun, kami
                memahami kebutuhan finansial Anda.
              </p>
              <p className='text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed'>
                Kepercayaan pelanggan adalah prioritas utama kami. Setiap
                transaksi ditangani dengan profesional dan menjaga kerahasiaan
                data Anda.
              </p>

              {/* Highlights */}
              <div className='space-y-4'>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='flex items-center gap-3'
                  >
                    <CheckCircle className='size-5 sm:size-6 text-primary shrink-0' />
                    <span className='text-sm sm:text-base text-foreground'>
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='flex flex-col gap-6'
            >
              {/* Stats */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 text-center'>
                  <p className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                    {yearsOfExperience}+
                  </p>
                  <p className='text-sm sm:text-base text-foreground/70'>
                    Tahun Pengalaman
                  </p>
                </div>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 text-center'>
                  <p className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                    0+
                  </p>
                  <p className='text-sm sm:text-base text-foreground/70'>
                    Pelanggan Puas
                  </p>
                </div>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 text-center'>
                  <p className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                    0%
                  </p>
                  <p className='text-sm sm:text-base text-foreground/70'>
                    Tingkat Kepuasan
                  </p>
                </div>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 text-center'>
                  <p className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                    24/7
                  </p>
                  <p className='text-sm sm:text-base text-foreground/70'>
                    Layanan Siap
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className='bg-linear-to-br from-primary to-accent border border-primary/25 rounded-lg p-6 sm:p-8 text-center'>
                <div className='text-3xl sm:text-4xl mb-3'>
                  <ShieldCheck className='size-10 text-primary-foreground mx-auto' />
                </div>
                <h4 className='text-base sm:text-lg font-semibold text-primary-foreground mb-2'>
                  Terpercaya & Aman
                </h4>
                <p className='text-sm sm:text-base text-primary-foreground/70'>
                  Setiap transaksi dijamin aman dengan sistem keamanan berlapis
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary to-amber-800'>
        <div className='absolute inset-0 z-10 bg-dot-pattern opacity-20 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_25%,transparent_80%)]' />

        <div className='absolute inset-0 z-0'>
          <Image
            src={valueImage}
            alt='Ilustrasi Tim'
            fill
            className='object-cover opacity-25'
          />
          <div className='absolute inset-0 backdrop-blur-xs' />
        </div>

        <div className='relative z-10 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-primary-foreground mb-1.5'>
              Nilai-Nilai Kami
            </h2>
            <p className='text-base sm:text-lg text-primary-foreground max-w-2xl mx-auto'>
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='flex gap-4 p-4 sm:p-6 rounded-lg bg-card duration-300'
              >
                <div className='shrink-0'>
                  <CheckCircle2 className='size-5 sm:size-6 text-primary' />
                </div>
                <div>
                  <h3 className='text-lg sm:text-xl font-semibold text-foreground mb-2'>
                    {value.title}
                  </h3>
                  <p className='text-base sm:text-lg text-muted-foreground'>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 z-0 bg-grid-pattern opacity-50 mask-[radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]' />

        <div className='relative z-10 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Tim Profesional Kami
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto mb-6'>
              Dengan pengalaman lebih dari {yearsOfExperience} tahun di bidang
              layanan finansial, kami berkomitmen membantu Anda mendapatkan
              solusi yang tepat, cepat, dan terpercaya. Setiap proses ditangani
              secara langsung dengan perhatian penuh untuk memastikan kenyamanan
              dan keamanan Anda.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
              {[
                { name: 'Layanan Personal', count: '100%' },
                { name: 'Tahun Pengalaman', count: `${yearsOfExperience}+` },
                { name: 'Klien Terlayani', count: '0+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='p-6 rounded-lg bg-background border border-border'
                >
                  <p className='text-2xl sm:text-3xl font-bold text-primary mb-2'>
                    {stat.count}
                  </p>
                  <p className='text-sm sm:text-base text-foreground font-medium'>
                    {stat.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  )
}
