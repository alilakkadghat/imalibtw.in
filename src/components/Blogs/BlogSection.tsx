import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import { getAllBlogs } from "@/lib/blogs";
import { TicketMockup, MerchIDMockup } from "./BlogMockup";
import FadeIn from "../ui/FadeIn";

export default function BlogSection() {
  const blogs = getAllBlogs();
  // Display top 2 featured posts on the home page as in the reference image
  const featuredBlogs = blogs.slice(0, 2);

  return (
    <section id="writing" className="md:py-24 py-16 w-full border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-2 border-foreground/15 pb-6">
            <div>
              <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                04 // Engineering Notes
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
                Writing
              </h2>
              <div className="w-16 h-2 bg-foreground mt-3 mb-2" />
              <p className="text-md sm:text-lg text-muted-foreground font-medium">
                Reflections on software infrastructure, systems reliability, and engineering trade-offs.
              </p>
            </div>

            <Link
              to="/writing"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold bg-card text-foreground px-4 py-2 border-2 border-foreground shadow-[3px_3px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all group self-start sm:self-auto shrink-0"
            >
              <span>All posts</span>
              <FiArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* 2-Column Responsive Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {featuredBlogs.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.15} className="h-full">
              <Link
                to={`/writing/${post.slug}`}
                className="group flex flex-col justify-between h-full bg-card text-foreground border-3 sm:border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 overflow-hidden"
              >
                {/* Visual Preview Header (Mockup) */}
                <div className="overflow-hidden border-b-3 border-foreground bg-muted/20">
                  {post.mockupType === "merchid" || post.mockupType === "phone" ? (
                    <MerchIDMockup />
                  ) : post.mockupType === "ticket" ? (
                    <TicketMockup />
                  ) : post.cover ? (
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <TicketMockup />
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-3">
                    {/* Tag Badge and Arrow Icon */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-black tracking-widest text-[#ff6633] uppercase">
                        {post.tag}
                      </span>
                      <div className="p-1 border-2 border-foreground bg-background text-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--foreground)]">
                        <FiArrowUpRight className="size-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground group-hover:underline underline-offset-4 decoration-2 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="pt-4 border-t-2 border-dashed border-foreground/20 flex items-center justify-between font-mono text-xs text-muted-foreground font-semibold">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="size-3.5" />
                      <span>{post.formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiClock className="size-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
