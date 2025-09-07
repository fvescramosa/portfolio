import SkillsRings from "./SkillsRings";
import ExperienceTimeline from "./ExperienceTimeline";

export default function SkillsAndExperience() {
    return (
        <section className="py-16">
            <div className="content-wrap two-col">
                <div><SkillsRings /></div>
                <div><ExperienceTimeline heading="Experience" /></div>
            </div>
        </section>
    );
}