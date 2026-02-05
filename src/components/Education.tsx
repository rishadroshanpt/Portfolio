export default function Education() {
    const education = [
        {
            degree: "Diploma In Computer Engineering",
            type: "Diploma",
            institute: "AKNM Govt. Polytechnic College Thirurangadi",
            years: "2021 — 2024",
        },
        {
            degree: "Computer Science & IT",
            type: "VHSE",
            institute: "GVHSS Nellikuth",
            years: "2019 — 2021",
        },
    ];

    return (
        <section id="education">
            <div className="content">
                <div className="container">
                    <div className="section-title">
                        <h1>Education</h1>
                    </div>
                    <div className="education-list">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item" data-tilt>
                                <div className="edu-left">
                                    <h3>
                                        {edu.degree} <span className="edu-badge">{edu.type}</span>
                                    </h3>
                                    <div className="edu-institute">{edu.institute}</div>
                                </div>
                                <div className="edu-right">
                                    <div className="edu-years">{edu.years}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
