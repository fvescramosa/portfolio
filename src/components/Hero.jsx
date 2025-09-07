/**
 * Hero component (documentation only — JSDoc)
 * @param {object} props
 * @param {string} [props.id="home"]             - section anchor id
 * @param {string} props.name                    - main headline
 * @param {string} props.subtitle                - short description under the name
 * @param {string[]} [props.badges=[]]           - list of badges/skills
 * @param {{label:string, href:string}} props.primaryCta   - main button
 * @param {{label:string, href:string}} [props.secondaryCta] - optional button
 * @param {string} props.imageUrl                - hero image url (external or imported)
 */
export default function Hero({
                                 id = "home",
                                 name,
                                 subtitle,
                                 badges = [],
                                 primaryCta,
                                 secondaryCta,
                                 imageUrl,
 }) {
    return (
        <section id={id} className="relative overflow-hidden h-screen">   {/* was: py-16 */}
            {/* Background image */}
            <img
                src={imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 w-full h-full object-cover"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 -z-10 bg-black/35"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto content-wrap px-6 py-16 grid gap-10 md:grid-cols-2 items-center h-full">
                <div>
                    <h1 className="text-4xl font-extrabold md:text-5xl">{name}</h1>
                    <p className="subtitle mt-3 text-slate-300">{subtitle}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {badges.map((b) => (
                            <span key={b} className="badge">
            {b}
          </span>
                        ))}
                    </div>

                    <div className="mt-7 flex gap-3">
                        {primaryCta && (
                            <a href={primaryCta.href} className="rounded-lg bg-yellow-400 px-5 py-3 font-bold text-black">
                                {primaryCta.label}
                            </a>
                        )}
                        {secondaryCta && (
                            <a href={secondaryCta.href} className="rounded-lg border px-5 py-3 font-bold">
                                {secondaryCta.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
}