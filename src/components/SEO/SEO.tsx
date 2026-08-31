import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  publishedTime?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SITE_URL = "https://www.imalibtw.in";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/profile.png`;

function setMetaTag(attrName: "name" | "property", attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(schemaData: Record<string, any> | Array<Record<string, any>> | undefined) {
  const existingScript = document.getElementById("dynamic-json-ld");
  if (existingScript) {
    existingScript.remove();
  }

  if (!schemaData) return;

  const script = document.createElement("script");
  script.id = "dynamic-json-ld";
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // 2. Set Canonical URL
    setCanonical(canonicalUrl);

    // 3. Set Primary Meta
    setMetaTag("name", "title", title);
    setMetaTag("name", "description", description);

    // 4. Set Open Graph Meta
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Aliasgar Lakkadghat");

    if (publishedTime) {
      setMetaTag("property", "article:published_time", publishedTime);
    }

    // 5. Set Twitter Meta
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:url", canonicalUrl);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Set Structured Data (JSON-LD)
    if (schema) {
      setJsonLd(schema);
    }

    return () => {
      // Clean up dynamic schema when unmounting
      const script = document.getElementById("dynamic-json-ld");
      if (script) script.remove();
    };
  }, [title, description, canonicalUrl, ogType, ogImage, publishedTime, schema]);

  return null;
}
