'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const socialLinks = [
    { href: 'https://github.com/emrekardas', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/emrekardas', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/emrekardas', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:hello@emrekardas.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-[var(--color-border)] py-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Left - Brand */}
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <motion.a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="flex items-center gap-2 transition-opacity hover:opacity-80"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)]">
                                Emre Kardaş
                            </span>
                        </motion.a>
                        <p className="text-center text-sm text-[var(--color-text-muted)] md:text-left">
                            Developer & Designer
                        </p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={link.label}
                            >
                                <link.icon size={18} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right - Links */}
                    <div className="flex flex-col items-center gap-2 text-sm md:items-end">
                        <motion.a
                            href="#works"
                            className="group flex items-center gap-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                            whileHover={{ x: 2 }}
                        >
                            View Works
                            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </motion.a>
                        <motion.a
                            href="#blog"
                            className="group flex items-center gap-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                            whileHover={{ x: 2 }}
                        >
                            Read Blog
                            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 md:flex-row">
                    <p className="text-center text-xs text-[var(--color-text-muted)]">
                        © {currentYear} Emre Kardaş. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                        Built with{' '}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                            className="inline-block text-red-500"
                        >
                            ❤️
                        </motion.span>{' '}
                        using Next.js & Lenis
                    </p>
                </div>
            </div>
        </footer>
    )
}
