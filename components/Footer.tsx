import Link from 'next/link'
import { Instagram, Youtube, Linkedin } from 'lucide-react'

const TikTokIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.13a4.85 4.85 0 01-1-.44z" />
    </svg>
)

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
]

const socials = [
    { href: 'https://instagram.com/thegoldchris', label: 'Instagram', Icon: Instagram },
    { href: 'https://tiktok.com/@thegoldchris', label: 'TikTok', Icon: TikTokIcon },
    { href: 'https://youtube.com/@thegoldchris', label: 'YouTube', Icon: Youtube },
    { href: 'https://linkedin.com/in/thegoldchris', label: 'LinkedIn', Icon: Linkedin },
]

export default function Footer() {
    return (
        <footer className="border-t border-white/8 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-3">
                            <span className="text-[#FFD700] font-black text-2xl tracking-tighter">GOLD</span>
                            <span className="font-black text-white text-2xl tracking-tighter">CHRIS</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Social media creator & videographer based in Central Florida. Specializing in MMA and food content.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="md:text-center">
                        <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Contact</p>
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+14072851524"
                                className="text-white/60 text-sm hover:text-[#FFD700] transition-colors duration-200"
                            >
                                +1 (407) 285-1524
                            </a>
                            <a
                                href="mailto:thegoldchris@gmail.com"
                                className="text-white/60 text-sm hover:text-[#FFD700] transition-colors duration-200"
                            >
                                thegoldchris@gmail.com
                            </a>
                        </div>
                        <div className="mt-6 flex flex-col gap-1 md:items-center">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="md:text-right">
                        <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Follow Along</p>
                        <div className="flex md:justify-end gap-3">
                            {socials.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FFD700] hover:border-[#FFD700]/40 transition-all duration-200"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/20 text-xs">
                        © {new Date().getFullYear()} Gold Chris. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">
                        Christopher Cristancho · Central Florida
                    </p>
                </div>
            </div>
        </footer>
    )
}
