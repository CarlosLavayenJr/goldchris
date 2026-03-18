import Link from 'next/link'
import { Monitor, Video, Camera, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
    {
        icon: <Monitor size={40} />,
        number: '01',
        title: 'Social Media Management',
        tagline: 'Grow your brand. Own your audience.',
        description: 'A strong social media presence isn\'t just about posting — it\'s about strategy, consistency, and authentic connection. Gold Chris handles everything from content planning to community engagement so you can focus on what you do best.',
        items: [
            { name: 'Content Strategy', desc: 'Tailored content calendars and pillars that keep your audience engaged and growing.' },
            { name: 'Copywriting', desc: 'Persuasive, on-brand captions and posts that communicate your message.' },
            { name: 'Community Management', desc: 'Timely responses and relationship-building with your audience.' },
            { name: 'Profile Optimization', desc: 'Bios, highlights, and layout optimized to attract and retain the right followers.' },
        ],
    },
    {
        icon: <Video size={40} />,
        number: '02',
        title: 'Videography',
        tagline: 'From concept to final cut.',
        description: 'Video is the most powerful medium for telling your story. Whether you\'re a fighter, a brand, or a business, Gold Chris creates short-form and long-form video content that stops the scroll and commands attention.',
        items: [
            { name: 'Curation + Creation', desc: 'End-to-end video production from concept development to final delivery.' },
            { name: 'Short-Form Video', desc: 'Reels, TikToks, and YouTube Shorts designed to perform on social platforms.' },
            { name: 'Video Editing', desc: 'Professional editing with pacing, color grade, and sound design.' },
            { name: 'Event Coverage', desc: 'Full event documentation — MMA fights, corporate events, celebrations.' },
        ],
    },
    {
        icon: <Camera size={40} />,
        number: '03',
        title: 'Photography',
        tagline: 'Every frame tells a story.',
        description: 'Still images done right are timeless. Gold Chris brings a videographer\'s eye to photography — capturing decisive moments with cinematic composition and professional post-processing.',
        items: [
            { name: 'Photo Shoots', desc: 'Portraits, action shots, brand photography — expertly executed.' },
            { name: 'Event Photography', desc: 'Capturing the energy and key moments of your events in real time.' },
            { name: 'Photo Editing', desc: 'Professional color grading and retouching for a polished, consistent look.' },
            { name: 'Deliverables', desc: 'High-resolution files optimized for both print and digital use.' },
        ],
    },
]

export default function ServicesPage() {
    return (
        <div>
            {/* ─── HERO ───────────────────────────────────────────────── */}
            <section className="bg-[#0a0a0a] pt-16 pb-20 px-6 border-b border-white/8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 pt-8">
                        <div className="w-8 h-px bg-[#FFD700]" />
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">What I Offer</p>
                    </div>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tighter mb-6 max-w-3xl">
                        SERVICES<br />
                        <span className="text-[#FFD700]">I OFFER.</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                        Creative services designed for athletes, brands, and businesses that want to be seen and remembered.
                    </p>
                </div>
            </section>

            {/* ─── SERVICE SECTIONS ───────────────────────────────────── */}
            <div className="bg-[#0a0a0a]">
                {services.map((s, i) => (
                    <section
                        key={s.title}
                        className={`py-20 px-6 border-b border-white/8 ${i % 2 === 1 ? 'bg-[#111111]' : ''}`}
                    >
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
                                <div className="flex items-start gap-6">
                                    <div className="flex-none">
                                        <div className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                                            {s.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] mb-2">{s.number}</p>
                                        <h2 className="text-3xl md:text-4xl font-black mb-2">{s.title}</h2>
                                        <p className="text-white/40 font-semibold italic">{s.tagline}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl">
                                {s.description}
                            </p>

                            {/* Items grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {s.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-[#FFD700]/20 transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className="text-[#FFD700] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <CheckCircle size={18} />
                                        </div>
                                        <h3 className="font-black text-white mb-2">{item.name}</h3>
                                        <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* ─── CTA ────────────────────────────────────────────────── */}
            <section className="bg-[#111111] py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] mb-6">Ready to Start?</p>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                        LET&apos;S MAKE SOMETHING<br />
                        <span className="text-[#FFD700]">WORTH WATCHING.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200"
                        >
                            View My Work <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                            Get In Touch <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
