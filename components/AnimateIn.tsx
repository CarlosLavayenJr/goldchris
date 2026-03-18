'use client'

import { useEffect, useRef, useState } from 'react'

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fade'

interface Props {
    children: React.ReactNode
    variant?: Variant
    delay?: number
    className?: string
    threshold?: number
}

const initial: Record<Variant, string> = {
    fadeUp:    'opacity-0 translate-y-8',
    fadeLeft:  'opacity-0 -translate-x-8',
    fadeRight: 'opacity-0 translate-x-8',
    fade:      'opacity-0',
}

export default function AnimateIn({ children, variant = 'fadeUp', delay = 0, className = '', threshold = 0.15 }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
            { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [threshold])

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : initial[variant]} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
