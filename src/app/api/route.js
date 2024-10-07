import { NextResponse } from "next/server";
import { Resend } from 'resend';
import EmailSection from "../components/EmailSection";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const data = await resend.emails.send({
      from: email,
      to: ["hoangnph@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>{message}</p>
        </>
      )
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
