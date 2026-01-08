'use client'

import { ReactNode } from 'react'

interface TabletFrameProps {
    children: ReactNode
    className?: string
}

export default function TabletFrame({ children, className = '' }: TabletFrameProps) {
    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
            <div className={`tablet-frame noise-overlay relative ${className}`}>
                {/* Subtle gradient overlay at top */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[400px] opacity-60"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-accent-glow), transparent)'
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>

                {/* Bottom fade */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px]"
                    style={{
                        background: 'linear-gradient(to top, var(--color-bg-secondary), transparent)'
                    }}
                />
            </div>
        </div>
    )
}
