import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Waappa - WhatsApp Automation",
            description: "A powerful WhatsApp automation hub enabling **bulk messaging** to thousands of groups without standard limitations. Features include advanced **message scheduling** and mass distribution. Architected the entire backend using **n8n** and **Supabase**.",
            image: "/images/waappa.png",
            demo: "https://www.waappa.com",
        },
        {
            title: "Taste Tribe",
            description: "A community platform for foodies to share and discover recipes. Features a modern **Gourmet Dark** theme, **glassmorphism** navigation, and responsive design for a premium browsing experience.",
            image: "/images/tastetribe.png",
            code: "https://github.com/rishadroshanpt/taste-tribe",
        },
        {
            title: "Expense Tracker",
            description: "A comprehensive **full-stack** financial tool featuring secure **JWT authentication**, real-time data persistence with **Supabase**, and dynamic analytics using **Recharts**. Built for a seamless, mobile-responsive experience.",
            image: "/images/expenseTracker.png",
            code: "https://github.com/rishadroshanpt/expenseTracker",
            demo: "https://roshans-expense-tracker.vercel.app/",
        },
        {
            title: "Pawfect",
            description: "E-commerce platform for pet supplies. Features include admin inventory management, user authentication, and secure checkout flow.",
            image: "/images/pawfect.png",
            code: "https://github.com/rishadroshanpt/pawfect",
        },
    ];

    const renderDescription = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <section id="pro">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>Featured Projects</h1>
                    </div>
                    <div className="project-content">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card" data-tilt>
                                <div style={{ position: "relative", width: "100%", height: "240px" }}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="border-bottom"
                                    />
                                </div>
                                <div className="project-body">
                                    <h5>{project.title}</h5>
                                    <p className="description">{renderDescription(project.description)}</p>
                                    <div className="actions">
                                        {project.code && (
                                            <a className="btn btn-outline btn-sm me-2" href={project.code} target="_blank">Code</a>
                                        )}
                                        {project.demo && (
                                            <a className="btn btn-primary btn-sm" href={project.demo} target="_blank">Live Demo</a>
                                        )}
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
