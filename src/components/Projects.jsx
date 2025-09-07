import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects({ id = 'work' }) {
    return (
        <section id={id} className="py-16">
            <div className="content-wrap">
                <h2>Projects</h2>
                <p>Selected work.</p>

                {/* Tailwind only for layout grid & gaps */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
