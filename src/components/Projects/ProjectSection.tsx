import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="md:py-24 py-16 w-full border-b-4 border-foreground">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              My Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              A selection of projects where I've turned complex problems into elegant solutions.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
