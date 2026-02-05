"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const fullText = "Software Engineer";
    const speed = 100;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let start = 0;
        const end = 20;
        const duration = 800; // Faster speed
        const increment = end / (duration / 16); // 60fps approx

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home">
            <div className="content">
                <div className="container hero-lg">
                    <div className="row align-items-center">
                        <div className="col-lg-5 hero-left offset-lg-1">
                            <p className="eyebrow">
                                <span id="typewriter">{text}</span>
                                <span className="cursor">_</span>
                            </p>
                            <h1 className="">
                                Building Robust <br />
                                <span className="text-gradient">Solutions</span>
                            </h1>
                            <p className="hero-sub">
                                I architect scalable web applications and solve complex problems
                                with clean, efficient code. Dedicated to high-performance
                                engineering.
                            </p>
                            <div className="hero-cta mt-4">
                                <a className="btn btn-primary me-2" href="#pro">
                                    View Projects
                                </a>
                                <a className="btn btn-outline" href="#contact">
                                    Contact Me
                                </a>
                            </div>
                            <div className="hero-stats d-flex gap-4 mt-5">
                                <div className="stat text-start">
                                    <div className="stat-num">
                                        <span className="counter">{count}</span>
                                        +
                                    </div>
                                    <div className="stat-label">Projects</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-right text-center">
                            <div className="hero-visual">
                                <Image
                                    src="/images/roshan.png"
                                    alt="Rishad Roshan"
                                    width={600}
                                    height={600}
                                    priority
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
