---
title: "Demystifying Modern Web SEO: From Canonicals to llms.txt and Rich Schemas"
description: "A developer's guide to technical SEO engineering: resolving canonical fragmentation, managing dynamic SPA metadata, and leveraging sitemap.xml, robots.txt, and the emerging llms.txt standard."
date: 2026-09-01
tag: "ENGINEERING"
author: "Aliasgar Lakkadghat"
mockupType: "seo"
---

When building modern web applications with frameworks like React and Vite, developers often treat Search Engine Optimization (SEO) as an afterthought. We build sleek interfaces, animate transitions with Framer Motion, and ensure sub-second interaction speeds — only to realize search engine crawlers and social share bots perceive our Single Page Applications (SPAs) as empty `<div>` shells.

Optimizing this portfolio for production search indexing revealed that technical SEO in 2026 is no longer just about meta keywords and page titles. It is a full-stack engineering discipline spanning **canonical unification**, **structured Schema.org graphs**, **Core Web Vitals**, and emerging standards like **`llms.txt`** for AI crawlers.

Here is a breakdown of what it takes to make a modern web app truly discoverable.

---

## 1. The Canonical Domain Trap: Resolving `www` vs Root Inconsistencies

One of the most insidious SEO bugs stems from domain fragmentation. To a search engine like Google, `https://imalibtw.in/` and `https://www.imalibtw.in/` are two completely different websites.

If your web server responds to both without a strict canonical preference, search crawlers split your domain authority between the two endpoints, resulting in Google Search Console reporting:

```
Duplicate without user-selected canonical
Google-selected canonical: https://www.imalibtw.in/
User-declared canonical: https://imalibtw.in/
```

### The Solution
1. **Unify the User-Declared Canonical Everywhere**: Every page's `<link rel="canonical" href="...">`, Open Graph URL (`og:url`), and XML sitemap entry must point explicitly to the primary domain (`https://www.imalibtw.in/`).
2. **Edge DNS 301 Redirects**: Configure Cloudflare or your DNS provider to permanently redirect all root traffic (`https://imalibtw.in/*`) to `https://www.imalibtw.in/$1`.
3. **No Mixed References**: Ensure internal links and metadata files never reference the bare domain.

---

## 2. The Anatomy of Modern Discovery Files

Beyond standard HTML tags, a production-grade site relies on a set of purpose-built plain text and XML files placed in the `public/` directory:

### `sitemap.xml` — The Crawl Blueprint
The sitemap acts as a machine-readable directory telling search engines which pages exist, when they were last modified, and their crawl priority.

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.imalibtw.in/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.imalibtw.in/projects/careerorbit</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

> **Engineering Rule**: Only list canonical, indexable, 200-OK URLs in your sitemap. Listing 404s or redirecting URLs degrades your crawl budget.

### `robots.txt` — Crawl Permissions & Pointer
`robots.txt` instructs automated bots on which routes they are allowed to crawl. It also provides the authoritative location of your sitemap:

```txt
User-agent: *
Allow: /

Sitemap: https://www.imalibtw.in/sitemap.xml
```

### `llms.txt` — The Standard for AI Search Engines & Agents
As AI-powered search engines (Perplexity, ChatGPT Search, Gemini) increasingly replace traditional keyword queries, standard HTML parsing is often too noisy for large language models. 

The emerging **`llms.txt`** standard provides a clean, Markdown-formatted summary of your identity, projects, technical skills, and authoritative reference links designed specifically for LLM ingestion:

```markdown
# Aliasgar Lakkadghat
> AI & Data Engineer specializing in agentic workflows, LLM pipelines, and data platforms.

## Technical Expertise
- AI & ML: LangChain, LangGraph, RAG, Ollama, Vector Search
- Data Engineering: Databricks, dbt, Apache Airflow, Kafka
```

### `humans.txt` & `site.webmanifest`
- **`humans.txt`**: A long-standing open standard giving credit to the developers, designers, and software behind the application.
- **`site.webmanifest`**: Provides Progressive Web App (PWA) configuration, device icons, and OS theme colors for mobile browsers.

---

## 3. Dynamic Metadata in Client-Side SPAs

In a Single Page Application, page transitions happen on the client side without full browser reloads. If a user navigates from the homepage to `/projects/careerorbit`, the HTML `<head>` must update dynamically to reflect the active case study.

We engineered a lightweight `<SEO />` controller component that automatically mutates document metadata on route change:

```tsx
export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    setCanonical(canonicalUrl);
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);
    
    if (schema) {
      setJsonLd(schema);
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
```

---

## 4. Unlocking Google Rich Results with Schema.org

Search engines don't just read words; they construct knowledge graphs. By embedding **JSON-LD (JavaScript Object Notation for Linked Data)**, we explicitly define real-world entities and their relationships.

### The Rich Results Distinction
- **Entity Schemas (`Person`, `WebSite`)**: Help Google build Knowledge Panels and understand who you are.
- **Visual Rich Result Schemas (`ProfilePage`, `BreadcrumbList`, `BlogPosting`)**: Qualify your pages for special rich snippets, interactive badges, and hierarchical breadcrumb trails directly on Google Search Result pages.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Aliasgar Lakkadghat",
    "jobTitle": "AI & Data Engineer",
    "sameAs": [
      "https://github.com/alilakkadghat",
      "https://www.linkedin.com/in/aliasgarlakkadghat/"
    ]
  }
}
```

---

## 5. Core Web Vitals & Image Optimization

A page that ranks high must also perform fast. We implemented:
1. **Explicit Dimensions (`width` and `height`)**: Prevents Cumulative Layout Shift (CLS) as images stream into the viewport.
2. **Native Lazy Loading**: Adding `loading="lazy"` and `decoding="async"` on all non-critical images to keep initial bundle evaluation instantaneous.
3. **Zero-Lag Dynamic Imports**: Markdown blog posts are loaded via Vite's `import.meta.glob`, generating clean static pages without server overhead.

---

## Summary Checklist for Modern Web SEO

- [x] **Canonical Domain**: Single authoritative URL structure (`https://www.imalibtw.in/`).
- [x] **Discovery Infrastructure**: `sitemap.xml`, `robots.txt`, and `llms.txt` active in `/public`.
- [x] **Dynamic Head Controller**: Dynamic route `<title>`, `<meta name="description">`, and `<link rel="canonical">`.
- [x] **Rich Results Structured Data**: `ProfilePage`, `BlogPosting`, and `BreadcrumbList` JSON-LD schemas.
- [x] **Open Graph Social Cards**: Visual previews tested for LinkedIn, X, Discord, and WhatsApp.
- [x] **Performance Hygiene**: Explicit image dimensions, lazy loading, and sub-second paint times.

By combining structured data engineering with clean canonical infrastructure, modern SPAs can achieve first-class search indexing and rich SERP presentation without sacrificing performance.
