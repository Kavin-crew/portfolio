"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { success: false, message: "All fields are required." };
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["abreganakavin@gmail.com"],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong." };
  }
}
