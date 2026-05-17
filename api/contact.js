import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "dbhuvanesh2005@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ||
  "Ocean Journey Portfolio <onboarding@resend.dev>";

function cleanText(value = "") {
  return String(value).trim().slice(0, 2000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createOceanEmailTemplate({ name, email, subject, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || "Portfolio Contact");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ocean Journey Portfolio Message</title>
  </head>

  <body style="margin:0; padding:0; background:#020617; font-family:Arial, Helvetica, sans-serif; color:#f8fafc;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#020617; padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#031826; border:1px solid rgba(56,189,248,0.35); border-radius:24px; overflow:hidden; box-shadow:0 24px 80px rgba(0,0,0,0.35);">

            <tr>
              <td style="padding:28px 28px 22px; background:linear-gradient(135deg,#06243A,#031826 55%,#020617); border-bottom:1px solid rgba(56,189,248,0.25);">
                <div style="font-size:13px; letter-spacing:2px; text-transform:uppercase; color:#7dd3fc; font-weight:700;">
                  Ocean Journey Portfolio
                </div>
                <h1 style="margin:10px 0 0; color:#f8fafc; font-size:28px; line-height:1.2;">
                  🌊 New Portfolio Message
                </h1>
                <p style="margin:10px 0 0; color:#cbd5e1; font-size:15px; line-height:1.7;">
                  Someone sent a message from your portfolio contact form.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:14px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(186,230,253,0.14); border-radius:16px;">
                      <div style="color:#7dd3fc; font-size:12px; text-transform:uppercase; letter-spacing:1.5px; font-weight:700;">Name</div>
                      <div style="color:#f8fafc; font-size:16px; margin-top:6px;">${safeName}</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="height:12px;"></td>
                  </tr>

                  <tr>
                    <td style="padding:14px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(186,230,253,0.14); border-radius:16px;">
                      <div style="color:#7dd3fc; font-size:12px; text-transform:uppercase; letter-spacing:1.5px; font-weight:700;">Email</div>
                      <div style="color:#f8fafc; font-size:16px; margin-top:6px;">
                        <a href="mailto:${safeEmail}" style="color:#38bdf8; text-decoration:none;">${safeEmail}</a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="height:12px;"></td>
                  </tr>

                  <tr>
                    <td style="padding:14px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(186,230,253,0.14); border-radius:16px;">
                      <div style="color:#7dd3fc; font-size:12px; text-transform:uppercase; letter-spacing:1.5px; font-weight:700;">Subject</div>
                      <div style="color:#f8fafc; font-size:16px; margin-top:6px;">${safeSubject}</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="height:16px;"></td>
                  </tr>

                  <tr>
                    <td style="padding:18px; background:#020617; border:1px solid rgba(56,189,248,0.24); border-radius:18px;">
                      <div style="color:#7dd3fc; font-size:12px; text-transform:uppercase; letter-spacing:1.5px; font-weight:700;">Message</div>
                      <div style="color:#e2e8f0; font-size:15px; line-height:1.8; margin-top:10px;">
                        ${safeMessage}
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:22px; padding:14px 16px; background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.18); border-radius:16px; color:#cbd5e1; font-size:13px; line-height:1.6;">
                  Reply directly to this email using the sender address above.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 28px; background:#020617; border-top:1px solid rgba(56,189,248,0.18); color:#94a3b8; font-size:12px; line-height:1.6;">
                Sent from Bhuvanesh D - Ocean Journey Portfolio.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed"
    });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        ok: false,
        message: "Email service is not configured."
      });
    }

    const body = req.body || {};

    const name = cleanText(body.name);
    const email = cleanText(body.email);
    const subject = cleanText(body.subject || "Portfolio Contact");
    const message = cleanText(body.message);
    const website = cleanText(body.website);

    if (website) {
      return res.status(200).json({
        ok: true,
        message: "Message received."
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: "Name, email, and message are required."
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        ok: false,
        message: "Please enter a valid email address."
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        ok: false,
        message: "Message must be at least 10 characters."
      });
    }

    const html = createOceanEmailTemplate({
      name,
      email,
      subject,
      message
    });

    const text = `
New Portfolio Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent from Ocean Journey Portfolio.
`;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `🌊 New Portfolio Message from ${name}`,
      html,
      text
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        ok: false,
        message: "Email failed to send. Please try again."
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Message launched into the ocean.",
      id: data?.id
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again."
    });
  }
}
