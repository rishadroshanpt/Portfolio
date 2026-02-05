export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            type: "Full-time",
            company: "QubesAi.in",
            period: "Dec 2025 - Present • On-site",
            role: "AI & Automation Engineer",
            points: [
                "Built scalable web applications using n8n as the backend orchestration layer.",
                "Integrated LLM (Large Language Model) workflows for intelligent automation.",
                "Designed robust REST APIs and Webhooks to connect disparate systems.",
                "Streamlined business processes through custom automation pipelines.",
            ],
        },
        {
            title: "Full Stack Developer",
            type: "Internship",
            company: "Synnefo Solutions",
            period: "Jun 2024 - Feb 2025 • Kochi, Kerala",
            role: "Python Full Stack Developer",
            points: [
                "Developed and maintained web applications using Python (Django, Flask) for the backend and React.js for the frontend.",
                "Designed and implemented RESTful APIs, enhancing integration between frontend and backend.",
                "Collaborated with cross-functional teams to deliver high-quality software solutions.",
                "Leveraged SQL (PostgreSQL) and NoSQL (MongoDB) databases to optimize queries and performance.",
                "Optimized application speed and scalability, reducing load times by 25%.",
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>Experience</h1>
                    </div>
                    <div className="education-list">
                        {experiences.map((exp, index) => (
                            <div key={index} className="education-item mb-4" data-tilt>
                                <div className="edu-left w-100">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <div>
                                            <h3>
                                                {exp.title} <span className="edu-badge">{exp.type}</span>
                                            </h3>
                                            <div className="edu-institute">{exp.company}</div>
                                            <p className="text-secondary mt-1 mb-2" style={{ fontSize: "0.9rem" }}>
                                                {exp.period}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                                        <p className="mb-2">
                                            <strong>{exp.role}</strong>
                                        </p>
                                        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                            {exp.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
