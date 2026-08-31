import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      {/* About Me Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              About Me
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3" />
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-4 text-left text-foreground bg-card border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg sm:text-xl leading-relaxed font-bold text-foreground">
                AI and Data Engineer who enjoys turning ideas into systems that actually work.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                I build across the stack, from agentic workflows, LLM and RAG pipelines to data platforms, backend services, and real-time applications. I like understanding what happens beyond the demo — how systems handle real users, changing data, failures, and scale.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Most of my projects start with a simple question: how can I build this better? That curiosity has taken me from building internal tools for student communities to experimenting with AI systems and end-to-end data pipelines.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                I'm currently focused on getting better at building reliable, scalable intelligent systems — and shipping more of them.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              {/* Picture Frame Wrapper */}
              <div className="relative w-80 h-96 bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_var(--foreground)] p-3 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Aliasgar Lakkadghat - AI & Data Engineer" 
                    width="320"
                    height="384"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
