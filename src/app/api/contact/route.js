import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validare date de intrare
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate' },
        { status: 400 }
      )
    }

    // Validare format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email invalid' },
        { status: 400 }
      )
    }

    // Configurare Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verificare configurare transporter
    await transporter.verify()

    // Pregătire email
    const emailSubject = subject 
      ? `[SimplifyWeb Contact] ${subject}` 
      : '[SimplifyWeb Contact] Mesaj nou de pe site'

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #121212; color: #F5F5F5;">
        <div style="background: linear-gradient(135deg, #FF7B7B, #50DDD5); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Mesaj nou de pe SimplifyWeb</h1>
        </div>
        
        <div style="background-color: #2B2B2B; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #50DDD5; margin-top: 0;">Detalii expeditor:</h2>
          <p style="margin: 10px 0;"><strong style="color: #FFE066;">Nume:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #FFE066;">Email:</strong> ${email}</p>
          ${subject ? `<p style="margin: 10px 0;"><strong style="color: #FFE066;">Subiect:</strong> ${subject}</p>` : ''}
        </div>
        
        <div style="background-color: #2B2B2B; padding: 20px; border-radius: 10px;">
          <h2 style="color: #50DDD5; margin-top: 0;">Mesaj:</h2>
          <div style="background-color: #1C1C1C; padding: 15px; border-radius: 8px; border-left: 4px solid #FF7B7B;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #1C1C1C; border-radius: 8px;">
          <p style="margin: 0; color: #B0B0B0; font-size: 14px;">
            Acest mesaj a fost trimis automat de pe site-ul SimplifyWeb
          </p>
        </div>
      </div>
    `

    const textContent = `
Mesaj nou de pe SimplifyWeb

Detalii expeditor:
- Nume: ${name}
- Email: ${email}
${subject ? `- Subiect: ${subject}` : ''}

Mesaj:
${message}

---
Acest mesaj a fost trimis automat de pe site-ul SimplifyWeb
    `

    // Trimitere email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      replyTo: email, // Permite răspuns direct către expeditor
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email trimis cu succes!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error)
    
    return NextResponse.json(
      { error: 'Eroare la trimiterea email-ului. Te rog încearcă din nou.' },
      { status: 500 }
    )
  }
}
