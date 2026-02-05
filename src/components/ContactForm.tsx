"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions";
import TicTacToe from "./TicTacToe";

export default function ContactForm() {
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string | null;
    }>({ type: null, message: null });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setStatus({ type: null, message: null });

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus({
                type: "success",
                message: "Your message has been sent successfully!",
            });
            // @ts-ignore
            document.getElementById("contact-form")?.reset();
        } else {
            setStatus({
                type: "error",
                message: result.error || "There was an error sending your message.",
            });
        }
        setLoading(false);
    }

    return (
        <section id="contact">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="contact-form">
                                {status.message && (
                                    <div
                                        className={`alert alert-${status.type === "success" ? "success" : "danger"} mb-4`}
                                        role="alert"
                                        style={{
                                            borderRadius: "var(--radius-sm)",
                                            background: "rgba(var(--accent-rgb), 0.1)",
                                            color: "var(--text-primary)",
                                            border: "1px solid var(--accent)",
                                        }}
                                    >
                                        {status.message}
                                    </div>
                                )}
                                <form id="contact-form" action={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Your Name" name="name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder="Your Email" name="email" required />
                                        </div>
                                    </div>
                                    <input type="number" placeholder="Your Phone Number" name="phone" required />
                                    <textarea
                                        name="message"
                                        cols={35}
                                        rows={6}
                                        placeholder="How can I help you?"
                                        required
                                    ></textarea>
                                    <button type="submit" className="submit" disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>

                                <div className="social text-center">
                                    <a href="https://www.instagram.com/roshannn.n/?hl=en" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/rishadroshanpt" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a href="mailto:rishadroshan27778@gmail.com">
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/rishad-roshan-pt" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <div className="tic-tac-toe-wrapper">
                                <TicTacToe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
