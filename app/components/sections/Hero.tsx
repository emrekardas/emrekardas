'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (titleRef.current) {
            const chars = titleRef.current.querySelectorAll('.char')
            gsap.fromTo(
                chars,
                {
                    opacity: 0,
                    y: 100,
                    rotateX: -90,
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.03,
                    ease: 'power4.out',
                    delay: 0.5,
                }
            )
        }
    }, [])

    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span
                key={index}
                className="char inline-block"
                style={{ transformOrigin: 'bottom center' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    }

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Floating orbs */}
                <motion.div
                    className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-[100px]"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-[20%] right-[15%] h-96 w-96 rounded-full bg-purple-500 opacity-10 blur-[120px]"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-4 py-2"
                >
                    <Sparkles size={14} className="text-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                        Available for freelance work
                    </span>
                </motion.div>

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    className="mb-6 font-[var(--font-display)] text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
                    style={{ perspective: '1000px' }}
                >
                    <span className="block text-[var(--color-text-primary)]">
                        {splitText("Hi, I'm")}
                    </span>
                    <span className="gradient-text block">
                        {splitText("Emre Kardaş")}
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mb-10 max-w-2xl text-lg text-[var(--color-text-secondary)] md:text-xl"
                >
                    I craft <span className="text-[var(--color-text-primary)]">digital experiences</span> that blend
                    beautiful design with smooth interactions. Specializing in{' '}
                    <span className="text-[var(--color-accent)]">web development</span> &{' '}
                    <span className="text-[var(--color-accent)]">mobile applications</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <motion.a
                        href="#works"
                        className="glow-accent flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 font-medium text-white transition-all hover:bg-[var(--color-accent-light)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                    </motion.a>
                    <motion.a
                        href="#about"
                        className="flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-4 font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-tertiary)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        About Me
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} className="text-[var(--color-text-muted)]" />
                </motion.div>
            </motion.div>
        </section>
    )
}
