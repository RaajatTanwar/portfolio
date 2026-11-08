import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Globe2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectArtwork } from "@/components/project-artwork";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Rajat Tanwar`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main" className="case-study-page">
      <section className="case-hero" data-visual={project.visual}>
        <div className="container">
          <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <p className="eyebrow"><span className="eyebrow-num">{project.visual === "research" ? "01" : project.visual === "galaxy" ? "02" : project.visual === "receipts" ? "03" : "04"}</span> {project.category}</p>
              <p className="case-eyebrow">{project.eyebrow}</p>
              <h1>{project.title}<span className="hero-period">.</span></h1>
              <p className="case-intro">{project.summary}</p>
              <div className="case-actions">
                {project.github && <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">View source <Github size={16} /></a>}
                {project.live && <a className="button button-secondary" href={project.live} target="_blank" rel="noreferrer">Live project <Globe2 size={16} /></a>}
              </div>
            </div>
            <ProjectArtwork project={project} large />
          </div>
        </div>
      </section>

      <section className="case-content-section">
        <div className="container case-content-grid">
          <aside className="case-sidebar" data-visual={project.visual} style={{ ["--pc" as string]: `var(--${project.visual === "galaxy" ? "cyan" : project.visual === "receipts" ? "hot" : project.visual === "uniwell" ? "green" : "accent"})`, ["--tg" as string]: `var(--${project.visual === "galaxy" ? "cyan" : project.visual === "receipts" ? "hot" : project.visual === "uniwell" ? "green" : "accent"})` } as React.CSSProperties}>
            <p className="eyebrow"><span /> PROJECT SNAPSHOT</p>
            <div className="case-sidebar-block"><small>FOCUS</small><strong>{project.category}</strong></div>
            <div className="case-sidebar-block"><small>TECHNOLOGIES</small><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            {project.metric && <div className="metric-card"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></div>}
          </aside>
          <div className="case-main-content">
            <section className="case-content-block">
              <p className="eyebrow">01 / OVERVIEW</p>
              <h2>What it is.</h2>
              <p>{project.description}</p>
            </section>
            <section className="case-content-block">
              <p className="eyebrow">02 / THE PROBLEM</p>
              <h2>The challenge.</h2>
              <p>{project.problem}</p>
            </section>
            <section className="case-content-block">
              <p className="eyebrow">03 / THE APPROACH</p>
              <h2>How I approached it.</h2>
              <p>{project.approach}</p>
              <ul className="case-bullet-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section className="case-content-block">
              <p className="eyebrow">04 / SYSTEM DESIGN</p>
              <h2>Under the hood.</h2>
              <div className="architecture-list">
                {project.architecture.map((item, index) => (
                  <div className="architecture-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>
                ))}
              </div>
            </section>
            <section className="case-outcome">
              <p className="eyebrow">05 / OUTCOME</p>
              <h2>What it demonstrates.</h2>
              <p>{project.outcome}</p>
              <div className="case-actions">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link">Explore repository <ArrowUpRight size={15} /></a>}
                {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link">Open live project <ArrowUpRight size={15} /></a>}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="container next-project-link">
        <Link href="/#work"><ArrowLeft size={15} /> Explore more projects</Link>
      </section>
    </main>
  );
}
