'use client'

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react'
import Lenis from 'lenis'

interface SmoothScrollContextType {
    lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProps {
    children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        lenisRef.current = lenis

        // Expose lenis to window for debugging
        if (typeof window !== 'undefined') {
            (window as unknown as { lenis: Lenis }).lenis = lenis
        }

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
            {children}
        </SmoothScrollContext.Provider>
    )
}
