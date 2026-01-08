'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/app/data/blog-posts'
import Link from 'next/link'

export default function BlogPreview() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)

    return (
        <section
            id="blog"
            ref={sectionRef}
            className="section relative px-6"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
                >
                    <div>
                        <span className="mb-2 block text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                            Blog
                        </span>
                        <h2 className="font-[var(--font-display)]">Latest Thoughts</h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                        View All Posts
                        <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface BlogCardProps {
    post: {
        id: string
        slug: string
        title: string
        excerpt: string
        publishedAt: string
        readTime: number
        tags: string[]
    }
    index: number
    isInView: boolean
}

function BlogCard({ post, index, isInView }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6 transition-all hover:border-[var(--color-border-hover)]"
        >
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-[var(--color-accent)]/10 px-2 py-1 text-xs font-medium text-[var(--color-accent)]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="mb-3 font-[var(--font-display)] text-lg font-semibold leading-snug transition-colors group-hover:text-[var(--color-accent)]">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                </Link>
            </h3>

            {/* Excerpt */}
            <p className="mb-6 flex-grow text-sm text-[var(--color-text-secondary)]">
                {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} min read
                </span>
            </div>

            {/* Hover Arrow */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6"
            >
                <ArrowRight
                    size={20}
                    className="text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
                />
            </motion.div>
        </motion.article>
    )
}
