import { ArrowDown, ArrowUpRight, Cpu, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { DomainSigil } from "@/components/domain-sigil";
import { InkSplash } from "@/components/ink-splash";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, experiences, projects, skills, education } from "@/data/portfolio";

const tickerA = ["Agentic AI", "Machine Learning", "LLM Workflows", "Computer Vision", "RAG Pipelines", "Full-Stack Products"];
const tickerB = ["呪力", "術式", "領域展開", "結界", "黒閃", "人工知能"];
const skillKanji = ["術", "式", "力", "具"];
const SPIRAL = Array.from({ length: 181 }, (_, i) => {
  const t = i / 180;
  const a = t * Math.PI * 7;
  const r = 4 + t * 92;
  return `${i === 0 ? "M" : "L"}${(100 + r * Math.cos(a)).toFixed(1)} ${(100 + r * Math.sin(a)).toFixed(1)}`;
}).join(" ");

function Tape({ items, className }: { items: string[]; className: string }) {
  const track = (
    <span className="tape-track">
      {items.map((item) => (
        <span key={item} style={{ display: "contents" }}><span>{item}</span><i>◆</i></span>
      ))}
    </span>
  );
  return <div className={`tape ${className}`} aria-hidden="true">{track}{track}{track}{track}</div>;
}

