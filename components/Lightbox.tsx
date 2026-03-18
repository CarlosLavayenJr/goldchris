'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
    images: string[]
    currentIndex: number
    onClose: () => void
    onPrev: () => void
    onNext: () => void
}

const SNAP_THRESHOLD = 0.3 // fraction of screen width required to snap

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
    const touchStartX = useRef<number | null>(null)
    const [dragOffset, setDragOffset] = useState(0)
    const [snapping, setSnapping] = useState(false)

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }
        window.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose, onPrev, onNext])

    // Reset when index changes (after snap completes)
    useEffect(() => {
        setDragOffset(0)
        setSnapping(false)
    }, [currentIndex])

    function handleTouchStart(e: React.TouchEvent) {
        touchStartX.current = e.touches[0].clientX
        setSnapping(false)
    }

    function handleTouchMove(e: React.TouchEvent) {
        if (touchStartX.current === null) return
        const delta = e.touches[0].clientX - touchStartX.current
        const atStart = currentIndex === 0 && delta > 0
        const atEnd = currentIndex === images.length - 1 && delta < 0
        setDragOffset(atStart || atEnd ? delta * 0.15 : delta)
    }

    function handleTouchEnd(e: React.TouchEvent) {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        const screenW = window.innerWidth
        setSnapping(true)

        if (delta < -(screenW * SNAP_THRESHOLD) && currentIndex < images.length - 1) {
            // Snap left → next
            setDragOffset(-screenW)
            setTimeout(() => { onNext() }, 250)
        } else if (delta > screenW * SNAP_THRESHOLD && currentIndex > 0) {
            // Snap right → prev
            setDragOffset(screenW)
            setTimeout(() => { onPrev() }, 250)
        } else {
            // Bounce back
            setDragOffset(0)
        }

        touchStartX.current = null
    }

    const prevSrc = images[currentIndex - 1]
    const currentSrc = images[currentIndex]
    const nextSrc = images[currentIndex + 1]

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            >
                <X size={20} />
            </button>

            {/* Prev button — desktop only */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                aria-label="Previous image"
                className="hidden md:flex absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-black items-center justify-center text-white transition-all duration-200"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Sliding strip: prev | current | next */}
            <div
                className="absolute inset-0 flex"
                style={{
                    transform: `translateX(calc(-100vw + ${dragOffset}px))`,
                    transition: snapping ? 'transform 0.25s ease' : 'none',
                    width: '300%',
                    left: 0,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Prev slot */}
                <div className="relative flex-none w-1/3 h-full flex items-center justify-center px-4 md:px-16 py-16">
                    {prevSrc && (
                        <div className="relative w-full h-full">
                            <Image src={`/assets/${prevSrc}`} alt="" fill sizes="100vw" className="object-contain" />
                        </div>
                    )}
                </div>

                {/* Current slot */}
                <div className="relative flex-none w-1/3 h-full flex items-center justify-center px-4 md:px-16 py-16">
                    <div className="relative w-full h-full">
                        <Image
                            src={`/assets/${currentSrc}`}
                            alt={`Portfolio image ${currentIndex + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Next slot */}
                <div className="relative flex-none w-1/3 h-full flex items-center justify-center px-4 md:px-16 py-16">
                    {nextSrc && (
                        <div className="relative w-full h-full">
                            <Image src={`/assets/${nextSrc}`} alt="" fill sizes="100vw" className="object-contain" />
                        </div>
                    )}
                </div>
            </div>

            {/* Next button — desktop only */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                aria-label="Next image"
                className="hidden md:flex absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-black items-center justify-center text-white transition-all duration-200"
            >
                <ChevronRight size={24} />
            </button>

            {/* Index indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-white/80 text-sm font-semibold tabular-nums">
                    {currentIndex + 1} / {images.length}
                </span>
            </div>
        </div>
    )
}
