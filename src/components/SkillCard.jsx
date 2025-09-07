import SkillItem from "./SkillItem";

export default function SkillCard({ title, items = [] }) {
    return (
        <article className="skillcard">
            <h3 className="skillcard__title">{title}</h3>
            <div className="skillcard__list">
                {items.map((s) => (
                    <SkillItem key={s.name} name={s.name} level={s.level} />
                ))}
            </div>
        </article>
    );
}