export default function HomePage() {
  const current = experiences[0];
  const training = experiences[1];
  const degree = education[0];

  return (
    <main id="main">
      <section className="hero-section" id="top">
        <div className="container">
          <div className="hero-card">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-chips">
                  <span className="pill pill-dark"><Cpu size={15} /> AI / ML Engineer</span>
                  <span className="pill pill-light"><MapPin size={14} /> {profile.location}</span>
                </div>
                <h1>Rajat<br />Tanwar<span className="hero-period">.</span></h1>
                <span className="hero-statement">Building intelligent systems. <em>Making them useful.</em></span>
                <dl className="spec-row">
                  <dt>Role:</dt><dd>{profile.headline}</dd>
                  <dt>Focus:</dt><dd>AI engineering · Machine learning · Product building</dd>
                </dl>
                <p className="hero-description">I turn complex ideas into practical AI products — from agentic workflows and machine learning systems to thoughtful full-stack applications.</p>
                <div className="hero-actions">
                  <a href="#work" className="button button-primary">Explore my work <span className="arrow-dot"><ArrowUpRight size={18} /></span></a>
                  <a href={`mailto:${profile.email}`} className="button button-secondary">Get in touch <Mail size={17} /></a>
                </div>
                <div className="hero-socials">
                  <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
                  <span><span className="location-dot" /> Open to opportunities</span>
                </div>
              </div>

              <div className="hero-art-wrap">
                <div className="hero-art">
                  <InkSplash seed={5} className="ink-1" />
                  <InkSplash seed={11} className="ink-2" />
                  <div className="hero-visual"><DomainSigil /></div>
                  <div className="hero-art-corner"><span className="arrow-dot"><ArrowDown size={18} /></span></div>
                  <div className="hero-art-stats">
                    <div className="stat"><strong>0{projects.length}</strong><small>Projects</small></div>
                    <div className="stat"><strong>0{experiences.length}</strong><small>Experiences</small></div>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tape-wrap">
          <Tape items={tickerB} className="tape-b" />
          <Tape items={tickerA} className="tape-a" />
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container">
          <SectionHeading num="01" kanji="術師" eyebrow="A LITTLE ABOUT ME" title="Curiosity meets execution." />
          <div className="about-top">
            <div className="reveal">
              <p className="about-lead">I enjoy working where <span>AI meets real-world engineering.</span></p>
              <div className="about-copy">
                <p>{profile.summary}</p>
                <p>From experimenting with computer vision models to orchestrating multi-agent research workflows, I like understanding a problem end to end — then building a solution that is useful, explainable, and ready to run.</p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">More about my work <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="emblem reveal" aria-hidden="true">
              <span className="emblem-ring" /><span className="emblem-ring r2" />
              <span className="emblem-kanji">術</span>
              <InkSplash seed={9} />
              <span className="pill pill-dark emblem-tag">Applied AI</span>
            </div>
          </div>

          <div className="spec-grid">
            <div className="spec-card reveal">
              <h3>Biographical information</h3>
              <ul>
                <li><b>NAME</b>: {profile.name}</li>
                <li><b>BASE</b>: {profile.location}</li>
                <li><b>ROLE</b>: {profile.headline}</li>
                <li><b>EMAIL</b>: {profile.email}</li>
              </ul>
            </div>
            <div className="spec-card reveal">
              <h3>Personal description</h3>
              <ul>
                <li><b>FOCUS 01</b>: Applied AI — models, LLMs &amp; agents</li>
                <li><b>FOCUS 02</b>: Reliable systems — APIs, data &amp; evaluation</li>
                <li><b>FOCUS 03</b>: Product engineering — from interface to deployment</li>
              </ul>
            </div>
            <div className="spec-card reveal">
              <h3>Professional status</h3>
              <ul>
                <li><b>CURRENT</b>: {current.role}, {current.company}</li>
                <li><b>TRAINING</b>: {training.company} ({training.period})</li>
                <li><b>EDUCATION</b>: {degree.qualification.replace("B.Tech · ", "B.Tech, ")}</li>
                <li><b>GRADE</b>: {degree.detail.split("·")[1]?.trim()}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <SectionHeading num="02" kanji="任務" eyebrow="WHERE I'VE LEARNED & BUILT" title="Experience." note="A mix of industry exposure, practical training, and hands-on product building." />
          <div className="experience-shell">
            <span className="life-label" aria-hidden="true">Experience log</span>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <article className="experience-item reveal" key={experience.company}>
                  <div className="badge" aria-hidden="true">{index === 0 ? "F" : "IBM"}<small>0{index + 1}</small></div>
                  <div className="experience-main">
                    <div className="experience-heading">
                      <div>
                        <h3>{experience.company}</h3>
                        <p>{experience.role}</p>
                      </div>
                      <span className="experience-period pill pill-dark">{experience.period}</span>
                    </div>
                    <p className="experience-description">{experience.description}</p>
                    <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    <a href={experience.link} target="_blank" rel="noreferrer" className="subtle-link">Visit organisation <ArrowUpRight size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <SectionHeading num="03" kanji="領域" eyebrow="SELECTED WORK" title="Things I've built." note="A few projects that reflect how I think, experiment, and engineer." />
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={`0${index + 1}`} />)}
          </div>
          <div className="projects-footnote"><span>MORE EXPERIMENTS & CODE</span><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">Explore GitHub <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading num="04" kanji="術式" eyebrow="MY TOOLKIT" title="Tools I work with." note="A practical toolkit across AI, backend systems, frontend development, and data." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-group reveal" key={group.group}>
                <span className="skill-group-kanji" aria-hidden="true">{skillKanji[index]}</span>
                <div className="skill-group-head"><span>0{index + 1}</span><h3>{group.group}</h3></div>
                <div className="tag-list">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="education-row reveal">
            <div className="education-title"><p className="eyebrow"><span /> EDUCATION</p><h3>Learning by building.</h3></div>
            <div className="education-list">
              {education.map((item) => (
                <div className="education-item" key={item.institution}>
                  <div><strong>{item.institution}</strong><span>{item.qualification}</span></div>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-panel reveal">
            <InkSplash seed={21} />
            <span className="contact-kanji" aria-hidden="true">依頼</span>
            <svg className="contact-swirl" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" aria-hidden="true"><path d={SPIRAL} /></svg>
            <p className="eyebrow"><span className="eyebrow-num">05</span> HAVE A PROJECT IN MIND?</p>
            <h2>Let&apos;s build something<br /><span>meaningful.</span></h2>
            <p className="contact-description">Interested in AI engineering, machine learning, or building useful products? I&apos;d be glad to connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <span className="arrow-dot"><ArrowUpRight size={18} /></span></a>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
