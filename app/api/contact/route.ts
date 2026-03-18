import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { name, email, handle, service, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: wire up Resend or email provider
    console.log('Contact form submission:', { name, email, handle, service, message })

    return NextResponse.json({ success: true })
}
