export default function ProjectCard({ title, blurb, tags = [], image, link = '#' }) {
    return (
        <article className="card">
            <a href={link} className="card__media" target="_blank" rel="noreferrer">
                <img src={image} alt="" loading="lazy" />
            </a>
            <div className="card__body">
                <h4 className="card__title">{title}</h4>
                <p className="card__blurb">{blurb}</p>
                <div className="card__tags">
                    {tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}