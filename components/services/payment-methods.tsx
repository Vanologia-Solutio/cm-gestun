'use client'

import americanExpress from '@/assets/payment-logos/americanexpress.webp'
import bcacard from '@/assets/payment-logos/bcacard.webp'
import bcapaylater from '@/assets/payment-logos/bcapaylater.webp'
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

export default function PaymentMethods() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className='w-full py-20 bg-secondary/20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Metode Pembayaran
          </h2>
          <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
            Kami menerima berbagai metode pembayaran untuk kemudahan Anda
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'
        >
          {paymentMethods.map(method => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: { duration: 0.25 },
              }}
              className='aspect-square rounded-lg flex flex-col items-center justify-center p-4 sm:p-6 md:p-7 lg:p-8 cursor-pointer hover:bg-card transition-colors duration-250'
            >
              <motion.div className='size-full rounded-lg flex items-center justify-center mb-3'>
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={0}
                  height={0}
                  className='size-full object-contain'
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center'
        >
          <p className='text-foreground'>
            Proses pembayaran kami aman dan terjamin dengan enkripsi tingkat
            bank.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
