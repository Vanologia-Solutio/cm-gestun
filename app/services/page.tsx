'use client'

import PaymentMethods from '@/components/services/payment-methods'
import ProcessStepper from '@/components/services/process-stepper'
import ServiceCards from '@/components/services/service-cards'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function ServicesPage() {
  return (
    <Fragment>
      {/* Services Header */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance'>
              Layanan Kami
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Kami menawarkan solusi gesek tunai yang komprehensif dengan
              layanan terbaik dan proses yang transparan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCards />

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Process Stepper Section */}
      <ProcessStepper />
    </Fragment>
  )
}
