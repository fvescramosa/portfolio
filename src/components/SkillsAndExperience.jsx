import SkillsRings from "./SkillsRings";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillCard from "./SkillCard";
import Skills from "./Skills";

export default function SkillsAndExperience() {
    return (
        <section className="py-16">
            <div className="content-wrap two-col">
                <div><SkillsRings /></div>
                <div><ExperienceTimeline heading="Career" /></div>
            </div>
        </section>
    );
}