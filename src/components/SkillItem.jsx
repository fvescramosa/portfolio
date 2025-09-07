export default function SkillItem({ name, level = 0 }) {
    const safe = Math.max(0, Math.min(level, 100)); // clamp 0-100
    const tier = safe < 50 ? "beginner" : safe < 80 ? "intermediate" : "advanced";

    return (
        <div className="skill">
            <div className="skill__row">
                <span className="skill__name">{name}</span>
                <span className="skill__value">{safe}%</span>
            </div>
            <div className="skill__meter" role="progressbar" aria-valuenow={safe} aria-valuemin="0" aria-valuemax="100">
                <span className="skill__bar" data-tier={tier} style={{ width: `${safe}%` }} />
            </div>
        </div>
    );
}