import { experience } from "../data/experience";

export default function ExperienceTimeline({
   id = "experience",
   heading = "Experience" // change this to any label you like
}) {
    return (
        <section id={id}>
            <h2>
                {heading} <span className="u-muted">Mastery</span>
            </h2>

            <div className="timeline">
                {experience.map((item, idx) => (
                    <div className="timeline-item" key={idx}>
                        <div className="timeline-dot" aria-hidden="true" />
                        <div className="timeline-content">
                            <h4 className="timeline-period">{item.period}</h4>
                            <h3 className="timeline-title">{item.title}</h3>
                            <ul className="timeline-list">
                                {item.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}