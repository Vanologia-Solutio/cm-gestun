'use client'

import { Button } from '@/components/ui/button'
import { LINK_WHATSAPP } from '@/shared/constants/general'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.webp'

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/services' },
    { label: 'Tentang', href: '/about' },
    { label: 'Kontak', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border'
    >
      <div className='max-w-6xl mx-auto px-4 xl:px-0'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='shrink-0 flex items-center gap-2'>
            <Image
              src={logo}
              alt='Logo'
              width={100}
              height={100}
              className='size-10 object-contain'
            />
            <span className='text-2xl font-bold text-primary'>CM Gestun</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className='font-medium text-foreground hover:text-primary transition-colors duration-200'
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href={LINK_WHATSAPP}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-primary text-primary-foreground'>
                Hubungi Kami
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden border-t border-border'
          >
            <div className='px-4 py-4 space-y-2'>
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='block text-foreground hover:text-primary py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={LINK_WHATSAPP}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <Button className='w-full bg-primary text-primary-foreground'>
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
