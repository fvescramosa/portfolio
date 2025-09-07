import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skills({ id = "skills" }) {

    return (
        <section id={id} className="py-16">
            <div className="content-wrap">
                <h2>Skills</h2>
                <p>Core technologies and tools I use in projects.</p>

                {/* Tailwind only for grid layout & gaps */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((cat) => (
                        <SkillCard key={cat.id} title={cat.title} items={cat.items} />
                    ))}
                </div>
            </div>
        </section>
    );
}