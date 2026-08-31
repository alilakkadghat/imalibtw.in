import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { projectsData } from "@/data/projectsData";
import SEO, { SITE_URL, DEFAULT_OG_IMAGE } from "@/components/SEO/SEO";
import FadeIn from "../ui/FadeIn";

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24">
        <SEO
          title="Project Not Found | Aliasgar Lakkadghat"
          description="The requested case study does not exist or has been moved."
          canonicalUrl={`${SITE_URL}/projects`}
        />
        <h1 className="text-3xl font-black font-mono uppercase mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested case study does not exist or has been moved.</p>
        <Link
          to="/"
          className="border-3 border-foreground bg-card text-foreground font-mono text-sm font-bold uppercase px-6 py-3 shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background transition-all"
        >
          Return to Overview
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;
  const projectImage = project.image ? `${SITE_URL}${project.image}` : DEFAULT_OG_IMAGE;

  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": `${SITE_URL}/#projects`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": project.title,
          "item": projectUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "headline": `${project.title} — ${project.subtitle}`,
      "description": project.homepageDescription,
      "url": projectUrl,
      "image": projectImage,
      "author": {
        "@type": "Person",
        "name": "Aliasgar Lakkadghat",
        "url": `${SITE_URL}/`
      },
      "keywords": project.stack.join(", ")
    }
  ];

  return (
    <article className="pt-24 pb-28 min-h-screen w-full bg-background text-foreground">
      <SEO
        title={`${project.title} — Case Study | Aliasgar Lakkadghat`}
        description={project.homepageDescription}
        canonicalUrl={projectUrl}
        ogType="article"
        ogImage={projectImage}
        schema={projectSchema}
      />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Back Link */}
        <FadeIn>
          <div className="mb-10">
            <button
              onClick={() => navigate("/#projects")}
              className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="p-1 border-2 border-foreground bg-card group-hover:bg-foreground group-hover:text-background transition-colors shadow-[2px_2px_0px_0px_var(--foreground)]">
                <FiArrowLeft className="size-4" />
              </span>
              <span>Back to Overview</span>
            </button>
          </div>
        </FadeIn>

        {/* Header Title & Subtitle */}
        <FadeIn delay={0.1}>
          <header className="border-b-4 border-foreground pb-8 mb-10">
            <span className="font-mono text-xs font-black uppercase tracking-widest px-2.5 py-1 bg-foreground/10 border-2 border-foreground inline-block mb-4">
              Engineering Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4 uppercase">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground font-medium font-mono">
              {project.subtitle}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t-2 border-dashed border-foreground/20 font-mono text-xs sm:text-sm">
              <div className="bg-card border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1 font-bold">Role</div>
                <div className="font-black text-foreground">{project.role}</div>
              </div>
              <div className="bg-card border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1 font-bold">Year</div>
                <div className="font-black text-foreground">{project.year}</div>
              </div>
              <div className="bg-card border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1 font-bold">Status</div>
                <div className="font-black text-foreground">{project.status}</div>
              </div>
            </div>

            {/* External Links */}
            {(project.demoLink || project.githubLink) && (
              <div className="flex flex-wrap gap-4 mt-6 font-mono text-xs sm:text-sm">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground text-background px-4 py-2 font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--foreground)] transition-all"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="size-4" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground bg-card text-foreground px-4 py-2 font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--foreground)] transition-all"
                  >
                    <FiGithub className="size-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            )}
          </header>
        </FadeIn>

        {/* Large Visual / Architecture Showcase Frame */}
        <FadeIn delay={0.15}>
          <div className="border-4 border-foreground bg-card shadow-[8px_8px_0px_0px_var(--foreground)] mb-14 overflow-hidden">
            <div className="flex items-center justify-between bg-foreground text-background px-4 py-2.5 font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border border-background bg-background" />
                <span className="w-2.5 h-2.5 rounded-full border border-background bg-background/50" />
                <span className="w-2.5 h-2.5 rounded-full border border-background bg-transparent" />
              </div>
              <span className="font-bold tracking-wider uppercase opacity-90">
                {project.slug}.sys_spec
              </span>
              <span className="text-[10px] font-bold uppercase opacity-75">v1.0</span>
            </div>

            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} - Architecture and Interface Screenshot`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[480px] object-cover object-top border-b-2 border-foreground"
              />
            ) : (
              <div className="p-8 sm:p-12 bg-foreground/5 flex flex-col items-center justify-center text-center min-h-[220px] sm:min-h-[280px]">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">
                  System Architecture & Overview
                </div>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground/90 max-w-lg">
                  {project.title}
                </div>
                <div className="mt-4 font-mono text-xs font-bold text-muted-foreground border-2 border-dashed border-foreground/30 px-3 py-1.5 bg-background">
                  {project.stackDisplay}
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Tech Stack Bar */}
        <FadeIn delay={0.2}>
          <section className="mb-14">
            <h2 className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
              Technologies & Infrastructure
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs sm:text-sm font-bold border-2 border-foreground bg-card px-3 py-1.5 shadow-[2px_2px_0px_0px_var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Editorial Body Content */}
        <div className="space-y-16">
          
          {/* Section 1: Introduction */}
          <FadeIn delay={0.25}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm font-black text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground">01</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-mono">
                  Introduction
                </h2>
              </div>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
                {project.introduction.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Section 2: What It Does */}
          <FadeIn delay={0.3}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm font-black text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground">02</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-mono">
                  What It Does
                </h2>
              </div>
              
              <ul className="space-y-4 pt-2">
                {project.whatItDoes.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 border-2 border-foreground bg-card shadow-[3px_3px_0px_0px_var(--foreground)]"
                  >
                    <div className="mt-1 shrink-0">
                      <FiCheckCircle className="size-4 sm:size-5 text-foreground" />
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed">
                      <span className="font-black text-foreground block sm:inline mr-2 font-mono uppercase tracking-wide text-xs sm:text-sm">
                        {item.title} —
                      </span>
                      <span className="text-muted-foreground font-medium">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          {/* Section 3: The Part That Matters */}
          <FadeIn delay={0.35}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm font-black text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground">03</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-mono">
                  The Part That Matters
                </h2>
              </div>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
                {project.thePartThatMatters.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Memorable Engineering Closing Statement */}
          <FadeIn delay={0.4}>
            <div className="border-4 border-foreground bg-foreground text-background p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)] my-12">
              <div className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-70 mb-3 select-none">
                Engineering Principle
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-black leading-snug tracking-tight">
                "{project.closingStatement}"
              </blockquote>
            </div>
          </FadeIn>

        </div>

        {/* Bottom Pagination / Case Studies Navigation */}
        <FadeIn delay={0.45}>
          <nav className="mt-20 pt-10 border-t-4 border-foreground grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="group block p-6 border-3 border-foreground bg-card hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_var(--foreground)] text-left"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/70 mb-1 font-bold">
                  ← Previous Case Study
                </div>
                <div className="text-lg sm:text-xl font-black uppercase">
                  {prevProject.title}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group block p-6 border-3 border-foreground bg-card hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_var(--foreground)] text-left sm:text-right"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/70 mb-1 font-bold">
                  Next Case Study →
                </div>
                <div className="text-lg sm:text-xl font-black uppercase">
                  {nextProject.title}
                </div>
              </Link>
            )}
          </nav>
        </FadeIn>

      </div>
    </article>
  );
}
