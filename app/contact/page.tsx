'use client'

import { useState } from 'react'
import { Phone, Mail, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react'

const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.13a4.85 4.85 0 01-1-.44z" />
    </svg>
)

const socials = [
    { href: 'https://instagram.com/thegoldchris', label: 'Instagram', Icon: Instagram },
    { href: 'https://tiktok.com/@thegoldchris', label: 'TikTok', Icon: TikTokIcon },
    { href: 'https://youtube.com/@thegoldchris', label: 'YouTube', Icon: Youtube },
    { href: 'https://linkedin.com/in/thegoldchris', label: 'LinkedIn', Icon: Linkedin },
]

const inputClass = "w-full bg-transparent border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/20 transition-all duration-200"

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        handle: '',
        service: 'Social Media Management',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div>
            {/* ─── HERO ───────────────────────────────────────────────── */}
            <section className="bg-[#0a0a0a] pt-16 pb-20 px-6 border-b border-white/8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 pt-8">
                        <div className="w-8 h-px bg-[#FFD700]" />
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">Get In Touch</p>
                    </div>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tighter mb-6 max-w-3xl">
                        LET&apos;S WORK<br />
                        <span className="text-[#FFD700]">TOGETHER.</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-lg leading-relaxed">
                        Ready to tell your story? Reach out and let&apos;s make something great together.
                    </p>
                </div>
            </section>

            {/* ─── FORM + INFO ────────────────────────────────────────── */}
            <section className="py-20 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-20">
                    {/* Form — 3 cols */}
                    <div className="md:col-span-3">
                        <h2 className="text-2xl font-black mb-8">Send a Message</h2>

                        {status === 'success' ? (
                            <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-2xl p-10 text-center">
                                <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-[#FFD700] mb-2">Message Sent!</h3>
                                <p className="text-white/60">Thanks for reaching out. I&apos;ll be in touch soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Smith"
                                            required
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="you@email.com"
                                            required
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-2">Social Handle <span className="text-white/20 normal-case font-normal tracking-normal">(optional)</span></label>
                                    <input
                                        type="text"
                                        placeholder="@yourhandle"
                                        value={form.handle}
                                        onChange={e => setForm({ ...form, handle: e.target.value })}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-2">Service Needed</label>
                                    <select
                                        value={form.service}
                                        onChange={e => setForm({ ...form, service: e.target.value })}
                                        className={`${inputClass} bg-[#0a0a0a] cursor-pointer`}
                                    >
                                        <option value="Social Media Management">Social Media Management</option>
                                        <option value="Videography">Videography</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-2">Message</label>
                                    <textarea
                                        placeholder="Tell me about your project, timeline, and goals..."
                                        rows={6}
                                        required
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>

                                    {status === 'error' && (
                                        <p className="mt-3 text-red-400 text-sm">
                                            Something went wrong. Try emailing me directly at{' '}
                                            <a href="mailto:thegoldchris@gmail.com" className="underline hover:text-red-300">
                                                thegoldchris@gmail.com
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Contact Info — 2 cols */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-black mb-8">Contact Info</h2>

                        <div className="space-y-6 mb-10">
                            <a
                                href="tel:+14072851524"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#FFD700] group-hover:border-[#FFD700]/30 transition-all duration-200 flex-none">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-0.5">Phone</p>
                                    <p className="text-white font-semibold text-sm group-hover:text-[#FFD700] transition-colors duration-200">
                                        +1 (407) 285-1524
                                    </p>
                                </div>
                            </a>

                            <a
                                href="mailto:thegoldchris@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#FFD700] group-hover:border-[#FFD700]/30 transition-all duration-200 flex-none">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-0.5">Email</p>
                                    <p className="text-white font-semibold text-sm group-hover:text-[#FFD700] transition-colors duration-200">
                                        thegoldchris@gmail.com
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="border-t border-white/8 pt-8">
                            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-5">Follow On Social</p>
                            <div className="flex gap-3">
                                {socials.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-all duration-200"
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 bg-[#111111] rounded-2xl p-6 border border-white/8">
                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">Location</p>
                            <p className="text-white font-semibold">Central Florida</p>
                            <p className="text-white/40 text-sm mt-1">Available to travel anywhere for the right project.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
