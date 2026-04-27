import { Resend } from "resend";
import { NextRequest } from "next/server";

const TO_EMAIL = "Blackflagmarketinggroup@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, company, tier, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `⚔️ New Lead: ${name}${tier ? ` — ${tier}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; background: #050505; color: #F5F5F1; padding: 40px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(124,58,237,0.4);">
          <div style="border-bottom: 1px solid rgba(124,58,237,0.3); padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 24px; color: #F5F5F1; margin: 0; letter-spacing: 0.1em;">⚔️ NEW LEAD INCOMING</h1>
            <p style="color: rgba(124,58,237,0.9); margin: 6px 0 0; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">Black Flag Systems — Contact Form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,241,0.5); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #F5F5F1; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,241,0.5); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0; color: #F5F5F1; font-size: 15px;"><a href="mailto:${email}" style="color: rgba(124,58,237,0.9);">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,241,0.5); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">Phone</td>
              <td style="padding: 10px 0; color: #F5F5F1; font-size: 15px;">${phone}</td>
            </tr>` : ""}
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,241,0.5); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">Company</td>
              <td style="padding: 10px 0; color: #F5F5F1; font-size: 15px;">${company}</td>
            </tr>` : ""}
            ${tier ? `
            <tr>
              <td style="padding: 10px 0; color: rgba(245,245,241,0.5); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">Interested In</td>
              <td style="padding: 10px 0; color: rgba(124,58,237,0.9); font-size: 15px; font-weight: bold;">${tier}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 20px; border: 1px solid rgba(124,58,237,0.2); background: rgba(18,3,33,0.6);">
            <p style="color: rgba(245,245,241,0.5); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 10px;">Message</p>
            <p style="color: #F5F5F1; font-size: 15px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(124,58,237,0.2);">
            <p style="color: rgba(245,245,241,0.25); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0;">
              Black Flag Systems — No Quarter Given.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}
