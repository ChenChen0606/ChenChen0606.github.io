import TagRow from './TagRow';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project" id={project.id}>
      <span className="project-num mono">{project.num}</span>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TagRow tags={project.tags} />
        {project.liveUrl && (
          <a className="project-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Play it live ↗
          </a>
        )}
      </div>
      <span className="project-tag">{project.category}</span>
    </article>
  );
}
