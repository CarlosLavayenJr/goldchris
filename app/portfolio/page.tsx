'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'

const photos: { src: string; tag: 'MMA' | 'Other' }[] = [
    { src: 'DSC05820.jpg', tag: 'MMA' },
    { src: 'DSC05862.jpg', tag: 'MMA' },
    { src: 'DSC05888.jpg', tag: 'MMA' },
    { src: 'DSC05892.jpg', tag: 'MMA' },
    { src: 'DSC05893.jpg', tag: 'MMA' },
    { src: 'Fusion0422-7.jpg', tag: 'MMA' },
    { src: 'Fusion0430-3.jpg', tag: 'MMA' },
    { src: 'Fusion0430-5.jpg', tag: 'MMA' },
    { src: 'fusion0511-3.jpg', tag: 'MMA' },
    { src: 'fusion0511-23.jpg', tag: 'MMA' },
    { src: 'fusion-0312-3.jpg', tag: 'MMA' },
    { src: 'fusion-0312-13.jpg', tag: 'MMA' },
    { src: 'Fusion0311-4.jpg', tag: 'MMA' },
    { src: 'Fusion0302.jpg', tag: 'MMA' },
    { src: 'Phil-0411.jpg', tag: 'Other' },
    { src: 'Phil-0413.jpg', tag: 'Other' },
    { src: 'Phil0429-6.jpg', tag: 'Other' },
    { src: 'phil-0526-14.jpg', tag: 'Other' },
    { src: 'phil-1218-13.jpg', tag: 'Other' },
    { src: 'azzaro-grad-pics-60.jpg', tag: 'Other' },
    { src: 'azzaro-grad-pics-95-1.jpg', tag: 'Other' },
    { src: 'German-Grad-Pics-48.jpg', tag: 'Other' },
    { src: 'German-Grad-Pics-90.jpg', tag: 'Other' },
    { src: 'German-Grad-Pics-132.jpg', tag: 'Other' },
    { src: 'tobon-grad-pics-29.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-20.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-29.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-31.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-34.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-37.jpg', tag: 'Other' },
    { src: 'Nico-Wedding-38.jpg', tag: 'Other' },
    { src: 'Mexico-Trip_-3.jpg', tag: 'Other' },
    { src: 'Mexico-Trip_-8.jpg', tag: 'Other' },
    { src: 'Mexico-Trip_-13.jpg', tag: 'Other' },
    { src: 'Mexico-Trip_-31.jpg', tag: 'Other' },
    { src: 'Mexico-Trip_-45.jpg', tag: 'Other' },
]

type Filter = 'All' | 'MMA' | 'Other'
const filters: Filter[] = ['All', 'MMA', 'Other']

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState<Filter>('All')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    const filteredPhotos = activeFilter === 'All'
        ? photos
        : photos.filter((p) => p.tag === activeFilter)

    const filteredSrcs = filteredPhotos.map((p) => p.src)

    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
    }, [])

    const prevImage = useCallback(() => {
        setLightboxIndex((prev) => (prev === 0 ? filteredSrcs.length - 1 : prev - 1))
    }, [filteredSrcs.length])

    const nextImage = useCallback(() => {
        setLightboxIndex((prev) => (prev === filteredSrcs.length - 1 ? 0 : prev + 1))
    }, [filteredSrcs.length])

    return (
        <div>
            {/* ─── HERO ───────────────────────────────────────────────── */}
            <section className="bg-[#0a0a0a] pt-16 pb-16 px-6 border-b border-white/8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 pt-8">
                        <div className="w-8 h-px bg-[#FFD700]" />
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">My Work</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tighter">
                            PORTFOLIO<span className="text-[#FFD700]">.</span>
                        </h1>
                        <p className="text-white/40 text-sm max-w-xs leading-relaxed md:pb-2">
                            A collection of work spanning MMA, portraits, weddings, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── FILTER TABS ────────────────────────────────────────── */}
            <section className="bg-[#111111] border-b border-white/8 px-6 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto flex items-center gap-1 py-3">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide transition-all duration-200 ${
                                activeFilter === f
                                    ? 'bg-[#FFD700] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {f}
                            <span className={`ml-2 text-xs ${activeFilter === f ? 'text-black/60' : 'text-white/25'}`}>
                                {f === 'All' ? photos.length : photos.filter((p) => p.tag === f).length}
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            {/* ─── PHOTO GRID (CSS columns masonry) ──────────────────── */}
            <section className="bg-[#0a0a0a] py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="columns-1 sm:columns-2 lg:columns-3 gap-3"
                    >
                        {filteredPhotos.map((photo, index) => (
                            <div
                                key={photo.src}
                                className="break-inside-avoid mb-3 relative rounded-xl overflow-hidden group cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={`/assets/${photo.src}`}
                                    alt={`Portfolio — ${photo.tag}`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-[#FFD700]/90 flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Tag badge */}
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-black/70 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                                        {photo.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LIGHTBOX ───────────────────────────────────────────── */}
            {lightboxOpen && (
                <Lightbox
                    images={filteredSrcs}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </div>
    )
}
