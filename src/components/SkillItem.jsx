export default function SkillItem({ name, level = 0 }) {
    const safe = Math.max(0, Math.min(level, 100)); // clamp 0-100
    const tier = safe < 50 ? "beginner" : safe < 80 ? "intermediate" : "advanced";

    return (
        <div className="skill">

                <span className="skill__name badge">{name}</span>

        </div>
    );
}