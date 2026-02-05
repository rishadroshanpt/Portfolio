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
            title: "Pawfect",
            description: "E-commerce platform for pet supplies. Features include admin inventory management, user authentication, and secure checkout flow.",
            image: "/images/pawfect.png",
            code: "https://github.com/rishadroshanpt/pawfect",
            demo: "https://pawfect.pythonanywhere.com",
        },
        {
            title: "Bookmyshow Clone",
            description: "A responsive clone of the BookMyShow movie ticketing platform, focusing on complex layout replication and UI fidelity.",
            image: "/images/bookmyshow.png",
            code: "https://github.com/rishadroshanpt/bookmyshow",
            demo: "https://rishadroshanpt.github.io/bookmyshow/",
        },
        {
            title: "Apple Website Clone",
            description: "Pixel-perfect clone of Apple's website. Demonstrates mastery of responsive design, flexbox/grid, and modern CSS techniques.",
            image: "/images/apple.png",
            code: "https://github.com/rishadroshanpt/apple_clone",
            demo: "https://rishadroshanpt.github.io/apple_clone/",
        },
    ];

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
                                    <p>{project.description}</p>
                                    <div className="actions">
                                        {project.code && (
                                            <a className="btn btn-outline btn-sm me-2" href={project.code} target="_blank">Code</a>
                                        )}
                                        <a className="btn btn-primary btn-sm" href={project.demo} target="_blank">Live Demo</a>
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
