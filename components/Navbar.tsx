'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50'
                        : 'bg-transparent backdrop-blur-sm'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl tracking-tighter select-none">
                        <span className="text-[#FFD700] font-black">GOLD</span>
                        <span className="font-black text-white">CHRIS</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                                    pathname === href
                                        ? 'text-[#FFD700]'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-sm font-bold bg-[#FFD700] text-black px-5 py-2 rounded-full hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white hover:text-[#FFD700] transition-colors p-1"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile full-screen overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
                    open
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-0 px-8">
                    <div className="mb-10">
                        <span className="text-[#FFD700] font-black text-3xl tracking-tighter">GOLD</span>
                        <span className="font-black text-white text-3xl tracking-tighter">CHRIS</span>
                    </div>
                    {links.map(({ href, label }, i) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className={`w-full text-center py-5 text-3xl font-black tracking-tight border-b border-white/10 transition-colors duration-200 ${
                                pathname === href ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                            }`}
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-10 w-full text-center py-4 text-xl font-black bg-[#FFD700] text-black rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </>
    )
}
