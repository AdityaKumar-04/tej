import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: "Contact Us <onboarding@resend.dev>", // Change to your verified sender email
      to: ['tej123infotravels@gmail.com'], // Change to your verified recipient email
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!", response });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send email", error });
  }
}
