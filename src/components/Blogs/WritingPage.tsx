import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { getAllBlogs } from "@/lib/blogs";
import SEO, { SITE_URL } from "@/components/SEO/SEO";
import FadeIn from "../ui/FadeIn";

export default function WritingPage() {
  const blogs = getAllBlogs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const writingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Writing",
          "item": `${SITE_URL}/writing`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Engineering Writing & Systems | Aliasgar Lakkadghat",
      "description": "Technical case studies, system breakdowns, and engineering notes on building production platforms, AI systems, and infrastructure.",
      "url": `${SITE_URL}/writing`
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <SEO
        title="Engineering Writing & Systems | Aliasgar Lakkadghat"
        description="Technical case studies, system breakdowns, and engineering notes on building production platforms, AI systems, and infrastructure."
        canonicalUrl={`${SITE_URL}/writing`}
        schema={writingSchema}
      />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Back Link */}
        <FadeIn>
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group select-none"
            >
              <FiArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>← Back to Home</span>
            </Link>
          </div>
        </FadeIn>

        {/* Page Header */}
        <FadeIn delay={0.05}>
          <div className="mb-14">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Engineering Notes & Systems
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase font-mono mb-4">
              All Writing
            </h1>
            <div className="w-20 h-2 bg-foreground mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
              Reflections on maintaining official systems, engineering latency, AI pipelines, and distributed architecture.
            </p>
          </div>
        </FadeIn>

        {/* Articles List */}
        <div className="space-y-6">
          {blogs.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <Link
                to={`/writing/${post.slug}`}
                className="group block bg-card border-3 border-foreground p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="font-black text-[#ff6633] uppercase">
                        {post.tag}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <FiCalendar className="size-3" />
                        {post.formattedDate}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <FiClock className="size-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground group-hover:text-[#ff6633] group-hover:underline underline-offset-4 decoration-2 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                      {post.description}
                    </p>
                  </div>

                  <div className="p-2 border-2 border-foreground bg-background text-foreground shrink-0 self-start group-hover:bg-[#ff6633] group-hover:text-black transition-colors shadow-[2px_2px_0px_0px_var(--foreground)]">
                    <FiArrowUpRight className="size-5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
