// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailSection from "../components/EmailSection";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const emailFrom = "hoangnph@gmail.com";
  const subject = "Test Sub";
  const body = "This a test email";

  try {
    const data = await resend.emails.send({
      from: emailFrom,
      to: ["hoangnph@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>{body}</p>
        </>
      )
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
