import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  // Instantiate inside the handler so it only runs at request time, not build time
  const resend = new Resend(apiKey);

  try {
    const { name, email, phone, service, message } = await req.json();

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: "Name, email and service are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "CPALS & Co <noreply@cpalsandco.com>",
      to: ["ca@cpalsandco.com"],
      replyTo: email.trim(),
      subject: `New Enquiry — ${service} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 8px;">
          <div style="background: #1e3a5f; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Enquiry — CPALS & Co Website</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 140px;">
                  <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 15px;">
                  ${name.trim()}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 15px;">
                  <a href="mailto:${email.trim()}" style="color: #2563eb;">${email.trim()}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Mobile</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 15px;">
                  ${phone?.trim() || "—"}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Service</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="background: #eff6ff; color: #2563eb; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    ${service.trim()}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
                </td>
                <td style="padding: 10px 0; color: #1e293b; font-size: 15px; line-height: 1.6;">
                  ${message?.trim() || "—"}
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 14px 16px; background: #f0fdf4; border-left: 3px solid #22c55e; border-radius: 4px;">
              <p style="margin: 0; color: #16a34a; font-size: 13px;">
                💡 Reply directly to this email — it will go to <strong>${email.trim()}</strong>
              </p>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            Sent from cpalsandco.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
