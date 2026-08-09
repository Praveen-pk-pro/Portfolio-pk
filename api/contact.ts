import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    // Gmail / Custom SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 587 ? false : true,
      auth: {
        user: process.env.GMAIL_USER || 'pkpraveen83441234@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS,
      },
    });

    // Send email via SMTP
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER || 'pkpraveen83441234@gmail.com'}>`,
      to: 'pkpraveen83441234@gmail.com',
      replyTo: email,
      subject: `📬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #333; max-width: 600px; border: 1px solid #e5e7eb; rounded: 12px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Message from Portfolio Website</h2>
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="margin: 8px 0;"><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-left: 4px solid #2563eb; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully via SMTP' });
  } catch (error: any) {
    console.error('SMTP Delivery Error:', error);
    return res.status(500).json({ error: error.message || 'SMTP Email delivery failed' });
  }
}
