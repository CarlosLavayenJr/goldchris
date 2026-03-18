import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-plus-jakarta',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Gold Chris — Social Media Creator & Videographer',
    description: 'Christopher Cristancho, known as Gold Chris, is a social media creator and videographer based in Central Florida specializing in MMA and food content.',
    openGraph: {
        title: 'Gold Chris — Social Media Creator & Videographer',
        description: 'Christopher Cristancho is a content creator and videographer based in Central Florida specializing in MMA and food.',
        siteName: 'Gold Chris',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={plusJakartaSans.variable}>
            <body
                className="bg-[#0a0a0a] text-white min-h-screen flex flex-col antialiased"
                style={{ fontFamily: 'var(--font-plus-jakarta), Plus Jakarta Sans, sans-serif' }}
            >
                <Navbar />
                <main className="pt-16 flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
