'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/app/data/projects'
import Image from 'next/image'

type FilterType = 'all' | 'web' | 'mobile'

const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
]

export default function Works() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'all' || project.category === activeFilter
    )

    return (
        <section
            id="works"
            ref={sectionRef}
            className="section relative px-6"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col items-center text-center md:items-start md:text-left"
                >
                    <span className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                        Portfolio
                    </span>
                    <h2 className="mb-4 font-[var(--font-display)]">Selected Works</h2>
                    <p className="max-w-xl text-[var(--color-text-secondary)]">
                        A collection of projects that showcase my skills in web development and mobile applications.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 flex flex-wrap justify-center gap-3 md:justify-start"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeFilter === filter.value
                                    ? 'bg-[var(--color-accent)] text-white'
                                    : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface ProjectCardProps {
    project: Project
    index: number
    isInView: boolean
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] transition-all hover:border-[var(--color-border-hover)] ${project.featured ? 'md:col-span-2' : ''
                }`}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden ${project.featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
                {/* Placeholder gradient for missing images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-tertiary)]" />

                {/* Actual image if available */}
                {project.thumbnail && (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none'
                        }}
                    />
                )}

                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent"
                />

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                >
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white transition-transform hover:scale-110"
                            aria-label="View live site"
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-110"
                            aria-label="View on GitHub"
                        >
                            <Github size={16} />
                        </a>
                    )}
                </motion.div>

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-[var(--font-display)] text-xl font-semibold">
                        {project.title}
                    </h3>
                    <ArrowUpRight
                        size={20}
                        className="flex-shrink-0 text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]"
                    />
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-1 text-xs text-[var(--color-text-muted)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    )
}
