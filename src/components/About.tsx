export default function About() {
    return (
        <section id="about">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>About Me</h1>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2>I&apos;m ROSHAN</h2>
                            <h4 className="text-accent mb-4">Software Engineer</h4>
                            <div
                                className="text-start"
                                style={{
                                    maxWidth: "800px",
                                    margin: "0 auto",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <p>
                                    I’m a full-stack Python engineer focused on building
                                    production-ready software, not demos or tutorial clones.
                                </p>

                                <p>
                                    My core stack is Python, Django, REST APIs, React, and
                                    PostgreSQL, with hands-on experience deploying and operating
                                    systems on AWS (EC2, S3, RDS). I work end-to-end: backend
                                    logic, APIs, authentication, database design, performance
                                    optimization, and deployment.
                                </p>

                                <p>
                                    During my internship, I worked on live Django applications,
                                    where I improved performance by optimizing database queries,
                                    fixing structural bottlenecks, and cleaning up brittle logic.
                                    I’ve deployed and managed cloud infrastructure myself—not to
                                    pad a resume, but to understand how real systems behave
                                    outside localhost.
                                </p>

                                <p>
                                    I’m deliberate about fundamentals: clean architecture,
                                    readable code, predictable APIs, and systems that scale
                                    without becoming fragile. I don’t hide behind “still learning”
                                    — I build, ship, break things, debug them, and improve the
                                    design.
                                </p>

                                <p>
                                    Right now, I’m looking for a role as a full-stack Python
                                    engineer where I can contribute to real products: designing
                                    APIs, improving system reliability, and working with engineers
                                    who value execution, clarity, and engineering discipline over
                                    buzzwords.
                                </p>

                                <p>
                                    If your team builds real software and expects engineers to
                                    think independently and take ownership, I’ll fit right in.
                                </p>
                            </div>

                            <p className="mt-4">
                                <i className="fa-solid fa-location-dot text-accent me-2"></i>{" "}
                                Malappuram, Kerala, India - 676122
                            </p>

                            <div className="mt-4">
                                <a href="#contact" className="btn btn-outline">
                                    Let&apos;s Talk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
