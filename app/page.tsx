import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube, Linkedin, Monitor, Video, Camera, ArrowRight } from 'lucide-react'
import HeroSlider from '@/components/HeroSlider'
import AnimateIn from '@/components/AnimateIn'

const TikTokIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.13a4.85 4.85 0 01-1-.44z" />
    </svg>
)

const featuredWork = [
    { src: 'DSC05820.jpg', label: 'MMA' },
    { src: 'Fusion0422-7.jpg', label: 'MMA' },
    { src: 'Nico-Wedding-31.jpg', label: 'Weddings' },
    { src: 'German-Grad-Pics-90.jpg', label: 'Portraits' },
]

const services = [
    {
        icon: <Monitor size={24} />,
        title: 'Social Media Management',
        desc: 'Content strategy, copywriting, community management, and profile optimization to grow your brand online.',
    },
    {
        icon: <Video size={24} />,
        title: 'Videography',
        desc: 'From concept to final cut — short-form video production, editing, and event coverage that captivates.',
    },
    {
        icon: <Camera size={24} />,
        title: 'Photography',
        desc: 'Expertly shot photos that showcase your moments and brand, with professional post-editing.',
    },
]

export default function HomePage() {
    return (
        <div>
            {/* ─── HERO ─────────────────────────────────────────────────── */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                <HeroSlider />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start justify-center min-h-screen pb-24 pt-32">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-[#FFD700]" />
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">
                            Social Media Creator &amp; Videographer
                        </p>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-6 max-w-4xl">
                        TELLING
                        <br />
                        YOUR
                        <br />
                        <span className="text-[#FFD700]">STORY.</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-white/50 text-lg md:text-xl font-semibold uppercase tracking-[0.15em] mb-12 max-w-xl">
                        Through Film &amp; Photography
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <Link
                            href="/portfolio"
                            className="bg-[#FFD700] text-black font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center gap-2"
                        >
                            View My Work
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white/40 text-white font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-5">
                        <span className="text-white/20 text-xs uppercase tracking-widest">Follow</span>
                        <div className="w-6 h-px bg-white/20" />
                        <a href="https://instagram.com/thegoldchris" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-[#FFD700] transition-colors duration-200">
                            <Instagram size={22} />
                        </a>
                        <a href="https://tiktok.com/@thegoldchris" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/40 hover:text-[#FFD700] transition-colors duration-200">
                            <TikTokIcon />
                        </a>
                        <a href="https://youtube.com/@thegoldchris" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/40 hover:text-[#FFD700] transition-colors duration-200">
                            <Youtube size={22} />
                        </a>
                        <a href="https://linkedin.com/in/thegoldchris" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-[#FFD700] transition-colors duration-200">
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── FEATURED WORK STRIP ─────────────────────────────────── */}
            <section className="bg-[#0a0a0a] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateIn variant="fadeUp">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#FFD700] rounded-full" />
                                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Featured Work</p>
                            </div>
                            <Link href="/portfolio" className="text-[#FFD700] text-sm font-bold hover:underline flex items-center gap-1">
                                View All <ArrowRight size={14} />
                            </Link>
                        </div>
                    </AnimateIn>
                    <AnimateIn variant="fadeUp" delay={100}>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                            {featuredWork.map((item) => (
                                <Link
                                    key={item.src}
                                    href="/portfolio"
                                    className="relative flex-none w-72 md:w-80 h-64 md:h-80 rounded-2xl overflow-hidden group snap-start"
                                >
                                    <Image
                                        src={`/assets/${item.src}`}
                                        alt={item.label}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                    <div className="absolute bottom-3 left-3">
                                        <span className="bg-black/60 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* ─── SERVICES TEASER ─────────────────────────────────────── */}
            <section className="bg-[#111111] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateIn variant="fadeUp">
                        <div className="text-center mb-16">
                            <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] mb-4">What I Do</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                SERVICES I OFFER
                            </h2>
                        </div>
                    </AnimateIn>

                    <div className="grid md:grid-cols-3 gap-4">
                        {services.map((s, i) => (
                            <AnimateIn key={s.title} variant="fadeUp" delay={i * 120}>
                                <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#FFD700]/30 group transition-all duration-300 hover:-translate-y-1 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700] mb-6 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                                        {s.icon}
                                    </div>
                                    <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2">0{i + 1}</div>
                                    <h3 className="text-xl font-black mb-3">{s.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                    <AnimateIn variant="fade" delay={200}>
                        <div className="flex justify-center mt-12">
                            <Link href="/services" className="flex items-center gap-2 text-white/60 font-semibold text-sm hover:text-[#FFD700] transition-colors duration-200">
                                See full services breakdown <ArrowRight size={16} />
                            </Link>
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* ─── ABOUT TEASER ────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <AnimateIn variant="fadeLeft">
                        <div className="relative">
                            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                                <Image
                                    src="/assets/Chris-headshot.jpg"
                                    alt="Christopher Cristancho — Gold Chris"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700]" />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FFD700]/20 rounded-2xl -z-10" />
                        </div>
                    </AnimateIn>

                    <AnimateIn variant="fadeRight">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-px bg-[#FFD700]" />
                                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">About Chris</p>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                                CHRISTOPHER<br />
                                <span className="text-[#FFD700]">CRISTANCHO</span>
                            </h2>
                            <p className="text-white/60 text-base leading-relaxed mb-5">
                                Known as Gold Chris, Christopher is a passionate content creator and videographer who tells stories through short-form video and photography. Based in Central Florida, he specializes in MMA and food content.
                            </p>
                            <p className="text-white/60 text-base leading-relaxed mb-10">
                                A Florida State University marketing graduate (&apos;23), Chris transitioned from corporate sales to become a full-time videographer and social media manager — because some stories are too good not to tell.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* ─── CTA BANNER ──────────────────────────────────────────── */}
            <section className="bg-[#111111] py-24 px-6 border-t border-white/8">
                <AnimateIn variant="fadeUp">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] mb-6">Ready to Create?</p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                            LET&apos;S CREATE
                            <br />
                            <span className="text-[#FFD700]">SOMETHING GREAT.</span>
                        </h2>
                        <p className="text-white/50 text-lg mb-12 max-w-lg mx-auto">
                            Whether you need stunning visuals, compelling video content, or social media strategy — let&apos;s talk.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black px-10 py-4 rounded-full text-base uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_40px_rgba(204,255,0,0.4)]"
                        >
                            Contact Me <ArrowRight size={18} />
                        </Link>
                    </div>
                </AnimateIn>
            </section>
        </div>
    )
}
