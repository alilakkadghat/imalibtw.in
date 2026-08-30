import React, { useState, useRef, useEffect } from "react";
import { FiMinimize2, FiMaximize2, FiX } from "react-icons/fi";
import { projectsData } from "@/data/projectsData";
import { getAllBlogs } from "@/lib/blogs";

const ASCII_LOGO = `
  $$$$$$\  $$\       $$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\  $$$$$$$\\ 
 $$  __$$\\ $$ |      \\_$$  _|$$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\
 $$ /  $$ |$$ |        $$ |  $$ /  $$ |$$ /  \\__|$$ /  \\__|$$ /  $$ |$$ |  $$ |
 $$$$$$$$ |$$ |        $$ |  $$$$$$$$ |\\$$$$$$\\  $$ |$$$$\\ $$$$$$$$ |$$$$$$$  |
 $$  __$$ |$$ |        $$ |  $$  __$$ | \\____$$\\ $$ |\\_$$ |$$  __$$ |$$  __$$< 
 $$ |  $$ |$$ |        $$ |  $$ |  $$ |$$\\   $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |
 $$ |  $$ |$$$$$$$$\\ $$$$$$\\ $$ |  $$ |\\$$$$$$  |\\$$$$$$  |$$ |  $$ |$$ |  $$ |
 \\__|  \\__|\\________|\\______|\\__|  \\__| \\______/  \\______/ \\__|  \\__|\\__|  \\__|
`;

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd.trim()]);
    setHistoryIndex(null);

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-4 pl-2">
              <div><span className="text-emerald-300 font-bold">about</span> - Who am I?</div>
              <div><span className="text-emerald-300 font-bold">skills</span> - Tech stack</div>
              <div><span className="text-emerald-300 font-bold">projects</span> - View case studies</div>
              <div><span className="text-emerald-300 font-bold">writing</span> - Read articles</div>
              <div><span className="text-emerald-300 font-bold">contact</span> - Email & contact</div>
              <div><span className="text-emerald-300 font-bold">socials</span> - GitHub & LinkedIn</div>
              <div><span className="text-emerald-300 font-bold">resume</span> - View resume</div>
              <div><span className="text-emerald-300 font-bold">clear</span> - Clear screen</div>
              <div><span className="text-emerald-300 font-bold">exit</span> - Close terminal</div>
            </div>
          </div>
        );
        break;

      case "writing":
      case "blogs":
      case "posts": {
        const blogsList = getAllBlogs();
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Engineering Writing & Articles ({blogsList.length}):</p>
            <div className="space-y-1.5 pl-2">
              {blogsList.map((blog, i) => (
                <div key={blog.slug} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-emerald-300 font-semibold">{i + 1}. {blog.title}</span>
                  </div>
                  <a
                    href={`/writing/${blog.slug}`}
                    className="text-emerald-400 underline underline-offset-2 hover:text-emerald-200"
                  >
                    read post →
                  </a>
                </div>
              ))}
              <div className="pt-1">
                <a href="/writing" className="text-emerald-400 underline font-bold">
                  View All Posts Archive →
                </a>
              </div>
            </div>
          </div>
        );
        break;
      }

      case "about":
        output = (
          <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
            <p className="text-emerald-400 font-bold">Aliasgar Lakkadghat — AI & Data Engineer</p>
            <p>
              I build across the stack, from agentic workflows, LLM and RAG pipelines to data platforms, backend services, and real-time applications.
            </p>
            <p className="text-zinc-400">
              Focused on reliable, scalable intelligent systems and shipping production-ready software.
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Technical Stack:</p>
            <div className="space-y-1 pl-2">
              <p><span className="text-emerald-300 font-semibold">Languages:</span> JavaScript, Python, Java, SQL</p>
              <p><span className="text-emerald-300 font-semibold">Frontend:</span> React, Next.js, TailwindCSS, Three.js, TanStack</p>
              <p><span className="text-emerald-300 font-semibold">Backend:</span> FastAPI, Node.js, Express, Prisma, Supabase</p>
              <p><span className="text-emerald-300 font-semibold">Data Engineering:</span> Databricks, dbt, Airflow, Kafka, BigQuery, Neon DB</p>
              <p><span className="text-emerald-300 font-semibold">AI & Cloud:</span> LangChain, LangGraph, Ollama, GCP, AWS, Docker</p>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Featured Case Studies:</p>
            <div className="space-y-1.5 pl-2">
              {projectsData.map((p, i) => (
                <div key={p.slug} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-emerald-300 font-semibold">{i + 1}. {p.title}</span> — {p.subtitle}
                  </div>
                  <a
                    href={`/projects/${p.slug}`}
                    className="text-emerald-400 underline underline-offset-2 hover:text-emerald-200"
                  >
                    view case study →
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "contact":
      case "email":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Get in Touch:</p>
            <p>Email: <a href="mailto:ali280306@gmail.com" className="text-emerald-300 underline">ali280306@gmail.com</a></p>
          </div>
        );
        break;

      case "socials":
      case "links":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Online Profiles:</p>
            <p>GitHub: <a href="https://github.com/alilakkadghat" target="_blank" rel="noreferrer" className="text-emerald-300 underline">github.com/alilakkadghat</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/aliasgarlakkadghat/" target="_blank" rel="noreferrer" className="text-emerald-300 underline">linkedin.com/in/aliasgarlakkadghat</a></p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="text-xs text-zinc-300">
            <a href="/Aliasgar_Resume.pdf" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-bold">
              Open Aliasgar_Resume.pdf ↗
            </a>
          </div>
        );
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        setIsOpen(false);
        setInputVal("");
        return;

      case "sudo":
        output = <p className="text-red-400 text-xs">Permission denied: You already have executive access to this portfolio.</p>;
        break;

      default:
        output = (
          <p className="text-red-400 text-xs">
            Command not found: <span className="text-zinc-200">{rawCmd}</span>. Type <span className="text-emerald-400 font-bold">'help'</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: rawCmd,
        output,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      if (historyIndex + 1 < commandHistory.length) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else {
        setHistoryIndex(null);
        setInputVal("");
      }
    }
  };

  return (
    <>
      {/* Floating Bottom-Left Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center size-13 sm:size-14 bg-[#121316] text-[#22c55e] border-3 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer select-none group"
        aria-label="Open Interactive Terminal"
        title="Open Terminal"
      >
        <span className="font-mono text-xl sm:text-2xl font-black tracking-tighter group-hover:scale-110 transition-transform">
          &gt;_
        </span>
      </button>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-200 font-mono ${
            isMaximized
              ? "inset-4 sm:inset-8"
              : "bottom-22 left-4 sm:left-6 w-[calc(100vw-2rem)] sm:w-[580px] md:w-[680px] h-[480px] max-h-[82vh]"
          }`}
        >
          <div className="flex flex-col h-full bg-[#0c0d0e] text-zinc-100 border-3 sm:border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] overflow-hidden">
            
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between bg-[#18191c] px-4 py-2.5 border-b-3 border-foreground select-none text-zinc-300 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer"
                  title="Close"
                />
                <button
                  onClick={() => setIsMaximized(false)}
                  className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:opacity-80 transition-opacity cursor-pointer"
                  title="Minimize"
                />
                <button
                  onClick={() => setIsMaximized((prev) => !prev)}
                  className="size-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:opacity-80 transition-opacity cursor-pointer"
                  title="Maximize"
                />
              </div>

              <div className="text-zinc-400 font-bold text-[11px] sm:text-xs">
                aliasgar@portfolio: ~
              </div>

              <div className="flex items-center gap-2 text-zinc-400">
                <button
                  onClick={() => setIsMaximized((prev) => !prev)}
                  className="hover:text-zinc-100 cursor-pointer hidden sm:block"
                >
                  {isMaximized ? <FiMinimize2 size={13} /> : <FiMaximize2 size={13} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-zinc-100 cursor-pointer"
                >
                  <FiX size={15} />
                </button>
              </div>
            </div>

            {/* Terminal Window Body */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="flex-1 p-4 sm:p-5 overflow-y-auto overflow-x-hidden space-y-4 text-xs sm:text-sm cursor-text scrollbar-thin scrollbar-thumb-zinc-700"
            >
              {/* ASCII Art Logo Banner */}
              <div className="overflow-x-auto text-[8px] sm:text-[10px] md:text-xs leading-none font-black text-[#22c55e] select-none font-mono opacity-95">
                <pre className="whitespace-pre">{ASCII_LOGO}</pre>
              </div>

              {/* Sub-banner Description */}
              <div className="border-b border-zinc-800 pb-3 space-y-1 text-zinc-400 text-xs">
                <p className="font-semibold text-zinc-300">
                  AI & Data Engineer <span className="text-emerald-400">//</span> aliasgarlakkadghat
                </p>
                <p>
                  Type <span className="text-emerald-400 font-bold">'help'</span> to get started, or explore commands like <span className="text-emerald-400">'skills'</span>, <span className="text-emerald-400">'projects'</span>, <span className="text-emerald-400">'about'</span>.
                </p>
              </div>

              {/* Command History */}
              {history.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="text-emerald-400 font-bold">~/portfolio $</span>
                    <span className="font-medium text-zinc-100">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Input */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-emerald-400 font-bold shrink-0">~/portfolio $</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-zinc-100 font-mono text-xs sm:text-sm caret-emerald-400 p-0 m-0"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>

              <div ref={bottomRef} />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
