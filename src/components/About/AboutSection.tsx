import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2019 — 2020",
        title: "Medicine in Myanmar",
        institution: {
            name: "University of Medicine, Mandalay",
            link: "https://www.ummdy.gov.mm/",
            tooltipDescription: "One of the prestigious medical universities in Myanmar, known for producing skilled healthcare professionals."
        },
        degree: "Bachelor of Medicine (M.B.B.S.)",
        description: "Began pursuing medicine, a path I thought was my calling."
    },
    {
        year: "2021 — 2022",
        title: "Self-Taught Developer",
        degree: "The Pivot: From Medicine to Code",
        description: "When the pandemic and political turmoil halted my studies, I taught myself web development through online courses — mastering HTML, CSS, JavaScript, and React."
    },
    {
        year: "2023 — 2026",
        title: "Information Technology",
        institution: {
            name: "Temasek Polytechnic",
            link: "https://www.tp.edu.sg/home.html",
            tooltipDescription: "A leading polytechnic in Singapore, renowned for its industry-focused curriculum and strong emphasis on practical skills."
        },
        degree: "Diploma in Information Technology",
        achievements: {
            honors: [
                {
                    name: "Diploma with Merit",
                    years: "Graduating Class",
                    tooltipDescription: "An institutional honor awarded to the top 10% of the graduating cohort, recognizing exceptional academic excellence and outstanding performance throughout the diploma program."
                },
                {
                    name: "Director's List",
                    years: "Year 1 & 2",
                    tooltipDescription: "An academic honor awarded to the top 10% of the diploma cohort each year, recognizing students with outstanding academic performance."
                }
            ]
        },
        description: "Built a strong foundation in software engineering while consistently ranking among the top students."
    }
];

const quickStats = [
    { value: "1~", label: "Years of Experience", accent: "text-foreground" },
    { value: "3×", label: "Academic Honors", accent: "text-foreground" },
    { value: "4+", label: "Years Coding", accent: "text-foreground" },
];

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
            <div className="flex flex-col gap-6 text-left text-foreground bg-card border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg leading-relaxed font-medium">
                Full-Stack Developer specializing in <span className="underline underline-offset-4 decoration-2 decoration-foreground font-bold">React, Next.js, Node.js</span>. I turn ideas into scalable, production-ready web applications.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                From medical school in Myanmar to self-taught developer to Singapore's top IT students — I thrive on learning, building, and shipping.
              </p>

              {/* Quick Stats - Updated with Neubrutalist boxes */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-6 border-t-4 border-foreground">
                {quickStats.map((stat, i) => (
                  <div key={i} className="text-center bg-background border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]">
                    <div className={`text-xl sm:text-2xl font-black ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-tight text-muted-foreground mt-1.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              {/* Picture Frame Wrapper */}
              <div className="relative w-80 h-96 bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_var(--foreground)] p-3 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden">
                  <img 
                    src="/profile.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education Journey Section */}
      <div className="max-w-4xl mx-auto mt-28 px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              My Journey
            </span>
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase">Education & Growth</h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-md sm:text-lg max-w-2xl mx-auto font-medium">
              An unconventional path — from medicine to code, shaped by resilience and curiosity.
            </p>
          </div>
        </FadeIn>
        
        {/* Timeline (Refactored to be thick, solid, and left-aligned for maximum card width) */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />
          
          <div className="space-y-10 md:space-y-14">
            {educationJourney.map((edu, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.2}
                direction="right"
              >
                <div className="relative flex items-start">
                  {/* Robust Black Circle Marker */}
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 mt-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />
                  
                  <div className="w-full ml-10 sm:ml-14">
                    <EducationCard {...edu} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
