import ExperienceCard from "./ExperienceCard";
import FadeIn from "../ui/FadeIn";

const experiences = [
    {
        role: "Full-Stack Developer (Contract)",
        company: "Temasek Polytechnic",
        duration: "2026 April - Present",
        description: "Building an AI-powered agent that automates legal onboarding for migrant workers. The agent conducts dynamic AI-powered interviews to gather necessary information and automatically generates affidavits, streamlining the onboarding process and reducing manual effort.",
        technologies: ["OpenClaw", "Ollama"],
    },
    {
        role: "Full-Stack Developer Intern",
        company: "Temasek Polytechnic (in collab. with Bizibody Tech)",
        duration: "2025 Sep - 2026 March",
        description: "Developed 'JurisAI', a legal-tech platform enabling workspaces for document management and intelligent querying. Integrated a RAG-based chatbot for workspace-specific Q&A and implemented a high-performance Legal Search engine indexing over 10,000 cases using RAGFlow.",
        technologies: ["Django", "Docker", "PostgreSQL", "RAGFlow", "HTML/CSS", "JavaScript", "Python"],
        projectLink: "https://jurisai.tech"
    },
];

export default function Experience() {
    return (
        <section id="experience" className="md:py-24 py-12 w-full border-b-4 border-foreground">
            <div className="max-w-4xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                            My Path
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">Experience</h2>
                        <div className="w-16 h-2 bg-foreground mx-auto mt-3 mb-4" />
                        <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                            My professional journey and the technical milestones I've achieved along the way.
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
                                        <ExperienceCard 
                                            {...exp}
                                        />
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
