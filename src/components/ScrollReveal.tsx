"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number;
    delay?: string;
}

export default function ScrollReveal({ children, threshold = 0.1, delay }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: threshold,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, observerOptions);

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`reveal ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
}
