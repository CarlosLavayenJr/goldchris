'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Landscape / action shots for desktop
const desktopSlides = [
    'DSC05862.jpg',
    'Fusion0422-7.jpg',
    'DSC05888.jpg',
    'Fusion0430-3.jpg',
    'Fusion0430-5.jpg',
]

// Portrait / vertical shots for mobile
const mobileSlides = [
    'German-Grad-Pics-90.jpg',
    'Nico-Wedding-34.jpg',
    'tobon-grad-pics-29.jpg',
    'azzaro-grad-pics-60.jpg',
    'German-Grad-Pics-132.jpg',
]

function SlideSet({ slides, className }: { slides: string[]; className: string }) {
    const [current, setCurrent] = useState(0)
    const [prev, setPrev] = useState<number | null>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => {
                setPrev(c)
                return (c + 1) % slides.length
            })
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {slides.map((src, i) => {
                const isActive = i === current
                const isPrev = i === prev
                if (!isActive && !isPrev) return null
                return (
                    <div
                        key={src}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{ opacity: isActive ? 1 : 0 }}
                    >
                        <Image
                            src={`/assets/${src}`}
                            alt=""
                            fill
                            className="object-cover object-top"
                            priority={i === 0}
                            style={{
                                animation: isActive ? 'kenburns 8s ease-out forwards' : 'none',
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default function HeroSlider() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Desktop: landscape shots */}
            <SlideSet slides={desktopSlides} className="hidden md:block" />
            {/* Mobile: portrait shots */}
            <SlideSet slides={mobileSlides} className="md:hidden" />

            {/* Dark gradient overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,1) 100%)' }}
            />
            <style>{`
                @keyframes kenburns {
                    from { transform: scale(1.08) translateX(0%); }
                    to   { transform: scale(1.0) translateX(-2%); }
                }
            `}</style>
        </div>
    )
}
