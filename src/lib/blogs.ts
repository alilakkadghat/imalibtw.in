export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  tag: string;
  author?: string;
  cover?: string;
  readTime: string;
  content: string;
  mockupType?: "ticket" | "phone" | "merchid" | "seo" | "image" | "none";
}

// Simple YAML frontmatter parser for browser/Vite environments
function parseFrontmatter(rawMarkdown: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawMarkdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: rawMarkdown };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};

  yamlBlock.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Strip surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, content };
}

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function getAllBlogs(): BlogPost[] {
  // Vite's import.meta.glob dynamically pulls all .md files in src/blogs/
  const blogModules = import.meta.glob("/src/blogs/*.md", {
    query: "?raw",
    eager: true,
    import: "default",
  }) as Record<string, string>;

  const posts: BlogPost[] = Object.entries(blogModules).map(([path, rawContent]) => {
    const filename = path.split("/").pop() || "";
    const slug = filename.replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(rawContent);

    const date = data.date || "2026-08-23";
    const readTime = data.readTime || calculateReadTime(content);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date,
      formattedDate: formatDate(date),
      tag: data.tag || "Engineering",
      author: data.author || "Aliasgar Lakkadghat",
      cover: data.cover || "",
      readTime,
      content,
      mockupType: (data.mockupType as BlogPost["mockupType"]) || (slug.includes("conc-qr") ? "phone" : "ticket"),
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const allBlogs = getAllBlogs();
  return allBlogs.find((post) => post.slug === slug);
}
