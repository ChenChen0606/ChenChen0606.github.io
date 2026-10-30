import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section id="work">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h2>Five systems, built so far</h2>
        <p>Academic systems and personal practice projects.</p>
      </div>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
