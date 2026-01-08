'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { category: 'Mobile', items: ['React Native', 'Swift', 'SwiftUI'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Motion'] },
]

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section relative px-6"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Image & Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
                            {/* Placeholder gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20" />

                            {/* Profile image placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-32 w-32 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Emre Kardaş"
                                        fill
                                        className="rounded-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[var(--color-accent)]" />
                            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[var(--color-accent)]" />
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="glass-subtle flex items-center gap-3 rounded-xl p-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/20">
                                    <MapPin size={18} className="text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <span className="block text-xs text-[var(--color-text-muted)]">Location</span>
                                    <span className="text-sm font-medium text-[var(--color-text-primary)]">Turkey</span>
                                </div>
                            </div>
                            <a
                                href="mailto:hello@emrekardas.com"
                                className="glass-subtle flex items-center gap-3 rounded-xl p-4 transition-all hover:border-[var(--color-accent)]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/20">
                                    <Mail size={18} className="text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <span className="block text-xs text-[var(--color-text-muted)]">Email</span>
                                    <span className="text-sm font-medium text-[var(--color-text-primary)]">hello@emrekardas.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Bio & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <span className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                            About Me
                        </span>
                        <h2 className="mb-6 font-[var(--font-display)]">
                            Developer & Designer
                        </h2>

                        <div className="mb-8 space-y-4 text-[var(--color-text-secondary)]">
                            <p>
                                I&apos;m a passionate developer and designer focused on creating memorable digital experiences.
                                With a background in both frontend development and UI/UX design, I bridge the gap between
                                beautiful interfaces and robust functionality.
                            </p>
                            <p>
                                My journey started with simple HTML pages and evolved into building complex web applications
                                and mobile apps. I believe in clean code, thoughtful animations, and user-centered design.
                            </p>
                            <p>
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, writing about web development,
                                or working on side projects that push creative boundaries.
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="mb-8">
                            <h4 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
                                Skills & Technologies
                            </h4>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {skills.map((skillGroup) => (
                                    <div key={skillGroup.category} className="rounded-xl border border-[var(--color-border)] p-4">
                                        <span className="mb-2 block text-xs font-medium text-[var(--color-accent)]">
                                            {skillGroup.category}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="mailto:hello@emrekardas.com"
                            className="group inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-accent-light)]"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Let&apos;s Work Together
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
