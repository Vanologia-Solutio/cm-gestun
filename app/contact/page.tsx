'use client'

import heroImage from '@/assets/contact.png'
import { LINK_WHATSAPP } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Alamat',
      value:
        'Jl. MP. Mangkunegara No.432, Bukit Sangkal, Kec. Kalidoni, Kota Palembang, Sumatera Selatan, Indonesia 30961',
      href: 'https://maps.app.goo.gl/Pjeqf3F4eSFT9w3z7',
    },
    {
      icon: Phone,
      label: 'Telepon / WhatsApp',
      value: '0819-5831-3233',
      href: LINK_WHATSAPP,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@cmgestun.com',
      href: 'mailto:info@cmgestun.com',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: 'Senin - Jumat: 08:00 - 17:00 WIB',
      href: '#',
    },
  ]

  return (
    <Fragment>
      {/* Contact Header */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-8 sm:mb-12'
          >
            <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance'>
              Hubungi Kami
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Kami siap membantu Anda dengan segala pertanyaan atau kebutuhan
              gesek tunai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className='relative p-4 sm:px-6 lg:px-8 bg-background overflow-hidden'>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12'>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300 cursor-pointer'
                >
                  <div className='mb-4'>
                    <IconComponent className='size-8 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    {info.label}
                  </h3>
                  <p className='text-sm text-muted-foreground wrap-break-word'>
                    {info.value}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className='relative py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden'>
        {/* Elegant Background Texture */}
        <div className='absolute inset-0 z-0 bg-dot-pattern opacity-40 mask-[radial-gradient(ellipse_100%_100%_at_50%_100%,#000_10%,transparent_80%)]' />

        <div className='relative z-10 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-12'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-2'>
              Lokasi Kami
            </h2>
            <p className='text-foreground/60'>
              Kunjungi lokasi fisik kami di Palembang
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='rounded-lg overflow-hidden border border-border shadow-lg h-96'
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5492920583156!2d104.76485571121731!3d-2.944924339677555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7696d487ce53%3A0x2538b4f055c8135c!2sCentral%20Medica%20Kenten!5e0!3m2!1sen!2sid!4v1772693842555!5m2!1sen!2sid'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary to-accent/75'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Ilustrasi Tim'
            fill
            className='object-cover opacity-20'
          />
          <div className='absolute inset-0 backdrop-blur-xs' />
        </div>

        <div className='relative z-10 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-1.5'>
              Hubungi Kami Melalui{' '}
              <span className='text-green-500'>WhatsApp</span>
            </h2>
            <p className='text-lg text-white'>
              Cara tercepat untuk menghubungi kami dan mendapatkan respons cepat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-card border border-border rounded-lg p-8 md:p-12 text-center'
          >
            <h3 className='text-2xl font-bold text-foreground mb-2.5'>
              WhatsApp Kami
            </h3>
            <p className='text-foreground/70 mb-8 max-w-md mx-auto'>
              Tim kami siap membantu Anda 24/7. Hubungi kami melalui WhatsApp
              untuk konsultasi gratis dan pertanyaan tentang layanan gesek tunai
              kami.
            </p>

            <motion.a
              href={`${LINK_WHATSAPP}?text=Halo%20saya%20ingin%20menanyakan%20tentang%20layanan%20gesek%20tunai%20Anda`}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300'
            >
              Hubungi via WhatsApp
            </motion.a>
            <p className='text-sm text-foreground/50 mt-6'>
              Respons rata-rata dalam 5 menit
            </p>
          </motion.div>
        </div>
      </section>
    </Fragment>
  )
}
