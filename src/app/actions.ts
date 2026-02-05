"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Use environment variables for sensitive info
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USERNAME || "rishadroshan27778@gmail.com",
            pass: process.env.MAIL_PASSWORD || "atyz xhyo ujrg oshh",
        },
    });

    const mailOptions = {
        from: process.env.MAIL_DEFAULT_SENDER || "rishadroshan27778@gmail.com",
        to: "rishadroshan27778@gmail.com",
        subject: `${name} contacting you via portfolio`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send message." };
    }
}
