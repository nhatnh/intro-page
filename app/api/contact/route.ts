import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'TN Homes LLC <noreply@tnhomes.us>',
      to: 'contact@tnhomes.us',
      reply_to: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #0f0f0f;">
          <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">New Message from TN Homes Website</h2>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 32px;">Someone submitted the contact form on tnhomes.us</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af; width: 100px;">From</td>
              <td style="padding: 12px 0; font-size: 14px; color: #0f0f0f;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Email</td>
              <td style="padding: 12px 0; font-size: 14px; color: #0f0f0f;"><a href="mailto:${email}" style="color: #b5956a;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Subject</td>
              <td style="padding: 12px 0; font-size: 14px; color: #0f0f0f;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af; margin-bottom: 12px;">Message</p>
            <div style="background: #f9fafb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.7; color: #374151; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f3f4f6;">
            <p style="font-size: 12px; color: #9ca3af;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
