'use client'

import { LINK_WHATSAPP } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Produk', links: ['Layanan Tunai', 'Metode Pembayaran', 'FAQ'] },
    {
      title: 'Perusahaan',
      links: ['Tentang Kami', 'Kebijakan Privasi', 'Syarat & Kondisi'],
    },
    { title: 'Dukungan', links: ['Hubungi Kami', 'Bantuan', 'Blog'] },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className='w-full bg-foreground/5 border-t border-border'>
      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto p-4 sm:p-6 lg:p-8'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Link
              href='/'
              className='text-2xl font-bold text-primary mb-4 block'
            >
              CM Gestun
            </Link>
            <p className='text-foreground/60 mb-6'>
              Solusi tunai terpercaya di Palembang dengan layanan profesional
              24/7.
            </p>
            <div className='flex gap-4'>
              {[
                {
                  icon: '📱',
                  href: LINK_WHATSAPP,
                  label: 'WhatsApp',
                },
                { icon: 'f', href: '#', label: 'Facebook' },
                { icon: 'i', href: '#', label: 'Instagram' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
            >
              <h4 className='font-semibold text-foreground mb-4'>
                {section.title}
              </h4>
              <ul className='space-y-2 text-sm'>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className='text-foreground/60 hover:text-primary transition-colors'
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='h-px bg-border mb-8 origin-left'
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-col md:flex-row items-center justify-between gap-4'
        >
          <motion.p
            variants={itemVariants}
            className='text-foreground/60 text-sm'
          >
            © {currentYear} CM Gestun. Semua hak dilindungi.
          </motion.p>
          <motion.div variants={itemVariants} className='flex gap-6'>
            <motion.a
              href='#'
              whileHover={{ color: 'var(--primary)' }}
              className='text-foreground/60 hover:text-primary text-sm transition-colors'
            >
              Kebijakan Privasi
            </motion.a>
            <motion.a
              href='#'
              whileHover={{ color: 'var(--primary)' }}
              className='text-foreground/60 hover:text-primary text-sm transition-colors'
            >
              Syarat Layanan
            </motion.a>
            <motion.a
              href='/contact'
              whileHover={{ color: 'var(--primary)' }}
              className='text-foreground/60 hover:text-primary text-sm transition-colors'
            >
              Kontak
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
