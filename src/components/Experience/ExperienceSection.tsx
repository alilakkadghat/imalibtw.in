import ExperienceCard from "./ExperienceCard";
import FadeIn from "../ui/FadeIn";

const experiences = [
  {
    role: "Technical Lead",
    company: "MPSTME ACM",
    companyLink: "https://tech-hub.mpstmeacm.com/",
    duration: "Jul. 2025 – Present",
    location: "Mumbai, India",
    description:
      "Led the design, development, deployment, and maintenance of production-grade web platforms supporting MPSTME ACM operations and flagship events, serving 500+ students and 50+ committee members.",
    highlights: [
      "MerchID: Built a QR-powered digital identity platform using Next.js, FastAPI, and PostgreSQL with role-based member management and batch QR generation.",
      "Engineered high-throughput backend services with optimized PostgreSQL schemas, achieving <50ms query latency, supporting 100+ concurrent users, and maintaining 99.95% uptime.",
      "ReCode: Led frontend architecture of the official convergence platform with lazy loading and SEO optimizations, reducing load times by 40% (Lighthouse score 92+).",
    ],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "WebSockets", "Docker"],
    projectLink: "https://tech-hub.mpstmeacm.com/",
  },
  {
    role: "Full-Stack & 3D Web Developer",
    company: "Freelance Software Engineer",
    companyLink: "https://webverse.imalibtw.in/",
    duration: "Jan. 2026 – Present",
    location: "Remote / Global",
    description:
      "Engineered high-performance WebGL 3D browser applications and interactive web systems with smooth 60 FPS gameplay.",
    highlights: [
      "Developed custom Three.js rendering pipelines with procedural animations, collision detection, and asset streaming optimization.",
      "Implemented hybrid keyboard, mouse, and native PS5 DualSense controller support using the HTML5 Gamepad API alongside 6 interactive puzzle systems.",
    ],
    technologies: ["Three.js", "WebGL", "JavaScript", "Vite", "HTML5 Gamepad API"],
    projectLink: "https://webverse.imalibtw.in/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="md:py-24 py-16 w-full border-b-4 border-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Career Milestones
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              Work Experience
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3 mb-4" />
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Professional engineering leadership, production platforms, and technical initiatives.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Layout with Single Left Vertical Robust Line */}
        <div className="relative max-w-3xl mx-auto">
          {/* Continuous Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="relative flex items-start">
                  {/* Robust Solid Timeline Circle Marker */}
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 top-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />

                  {/* Experience Card Wrapper */}
                  <div className="w-full ml-10 sm:ml-14">
                    <ExperienceCard {...exp} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
