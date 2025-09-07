import { skillsRings } from "../data/skillsRings.js";

export default function SkillsRings({ id = "skills" }) {
    return (
        <section id={id}>
            <div className="content-wrap">
                <h2>Skills</h2>

                {/* Tailwind only for layout */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillsRings.map((s) => (
                        <div key={s.label} className="ring-block">
                            <div
                                className="ring"
                                style={{ ["--val"]: s.value, ["--accent"]: s.color }}
                                data-pct={`${s.value}%`}
                                role="img"
                                aria-label={`${s.label} ${s.value} percent`}
                            />
                            <div className="ring-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}