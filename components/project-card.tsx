import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectArtwork } from "@/components/project-artwork";

export function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="project-card reveal" data-visual={project.visual}>
      <Link href={`/work/${project.slug}`} className="project-card-visual-link" aria-label={`View ${project.title} case study`}>
        <ProjectArtwork project={project} />
        <span className="art-corner" aria-hidden="true"><ArrowUpRight size={20} /></span>
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{index} / 04</span>
          <span className="pill">{project.category}</span>
        </div>
        <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="skill-list-label">Core stack</div>
        <ol className="skill-list" style={{ listStyle: "none", margin: "10px 0 0", padding: 0, border: 0 }}>
          {project.stack.slice(0, 3).map((item, i) => (
            <li key={item}><span>{i + 1}</span>{item}</li>
          ))}
        </ol>
        <div className="project-card-actions">
          <Link href={`/work/${project.slug}`} className="text-link">Explore case study <ArrowUpRight size={15} /></Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`} className="icon-link"><Github size={18} /></a>
          )}
        </div>
      </div>
    </article>
  );
}
