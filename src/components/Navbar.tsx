"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        window.addEventListener("scroll", handleScroll);

        // Scroll Spy Logic
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Education", href: "#education", id: "education" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#pro", id: "pro" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <nav className={`navbar navbar-expand-sm fixed-top ${isScrolled || isMenuOpen ? "scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand" href="#" onClick={() => setIsMenuOpen(false)}>ROSHAN</a>
                <button
                    className={`navbar-toggler ${isMenuOpen ? "open" : ""}`}
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`} id="mynavbar">
                    <ul className="navbar-nav">
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item">
                            <button
                                onClick={() => {
                                    toggleTheme();
                                    setIsMenuOpen(false);
                                }}
                                className="theme-toggle-btn"
                                aria-label="Toggle Theme"
                            >
                                <i className={`fa-solid ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
