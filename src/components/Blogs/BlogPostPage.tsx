import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from "react-icons/fi";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { BlogCardMockup } from "./BlogMockup";
import SEO, { SITE_URL, DEFAULT_OG_IMAGE } from "@/components/SEO/SEO";
import FadeIn from "../ui/FadeIn";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const allBlogs = getAllBlogs();
  const post = getBlogBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <SEO
          title="Post Not Found | Aliasgar Lakkadghat"
          description="The article you are looking for does not exist or has been moved."
          canonicalUrl={`${SITE_URL}/writing`}
        />
        <h1 className="text-4xl font-black font-mono mb-4 uppercase">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">The article you are looking for does not exist or has been moved.</p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-foreground text-background font-mono font-bold uppercase shadow-[4px_4px_0px_0px_var(--foreground)]"
        >
          <FiArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  // Find next and previous posts
  const currentIndex = allBlogs.findIndex((b) => b.slug === post.slug);
  const prevPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  const articleUrl = `${SITE_URL}/writing/${post.slug}`;
  const articleImage = post.cover ? `${SITE_URL}${post.cover}` : DEFAULT_OG_IMAGE;

  const articleSchema = [
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": articleUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": articleImage,
      "datePublished": post.date,
      "dateModified": post.date,
      "url": articleUrl,
      "author": {
        "@type": "Person",
        "name": post.author || "Aliasgar Lakkadghat",
        "url": `${SITE_URL}/`
      },
      "publisher": {
        "@type": "Person",
        "name": "Aliasgar Lakkadghat",
        "url": `${SITE_URL}/`
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl
      },
      "articleSection": post.tag
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <SEO
        title={`${post.title} | Aliasgar Lakkadghat`}
        description={post.description}
        canonicalUrl={articleUrl}
        ogType="article"
        ogImage={articleImage}
        publishedTime={post.date}
        schema={articleSchema}
      />
      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <FadeIn>
          <div className="mb-8">
            <Link
              to="/#writing"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group select-none"
            >
              <FiArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>← Writing</span>
            </Link>
          </div>
        </FadeIn>

        {/* Article Header */}
        <FadeIn delay={0.05}>
          <header className="space-y-4 mb-10">
            {/* Tag */}
            <div className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#ff6633] uppercase select-none">
              {post.tag}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            {/* Metadata bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs sm:text-sm text-muted-foreground border-b-2 border-dashed border-foreground/15 pb-6">
              <span className="flex items-center gap-1.5 font-bold text-foreground">
                <FiUser className="size-3.5 text-[#ff6633]" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiCalendar className="size-3.5" />
                {post.formattedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiClock className="size-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>
        </FadeIn>

        {/* Featured Visual Mockup or Cover Banner */}
        <FadeIn delay={0.1}>
          <div className="border-3 sm:border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] mb-12 overflow-hidden bg-card">
            <BlogCardMockup post={post} />
          </div>
        </FadeIn>

        {/* Article Body with Markdown Rendering */}
        <FadeIn delay={0.15}>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-foreground leading-relaxed text-base sm:text-lg space-y-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ node, children, ...props }) => {
                  // Check if this is the first paragraph to give it the stylized Drop Cap from reference image
                  return (
                    <p
                      className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 first-of-type:first-letter:text-5xl first-of-type:first-letter:font-serif first-of-type:first-letter:font-bold first-of-type:first-letter:text-[#ff6633] first-of-type:first-letter:float-left first-of-type:first-letter:mr-3 first-of-type:first-letter:leading-none first-of-type:first-letter:select-none"
                      {...props}
                    >
                      {children}
                    </p>
                  );
                },
                h2: ({ node, children, ...props }) => (
                  <h2
                    className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mt-12 mb-4 pt-4 border-t-2 border-dashed border-foreground/15 font-mono uppercase"
                    {...props}
                  >
                    {children}
                  </h2>
                ),
                h3: ({ node, children, ...props }) => (
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3" {...props}>
                    {children}
                  </h3>
                ),
                ul: ({ node, children, ...props }) => (
                  <ul className="space-y-2 my-6 list-none pl-2" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ node, children, ...props }) => (
                  <ol className="space-y-2 my-6 list-decimal pl-6 text-muted-foreground" {...props}>
                    {children}
                  </ol>
                ),
                li: ({ node, children, ...props }) => (
                  <li className="flex items-start gap-2.5 text-muted-foreground text-base sm:text-lg" {...props}>
                    <span className="text-[#ff6633] font-mono font-black mt-1 select-none">▸</span>
                    <span>{children}</span>
                  </li>
                ),
                blockquote: ({ node, children, ...props }) => (
                  <blockquote
                    className="border-l-4 border-[#ff6633] bg-card p-4 sm:p-5 my-6 italic text-foreground font-medium shadow-[3px_3px_0px_0px_var(--foreground)]"
                    {...props}
                  >
                    {children}
                  </blockquote>
                ),
                code: ({ node, className, children, ...props }: any) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="px-1.5 py-0.5 rounded bg-muted text-[#ff6633] font-mono text-sm border border-foreground/20" {...props}>
                      {children}
                    </code>
                  ) : (
                    <div className="my-6 rounded-none border-2 border-foreground bg-[#0f1012] text-zinc-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto shadow-[4px_4px_0px_0px_var(--foreground)]">
                      <code className="block whitespace-pre" {...props}>
                        {children}
                      </code>
                    </div>
                  );
                },
                a: ({ node, children, href, ...props }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-[#ff6633] underline underline-offset-4 decoration-2 font-bold hover:bg-[#ff6633] hover:text-black px-0.5 transition-all"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                figure: ({ node, children, ...props }) => (
                  <figure className="my-8 border-2 border-foreground bg-card p-3 shadow-[4px_4px_0px_0px_var(--foreground)] text-center" {...props}>
                    {children}
                  </figure>
                ),
                figcaption: ({ node, children, ...props }) => (
                  <figcaption className="text-xs sm:text-sm font-mono text-muted-foreground mt-2 italic" {...props}>
                    {children}
                  </figcaption>
                ),
                img: ({ node, src, alt, ...props }) => (
                  <img src={src} alt={alt} className="w-full h-auto rounded-none border border-foreground/30 object-cover" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </FadeIn>

        {/* Footer Navigation Bar */}
        <div className="mt-16 pt-8 border-t-4 border-foreground">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
            {prevPost ? (
              <Link
                to={`/writing/${prevPost.slug}`}
                className="group block p-4 border-2 border-foreground bg-card hover:bg-foreground hover:text-background shadow-[3px_3px_0px_0px_var(--foreground)] transition-all"
              >
                <div className="text-xs text-muted-foreground group-hover:text-background/80 font-bold mb-1">
                  ← PREVIOUS POST
                </div>
                <div className="font-black text-sm truncate">{prevPost.title}</div>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                to={`/writing/${nextPost.slug}`}
                className="group block p-4 border-2 border-foreground bg-card hover:bg-foreground hover:text-background shadow-[3px_3px_0px_0px_var(--foreground)] transition-all text-right sm:col-start-2"
              >
                <div className="text-xs text-muted-foreground group-hover:text-background/80 font-bold mb-1">
                  NEXT POST →
                </div>
                <div className="font-black text-sm truncate">{nextPost.title}</div>
              </Link>
            ) : <div />}
          </div>
        </div>

      </article>
    </div>
  );
}
