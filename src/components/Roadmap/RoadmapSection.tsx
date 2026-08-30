import FadeIn from "../ui/FadeIn";

const roadmapPhases = [
  {
    phaseNumber: "01",
    status: "COMPLETED",
    title: "Foundation Building",
    description:
      "Built strong foundations in machine learning, deep learning, and backend engineering through coursework, certifications, and hands-on projects. Focused on understanding core ML concepts while actively building.",
    isCurrent: false,
  },
  {
    phaseNumber: "02",
    status: "CURRENT",
    title: "Systems & Research",
    description:
      "Currently building production AI systems: agentic workflows, LLM pipelines, and applied research in legal AI and healthcare monitoring. Focused on shipping real products.",
    isCurrent: true,
  },
  {
    phaseNumber: "03",
    status: "NEXT",
    title: "Scale & Impact",
    description:
      "Aim to scale AI systems, publish research, and contribute to open-source ecosystems. Building toward global AI engineering or applied research opportunities.",
    isCurrent: false,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="md:py-24 py-16 w-full border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Vision & Trajectory
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-3">
              My Roadmap
            </h2>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              From foundations to scale. A journey in building AI.
            </p>

            {/* Wavy accent squiggle */}
            <div className="flex justify-center mt-3 select-none">
              <svg
                className="w-16 h-3 text-[#ff6633]"
                viewBox="0 0 60 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C6 2 10 2 14 6C18 10 22 10 26 6C30 2 34 2 38 6C42 10 46 10 50 6C54 2 58 2 62 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </FadeIn>

        {/* 3-Column Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {roadmapPhases.map((phase, index) => (
            <FadeIn key={phase.phaseNumber} delay={index * 0.15} className="h-full">
              <div
                className={`relative flex flex-col justify-between h-full p-6 sm:p-8 border-4 border-foreground transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
                  phase.isCurrent
                    ? "bg-[#ff6633] text-black shadow-[8px_8px_0px_0px_var(--foreground)] hover:shadow-[12px_12px_0px_0px_var(--foreground)]"
                    : "bg-card text-foreground shadow-[8px_8px_0px_0px_var(--foreground)] hover:shadow-[12px_12px_0px_0px_var(--foreground)]"
                }`}
              >
                {/* Sparkle badge for the active phase */}
                {phase.isCurrent && (
                  <div
                    className="absolute -top-3.5 -right-3.5 size-7 bg-foreground text-background flex items-center justify-center font-bold text-sm shadow-[2px_2px_0px_0px_var(--foreground)] select-none"
                    title="Active Focus"
                  >
                    ✦
                  </div>
                )}

                <div>
                  {/* Phase Status Badge */}
                  <div className="mb-6">
                    <span
                      className={`inline-block font-mono text-xs font-black px-3 py-1 border-2 select-none uppercase tracking-wider ${
                        phase.isCurrent
                          ? "bg-black text-white border-black"
                          : "bg-foreground text-background border-foreground"
                      }`}
                    >
                      PHASE #{phase.phaseNumber} // {phase.status}
                    </span>
                  </div>

                  {/* Phase Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight mb-4 ${
                      phase.isCurrent ? "text-black" : "text-foreground"
                    }`}
                  >
                    {phase.title}
                  </h3>

                  {/* Phase Description */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed font-medium ${
                      phase.isCurrent ? "text-black/90 font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {phase.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div
                  className={`mt-8 pt-4 border-t-2 border-dashed flex items-center justify-between font-mono text-xs font-bold ${
                    phase.isCurrent ? "border-black/30 text-black/80" : "border-foreground/20 text-muted-foreground"
                  }`}
                >
                  <span>STAGE {phase.phaseNumber} OF 03</span>
                  <span>{phase.isCurrent ? "● IN PROGRESS" : phase.status === "COMPLETED" ? "✓ DONE" : "○ UPCOMING"}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
