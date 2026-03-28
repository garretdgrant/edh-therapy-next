import { NextRequest } from "next/server";
import { Resend } from "resend";
import { isSpamHoneypot } from "@/lib/spam";
import { getSiteUrl } from "@/lib/site-url";
import { isValidEmail, isValidPhone } from "@/lib/validations";

type ContactRequestBody = {
  clientType?: string;
  company?: string;
  email?: string;
  message?: string;
  name?: string;
  phone?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultilineHtml(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function formatDisplayValue(value: string): string {
  return value.trim() ? escapeHtml(value.trim()) : "Not provided";
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const senderEmail = process.env.SENDER_EMAIL;
  const receiverEmail = process.env.RECEIVER_EMAIL;
  const siteUrl = getSiteUrl();

  try {
    if (!process.env.RESEND_API_KEY || !senderEmail || !receiverEmail) {
      return Response.json(
        { success: false, error: "Email configuration is missing." },
        { status: 500 },
      );
    }

    const body = (await req.json()) as ContactRequestBody;
    const {
      name = "",
      email = "",
      phone = "",
      message = "",
      clientType = "",
      company,
    } = body;

    if (isSpamHoneypot(company)) {
      return Response.json({ success: false, spam: true }, { status: 400 });
    }

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        { success: false, error: "Invalid phone number." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeMessage = formatMultilineHtml(message.trim());
    const safeClientType = formatDisplayValue(clientType);
    const submittedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/Los_Angeles",
    }).format(new Date());

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `New EDH Therapy inquiry from ${name.trim()}`,
      html: `
        <div style="margin:0;padding:32px 16px;background:#f5f0e8;font-family:Outfit,Arial,sans-serif;color:#3d3933;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;border-collapse:collapse;">
            <tr>
              <td>
                <div style="border-radius:28px;overflow:hidden;background:linear-gradient(180deg,#faf7f2 0%,#f7f2eb 100%);border:1px solid #d4ccc0;box-shadow:0 24px 60px rgba(191,181,165,0.22);">
                  <div style="padding:36px 36px 28px;background:
                    radial-gradient(circle at top right, rgba(197,207,190,0.55), transparent 34%),
                    radial-gradient(circle at bottom left, rgba(212,191,166,0.38), transparent 30%),
                    #faf7f2;
                  ">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                      <tr>
                        <td style="vertical-align:top;">
                          <div style="display:inline-block;padding:10px 14px;border-radius:999px;background:#ede8e0;color:#5a554d;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">
                            New Lead Inquiry
                          </div>
                          <h1 style="margin:18px 0 10px;font-family:'Cormorant Garamond',Georgia,serif;font-size:44px;line-height:1;color:#3d3933;font-weight:500;">
                            EDH Therapy
                          </h1>
                          <p style="margin:0;max-width:420px;font-size:16px;line-height:1.7;color:#5a554d;">
                            A new consultation request came in through the website contact form. The layout below mirrors the calm, refined feel of the site so the lead feels easy to triage at a glance.
                          </p>
                        </td>
                        <td style="width:88px;padding-left:16px;vertical-align:top;text-align:right;">
                          <div style="width:64px;height:64px;border-radius:999px;background:#a8b5a0;color:#3d3933;font-family:'Cormorant Garamond',Georgia,serif;font-size:34px;line-height:64px;text-align:center;display:inline-block;">
                            E
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div style="padding:0 36px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 14px;margin-top:-6px;">
                      <tr>
                        <td style="padding:18px 22px;background:#ffffff;border:1px solid rgba(212,204,192,0.9);border-radius:22px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <tr>
                              <td style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a8279;padding-bottom:8px;">
                                Primary Contact
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family:'Cormorant Garamond',Georgia,serif;font-size:34px;line-height:1.1;color:#3d3933;padding-bottom:10px;">
                                ${safeName}
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:15px;line-height:1.8;color:#5a554d;">
                                <strong style="color:#3d3933;">Email:</strong> ${safeEmail}<br />
                                <strong style="color:#3d3933;">Phone:</strong> ${safePhone}<br />
                                <strong style="color:#3d3933;">Seeking Help For:</strong> ${safeClientType}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:10px 0 18px;">
                      <tr>
                        <td style="width:50%;padding-right:8px;">
                          <a href="mailto:${email.trim()}" style="display:block;text-align:center;padding:14px 18px;border-radius:16px;background:#3d3933;color:#faf7f2;text-decoration:none;font-size:14px;font-weight:600;">
                            Reply by Email
                          </a>
                        </td>
                        <td style="width:50%;padding-left:8px;">
                          <a href="tel:${phone.trim()}" style="display:block;text-align:center;padding:14px 18px;border-radius:16px;background:#c5cfbe;color:#3d3933;text-decoration:none;font-size:14px;font-weight:600;">
                            Call Lead
                          </a>
                        </td>
                      </tr>
                    </table>

                    <div style="padding:22px 24px;border-radius:24px;background:#f5f0e8;border:1px solid rgba(212,204,192,0.95);">
                      <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a8279;margin-bottom:12px;">
                        Their Message
                      </div>
                      <div style="font-size:16px;line-height:1.8;color:#3d3933;">
                        ${safeMessage}
                      </div>
                    </div>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:18px;">
                      <tr>
                        <td style="padding:18px 22px;border-radius:20px;background:#ede8e0;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <tr>
                              <td style="font-size:13px;color:#5a554d;line-height:1.8;">
                                <strong style="color:#3d3933;">Received:</strong> ${submittedAt}<br />
                                <strong style="color:#3d3933;">Source:</strong> Website contact form<br />
                                <strong style="color:#3d3933;">Site:</strong> <a href="${siteUrl}" style="color:#3d3933;text-decoration:underline;">${siteUrl.replace(/^https?:\/\//, "")}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    return Response.json({ success: true, data });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message.";

    return Response.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
