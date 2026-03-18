import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react'

const TikTokIcon = ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.13a4.85 4.85 0 01-1-.44z" />
    </svg>
)

const socials = [
    { href: 'https://instagram.com/thegoldchris', label: 'Instagram', icon: <Instagram size={22} /> },
    { href: 'https://tiktok.com/@thegoldchris', label: 'TikTok', icon: <TikTokIcon /> },
    { href: 'https://youtube.com/@thegoldchris', label: 'YouTube', icon: <Youtube size={22} /> },
    { href: 'https://linkedin.com/in/thegoldchris', label: 'LinkedIn', icon: <Linkedin size={22} /> },
]

const stats = [
    { value: '2019', label: 'Started at FSU' },
    { value: '2023', label: 'Went Full-Time' },
    { value: 'MMA+', label: 'Primary Niche' },
    { value: 'FL', label: 'Central Florida Based' },
]

export default function AboutPage() {
    return (
        <div>
            {/* ─── HERO BANNER ────────────────────────────────────────── */}
            <section className="relative h-72 md:h-96 flex items-end justify-start overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Chris-headshot.jpg"
                        alt="Gold Chris"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 70%, rgba(10,10,10,1) 100%)' }}
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-px bg-[#FFD700]" />
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">About</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                        ABOUT CHRIS
                    </h1>
                </div>
            </section>

            {/* ─── STATS ROW ──────────────────────────────────────────── */}
            <section className="bg-[#111111] border-b border-white/8">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
                        {stats.map((s) => (
                            <div key={s.label} className="px-6 first:pl-0 text-center md:text-left">
                                <p className="text-[#FFD700] font-black text-3xl tracking-tight">{s.value}</p>
                                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MAIN CONTENT ───────────────────────────────────────── */}
            <section className="py-20 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Large photo */}
                    <div className="relative">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/Chris-headshot.jpg"
                                alt="Christopher Cristancho — Gold Chris"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700]" />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FFD700]/15 rounded-2xl -z-10" />

                        {/* Social links below photo */}
                        <div className="mt-8">
                            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-4">Follow Along</p>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FFD700] hover:border-[#FFD700]/40 transition-all duration-200"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bio text */}
                    <div className="pt-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-[#FFD700]" />
                            <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">The Creator</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                            CHRISTOPHER<br />
                            <span className="text-[#FFD700]">CRISTANCHO</span>
                        </h2>

                        <div className="space-y-5 text-white/60 text-base leading-relaxed">
                            <p>
                                Christopher Cristancho, known across social media as <span className="text-white font-semibold">Gold Chris</span>, is a content creator and videographer with a lifelong passion for storytelling. From a young age, Chris was documenting his life on YouTube — laying the foundation for a career built on authentic, compelling visual content.
                            </p>
                            <p>
                                In 2019, Chris enrolled at <span className="text-white font-semibold">Florida State University</span> to pursue his Bachelor of Science in Marketing, where he continued to sharpen his eye behind the camera. He graduated in <span className="text-white font-semibold">2023</span> and, after a stint in corporate sales, made the decisive leap to become a <span className="text-white font-semibold">full-time videographer and social media manager</span>.
                            </p>
                            <p>
                                Today, Chris is deeply embedded in the <span className="text-white font-semibold">MMA and food industries</span>, crafting short-form video content, professional photography, and social media strategy for athletes, promotions, restaurants, and brands. His work captures the raw energy of combat sports and the vibrant culture of food with equal precision.
                            </p>
                            <p>
                                Based in <span className="text-white font-semibold">Central Florida</span>, Chris works with local clients and productions while remaining available to travel anywhere for a story worth telling.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                Work With Me <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200"
                            >
                                My Portfolio <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
