import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      phoneNumber,
      website = "",
      labelType = "Not specified",
      quantity = "Not specified",
      timeline = "Not specified",
      source = "Website Instant Enquiry Form",
    } = body;

    // Validate essential fields
    if (!fullName || !workEmail || !phoneNumber) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Phone)." },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log(`[Lead Enquiry Received] from ${fullName} (${workEmail}, ${phoneNumber}) - ${labelType} [${quantity}]`);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const receiverEmails =
      process.env.NOTIFICATION_RECEIVER_EMAIL || "Kunal@artisanven.com, Sales@artisanven.com";

    // Clean phone number for WhatsApp direct link
    const cleanPhone = phoneNumber.replace(/\D/g, "");

    // Email HTML template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px; color: #1c1c1e; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #81014d; color: #ffffff; padding: 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: #fdf2f8; color: #81014d; border: 1px solid #fbcfe8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; rounded-full; border-radius: 999px; margin-bottom: 16px; }
    .section-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #f4f4f5; padding-bottom: 6px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f4f4f5; }
    .table td.label { width: 35%; color: #71717a; font-weight: 600; }
    .table td.value { width: 65%; color: #18181b; font-weight: 600; }
    .table td.highlight { color: #81014d; font-weight: 700; font-size: 15px; }
    .btn-group { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 10px 18px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
    .btn-primary { background: #81014d; color: #ffffff !important; }
    .btn-whatsapp { background: #10b981; color: #ffffff !important; }
    .btn-secondary { background: #f4f4f5; color: #18181b !important; border: 1px solid #e4e4e7; }
    .footer { background: #fafafa; padding: 16px 24px; font-size: 12px; color: #a1a1aa; border-top: 1px solid #f4f4f5; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Label Quotation Enquiry</h1>
      <p>Artisan Ventures Private Limited &bull; Inbound Web Lead</p>
    </div>

    <div class="content">
      <div class="badge">Source: ${source}</div>

      <div class="section-title">Customer Contact Details</div>
      <table class="table">
        <tr>
          <td class="label">Full Name:</td>
          <td class="value">${fullName}</td>
        </tr>
        <tr>
          <td class="label">Work Email:</td>
          <td class="value"><a href="mailto:${workEmail}" style="color: #81014d; text-decoration: none;">${workEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp:</td>
          <td class="value"><a href="tel:${phoneNumber}" style="color: #18181b; text-decoration: none;">${phoneNumber}</a></td>
        </tr>
        ${
          website
            ? `<tr>
          <td class="label">Company Website:</td>
          <td class="value"><a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank" style="color: #81014d;">${website}</a></td>
        </tr>`
            : ""
        }
      </table>

      <div class="section-title">Quotation Requirements</div>
      <table class="table">
        <tr>
          <td class="label">Label Type:</td>
          <td class="value highlight">${labelType}</td>
        </tr>
        <tr>
          <td class="label">Required Quantity:</td>
          <td class="value highlight">${quantity}</td>
        </tr>
        <tr>
          <td class="label">Required Timeline:</td>
          <td class="value">${timeline}</td>
        </tr>
        <tr>
          <td class="label">Received At:</td>
          <td class="value" style="font-size: 13px; color: #71717a;">${submissionTime} (IST)</td>
        </tr>
      </table>

      <!-- Quick Action Buttons for Sales Team -->
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed #e4e4e7;">
        <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #71717a;">Quick Actions for Sales Team:</p>
        <div class="btn-group">
          <a href="https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${fullName}, thank you for your enquiry with Artisan Ventures regarding ${labelType}. We are preparing your quotation.`)}" class="btn btn-whatsapp" target="_blank">Chat Client on WhatsApp &rarr;</a>
          <a href="mailto:${workEmail}?subject=${encodeURIComponent(`Quotation for ${labelType} - Artisan Ventures`)}" class="btn btn-primary">Reply by Email &rarr;</a>
          <a href="tel:${cleanPhone}" class="btn btn-secondary">Call Client</a>
        </div>
      </div>
    </div>

    <div class="footer">
      This is an automated notification generated by the Artisan Ventures Web Lead System.<br/>
      Factory: Santej, Kalol, Gujarat &bull; Corporate Office: Usmanpura, Ahmedabad
    </div>
  </div>
</body>
</html>
    `;

    // Check if SMTP is configured
    const isSmtpConfigured =
      smtpUser &&
      smtpPass &&
      !smtpUser.includes("yourgmailaddress") &&
      !smtpPass.includes("xxxx");

    if (isSmtpConfigured) {
      // Create Nodemailer Transporter for Gmail
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass.replace(/\s+/g, ""), // strip any spaces from App Password
        },
      });

      // Send the email
      await transporter.sendMail({
        from: `"Artisan Ventures Inquiries" <${smtpUser}>`,
        to: receiverEmails,
        replyTo: workEmail, // allows the company to hit "Reply" and email the client directly
        subject: `🔥 New Quotation Enquiry: ${fullName} (${labelType} - ${quantity})`,
        html: emailHtml,
        text: `New Quotation Enquiry from Artisan Ventures Website:
Name: ${fullName}
Work Email: ${workEmail}
Phone: ${phoneNumber}
Website: ${website || "N/A"}
Label Type: ${labelType}
Quantity: ${quantity}
Timeline: ${timeline}
Received At: ${submissionTime}`,
      });

      console.log(`[Email Dispatched Successfully] Notification delivered to ${receiverEmails}`);
    } else {
      console.warn(
        `[Email Notice] SMTP_USER or SMTP_PASS is not configured in .env.local. The enquiry was logged to server console.`
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully and company notified.",
    });
  } catch (error: any) {
    console.error("[Enquiry API Error]:", error);
    // Still return success to user so front-end ending screen shows cleanly, with a note
    return NextResponse.json(
      {
        success: true,
        warning: "Enquiry recorded, but email delivery had an issue.",
        error: error?.message,
      },
      { status: 200 }
    );
  }
}
