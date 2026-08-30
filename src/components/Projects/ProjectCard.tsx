import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/projectsData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block w-full bg-card border-3 border-foreground text-foreground p-6 sm:p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10">
        
        {/* Left Column: Title + Arrow + Subtitle */}
        <div className="md:w-5/12 shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:underline underline-offset-4 decoration-2">
                {project.title}
              </h3>
              <div className="p-1 border-2 border-foreground bg-background text-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--foreground)]">
                <FiArrowUpRight className="size-5" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-2 font-bold uppercase tracking-wider">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="px-2 py-0.5 border border-foreground/30 bg-foreground/5 font-bold">
              {project.year}
            </span>
            <span>·</span>
            <span className="font-medium">
              {project.status}
            </span>
          </div>
        </div>

        {/* Right Column: Description + Tech Stack */}
        <div className="md:w-7/12 flex flex-col justify-between gap-4 md:border-l-2 md:border-dashed md:border-foreground/20 md:pl-8">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            {project.homepageDescription}
          </p>

          <div className="pt-2 font-mono text-xs font-bold text-foreground/80 tracking-wide">
            {project.stackDisplay}
          </div>
        </div>

      </div>
    </Link>
  );
}
