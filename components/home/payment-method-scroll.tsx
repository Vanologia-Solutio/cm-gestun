'use client'

import americanExpress from '@/assets/payment-logos/americanexpress.webp'
import bcapaylater from '@/assets/payment-logos/bcapaylater.webp'
import bcacard from '@/assets/payment-logos/bcacard.webp'
import bliblipaylater from '@/assets/payment-logos/blibli.webp'
import gopaylater from '@/assets/payment-logos/gopaylater.webp'
import indodana from '@/assets/payment-logos/indodana.webp'
import jcb from '@/assets/payment-logos/jcb.webp'
import jeniuspaylater from '@/assets/payment-logos/jenius.webp'
import kredivo from '@/assets/payment-logos/kredivo.webp'
import livin from '@/assets/payment-logos/livin.webp'
import mastercard from '@/assets/payment-logos/mastercard.webp'
import spaylater from '@/assets/payment-logos/spaylater.webp'
import tiktokpaylater from '@/assets/payment-logos/tiktok.webp'
import visa from '@/assets/payment-logos/visa.webp'
import yup from '@/assets/payment-logos/yup.webp'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PaymentMethodsScroll() {
  const paymentMethods = [
    { id: 'visa', name: 'VISA', icon: visa },
    { id: 'mastercard', name: 'Mastercard', icon: mastercard },
    { id: 'jcb', name: 'JCB', icon: jcb },
    { id: 'american-express', name: 'American Express', icon: americanExpress },
    { id: 'bca-card', name: 'BCA Card', icon: bcacard },
    { id: 'kredivo', name: 'Kredivo', icon: kredivo },
    { id: 'indodana', name: 'Indodana', icon: indodana },
    { id: 'yup', name: 'Yup', icon: yup },
    { id: 'gopaylater', name: 'Gopaylater', icon: gopaylater },
    { id: 'tiktok-paylater', name: 'TikTok Paylater', icon: tiktokpaylater },
    { id: 'blibli-paylater', name: 'Blibli Paylater', icon: bliblipaylater },
    { id: 'bca-paylater', name: 'BCA Paylater', icon: bcapaylater },
    { id: 'livin-paylater', name: 'Livin Paylater', icon: livin },
    { id: 'spaylater', name: 'SPaylater', icon: spaylater },
    { id: 'jenius-paylater', name: 'Jenius Paylater', icon: jeniuspaylater },
  ]

  const multiplier = [...paymentMethods, ...paymentMethods, ...paymentMethods]

  return (
    <section className='py-16 bg-white'>
      <div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 px-4 sm:px-6 lg:px-8'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-2'>
            Metode Pembayaran yang Kami Terima
          </h2>
          <p className='text-foreground/60 max-w-2xl mx-auto'>
            Berbagai pilihan metode pembayaran untuk kemudahan Anda
          </p>
        </motion.div>

        {/* Infinite Scroll - Row 1 */}
        <div className='relative w-full overflow-hidden mb-4'>
          {/* Left Gradient Overlay */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none' />

          {/* Right Gradient Overlay */}
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none' />

          <motion.div
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className='flex gap-8 sm:gap-12 w-max py-6'
          >
            {multiplier.map((method, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='shrink-0 flex items-center justify-center cursor-pointer'
              >
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={0}
                  height={0}
                  className='object-contain size-16 sm:size-24'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
