import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NavigationBar from "./components/NavBar/NavigationBar";
import Home from "./components/Home/HomeSection";
import About from "./components/About/AboutSection";
import Projects from "./components/Projects/ProjectSection";
import Experience from "./components/Experience/ExperienceSection";
import Skills from "./components/Skills/SkillsSection";
import Roadmap from "./components/Roadmap/RoadmapSection";
import Contact from "./components/Contact/ContactSection";
import ProjectCaseStudy from "./components/Projects/ProjectCaseStudy";
import TerminalModal from "./components/Terminal/TerminalModal";

function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Roadmap />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <TerminalModal />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
