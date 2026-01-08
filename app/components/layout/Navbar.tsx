'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { href: '#works', label: 'Works' },
    { href: '#blog', label: 'Blog' },
    { href: '#about', label: 'About' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'glass' : ''
                    }`}
            >
                <div className="mx-auto flex max-w-[var(--tablet-max-width)] items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className="group flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                            Emre
                        </span>
                        <span className="font-[var(--font-display)] text-xl font-light tracking-tight text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                            Kardaş
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-300 hover:w-full" />
                            </a>
                        ))}

                        {/* Contact Button */}
                        <motion.a
                            href="#about"
                            onClick={(e) => handleNavClick(e, '#about')}
                            className="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-tertiary)] md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute bottom-0 right-0 top-0 flex w-72 flex-col gap-2 bg-[var(--color-bg-secondary)] p-8 pt-24 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-lg px-4 py-3 text-lg font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#about"
                                onClick={(e) => handleNavClick(e, '#about')}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4 rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-lg font-medium text-white"
                            >
                                Contact
                            </motion.a>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
