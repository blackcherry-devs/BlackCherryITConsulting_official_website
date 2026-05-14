import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Default "to" email if not provided in env
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "blackcherrydevs@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "BlackCherry IT <noreply@contact.blackcherryitconsulting.com>",
      to: [toEmail],
      subject: `NUEVA CONSULTA: ${name.toUpperCase()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #8B090A; text-transform: uppercase;">Nueva Consulta Recibida</h2>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #8B090A;">
            ${message.replace(/\n/g, '<br />')}
          </div>
          <hr />
          <p style="font-size: 12px; color: #666;">Este es un mensaje automático enviado desde el sitio web de BlackCherry IT.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
