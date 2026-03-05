'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Produk',
      links: [
        {
          label: 'Layanan Tunai',
          href: '/services',
        },
        {
          label: 'Metode Pembayaran',
          href: '/services',
        },
      ],
    },
    {
      title: 'Tentang',
      links: [
        {
          label: 'Tentang Kami',
          href: '/about',
        },
      ],
    },
    {
      title: 'Dukungan',
      links: [
        {
          label: 'Hubungi Kami',
          href: '/contact',
        },
        {
          label: 'Blog',
          href: 'https://gestunplg.blogspot.com/2014/10/jasa-gesek-tunai-dan-pelunasan-dana.html',
        },
      ],
    },
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
        className='max-w-6xl mx-auto p-8 xl:px-0'
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
            <p className='text-muted-foreground'>
              Solusi tunai terpercaya di Palembang dengan layanan profesional
              24/7.
            </p>
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
                  <li key={linkIdx} className='hover:underline'>
                    <Link
                      href={link.href}
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      {link.label}
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
        <motion.p
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-muted-foreground text-sm text-center'
        >
          © {currentYear} CM Gestun. Semua hak dilindungi.
        </motion.p>
      </motion.div>
    </footer>
  )
}
