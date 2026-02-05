export default function Skills() {
    const skillCategories = [
        {
            title: "Backend & Core",
            icon: "fa-server",
            skills: [
                "Python", "Django", "Flask", "REST APIs", "SQL", "SQLite", "C Language", "Data Structures", "OOP"
            ],
        },
        {
            title: "Frontend",
            icon: "fa-code",
            skills: [
                "React.js", "JavaScript", "HTML5", "CSS", "Bootstrap", "JSON"
            ],
        },
        {
            title: "Tools & Concepts",
            icon: "fa-cloud",
            skills: [
                "AWS", "Git", "GitHub", "Linux", "Networking", "AIML", "Problem Solving", "Payment Gateways", "n8n", "Webhooks", "Automation", "LLM Integration"
            ],
        },
    ];

    return (
        <section id="skills">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>Skills & Tools</h1>
                    </div>

                    {skillCategories.map((cat, index) => (
                        <div key={index} className="skill-category mb-5">
                            <h4 className="mb-4 text-center text-accent">
                                <i className={`fa-solid ${cat.icon} me-2`}></i>
                                {cat.title}
                            </h4>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                {cat.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
