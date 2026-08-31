import { FiCheckCircle } from "react-icons/fi";
import type { BlogPost } from "@/lib/blogs";

const QrIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
  </svg>
);

const CategoryIcon = ({ tag, iconName, className }: { tag?: string; iconName?: string; className?: string }) => {
  const norm = (iconName || tag || "").toLowerCase();

  if (norm.includes("qr") || norm.includes("identity") || norm.includes("merchid")) {
    return <QrIcon className={className} />;
  }

  if (norm.includes("seo") || norm.includes("search") || norm.includes("web")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  }

  if (norm.includes("data") || norm.includes("database") || norm.includes("sql") || norm.includes("kafka")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (norm.includes("ai") || norm.includes("llm") || norm.includes("ml") || norm.includes("agent")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    );
  }

  // Default Code / System Icon
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

export function TicketMockup() {
  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex flex-col justify-between text-foreground font-mono select-none border-b-3 border-foreground">
      <div className="text-center bg-card py-2 px-3 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]">
        <div className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase font-bold">
          SAP ID
        </div>
        <div className="text-xl sm:text-2xl font-black tracking-wider text-foreground mt-0.5">
          7000000013
        </div>
      </div>

      <div className="space-y-1 text-[11px] sm:text-xs text-muted-foreground mt-2 bg-card p-2.5 border-2 border-foreground/30">
        <div className="text-[10px] font-bold text-foreground uppercase tracking-wider mb-1 flex justify-between items-center">
          <span>Form Collection</span>
          <span className="text-[9px] px-1.5 py-0.2 bg-foreground/10 text-foreground font-black border border-foreground/20">CONFIRMED</span>
        </div>
        <div className="flex justify-between items-center py-0.5 border-b border-foreground/10">
          <span>Date</span>
          <span className="text-foreground font-bold">27/08/26</span>
        </div>
        <div className="flex justify-between items-center py-0.5 border-b border-foreground/10">
          <span>Time Slot</span>
          <span className="text-foreground font-bold">11.00 AM TO 12.00 PM</span>
        </div>
        <div className="flex justify-between items-center py-0.5">
          <span>Deposit Fee</span>
          <span className="text-foreground font-bold">₹2</span>
        </div>
      </div>

      <div className="text-[9px] text-muted-foreground truncate pt-1">
        Note: Valid for three days including the date of issue...
      </div>
    </div>
  );
}

export function MerchIDMockup() {
  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex items-center justify-between gap-4 text-foreground font-mono select-none border-b-3 border-foreground overflow-hidden">
      {/* Left Text Block */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] text-[#ff6633] font-black tracking-widest uppercase">
          FULL-STACK · IDENTITY
        </div>
        <div className="text-lg sm:text-xl font-black text-foreground leading-tight">
          Merch<span className="text-[#ff6633]">ID</span> Engine
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug line-clamp-3 font-medium">
          Physical merchandise QR codes linked to customizable profiles & 6 animated theme presets.
        </p>
      </div>

      {/* Right Digital Member Card Mockup */}
      <div className="w-36 sm:w-40 h-44 bg-card border-2 border-foreground rounded-xl p-2.5 flex flex-col justify-between shadow-[4px_4px_0px_0px_var(--foreground)] relative shrink-0">
        <div className="flex items-center justify-between text-[8px] text-muted-foreground font-bold border-b border-foreground/15 pb-1">
          <span>MPSTME ACM</span>
          <span className="text-[#ff6633] font-black">MEMBER ID</span>
        </div>

        {/* QR Code and Member Info */}
        <div className="flex flex-col items-center justify-center my-auto py-1 space-y-1">
          <div className="size-10 bg-foreground/10 border-2 border-foreground flex items-center justify-center text-[#ff6633]">
            <QrIcon className="size-6" />
          </div>
          <div className="text-[10px] font-black text-foreground text-center truncate w-full">
            Aliasgar Lakkadghat
          </div>
          <span className="text-[7.5px] bg-[#ff6633] text-black px-1.5 py-0.5 rounded font-black tracking-widest">
            ACM TECH LEAD
          </span>
        </div>

        <div className="flex items-center justify-center gap-1 text-[7.5px] text-emerald-600 dark:text-emerald-400 font-bold border-t border-foreground/10 pt-1">
          <FiCheckCircle className="size-2.5" />
          <span>member.mpstmeacm.com</span>
        </div>
      </div>
    </div>
  );
}

export function SeoMockup() {
  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex items-center justify-between gap-4 text-foreground font-mono select-none border-b-3 border-foreground overflow-hidden">
      {/* Left Text Block */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] text-[#ff6633] font-black tracking-widest uppercase">
          SEARCH · INFRASTRUCTURE
        </div>
        <div className="text-lg sm:text-xl font-black text-foreground leading-tight">
          SEO & Schema <span className="text-[#ff6633]">Engine</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug line-clamp-3 font-medium">
          Canonical unification, JSON-LD Schema graphs, and llms.txt AI crawler indexing.
        </p>
      </div>

      {/* Right Search Engine Rich Snippet Mockup */}
      <div className="w-36 sm:w-40 h-44 bg-card border-2 border-foreground rounded-xl p-2.5 flex flex-col justify-between shadow-[4px_4px_0px_0px_var(--foreground)] relative shrink-0">
        <div className="flex items-center justify-between text-[8px] text-muted-foreground font-bold border-b border-foreground/15 pb-1">
          <span>SEARCH CONSOLE</span>
          <span className="text-emerald-500 font-black flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            200 OK
          </span>
        </div>

        {/* Snippet Card */}
        <div className="flex flex-col justify-center my-auto py-1 space-y-1.5">
          <div className="flex items-center gap-1 text-[8px] text-emerald-600 dark:text-emerald-400 font-bold truncate">
            <span>https://www.imalibtw.in</span>
          </div>
          <div className="text-[10px] font-black text-foreground leading-tight truncate">
            Aliasgar Lakkadghat
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="text-[7.5px] bg-[#ff6633]/15 text-[#ff6633] border border-[#ff6633]/30 px-1 py-0.2 rounded font-bold uppercase">
              ProfilePage
            </span>
            <span className="text-[7.5px] bg-foreground/10 text-foreground border border-foreground/20 px-1 py-0.2 rounded font-bold uppercase">
              llms.txt
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-bold border-t border-foreground/10 pt-1">
          <span>Canonical:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-black">Unified (www)</span>
        </div>
      </div>
    </div>
  );
}

/**
 * AutoBlogMockup: Automatically generates a matched neubrutalist visual mockup
 * for ANY newly added markdown blog file based on its title, tag, description, and frontmatter.
 */
export function AutoBlogMockup({ post }: { post: BlogPost }) {
  // 1. Determine Left Side Header Tag
  const leftTag = post.mockupTag || `${(post.tag || "ENGINEERING").toUpperCase()} · ARCHITECTURE`;

  // 2. Format Title with accent on the last word or main keyword
  const rawTitle = post.mockupTitle || post.title.split(":")[0] || post.title;
  const words = rawTitle.trim().split(" ");
  const firstPart = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  // 3. Subtitle / description
  const subtitle = post.mockupSubtitle || post.description;

  // 4. Right Side Card Header & Status
  const rightHeader = post.mockupHeader || `${(post.tag || "SYSTEM").toUpperCase()} CONSOLE`;
  const badgeText = post.mockupBadge || "ACTIVE";

  // 5. Right Side Badges/Pills
  const pills = post.mockupPills || [post.tag, post.readTime, "v1.0"];

  // 6. Right Side Status Footer
  const statusText = post.mockupStatus || `imalibtw.in/writing/${post.slug}`;

  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex items-center justify-between gap-4 text-foreground font-mono select-none border-b-3 border-foreground overflow-hidden">
      {/* Left Text Block */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] text-[#ff6633] font-black tracking-widest uppercase">
          {leftTag}
        </div>
        <div className="text-lg sm:text-xl font-black text-foreground leading-tight">
          {firstPart ? `${firstPart} ` : ""}
          <span className="text-[#ff6633]">{lastWord}</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug line-clamp-3 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Right Auto-Generated Card Mockup */}
      <div className="w-36 sm:w-40 h-44 bg-card border-2 border-foreground rounded-xl p-2.5 flex flex-col justify-between shadow-[4px_4px_0px_0px_var(--foreground)] relative shrink-0">
        <div className="flex items-center justify-between text-[8px] text-muted-foreground font-bold border-b border-foreground/15 pb-1">
          <span className="truncate">{rightHeader}</span>
          <span className="text-emerald-500 font-black flex items-center gap-1 shrink-0">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {badgeText}
          </span>
        </div>

        {/* Center Visual Component */}
        <div className="flex flex-col items-center justify-center my-auto py-1 space-y-1">
          <div className="size-10 bg-foreground/10 border-2 border-foreground flex items-center justify-center text-[#ff6633]">
            <CategoryIcon tag={post.tag} iconName={post.mockupIcon} className="size-5" />
          </div>
          <div className="text-[10px] font-black text-foreground text-center truncate w-full">
            {post.author || "Aliasgar Lakkadghat"}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {pills.slice(0, 2).map((pill) => (
              <span
                key={pill}
                className="text-[7px] bg-foreground/10 text-foreground border border-foreground/20 px-1 py-0.2 rounded font-bold uppercase truncate max-w-[65px]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link / Status */}
        <div className="flex items-center justify-center gap-1 text-[7.5px] text-emerald-600 dark:text-emerald-400 font-bold border-t border-foreground/10 pt-1 truncate">
          <FiCheckCircle className="size-2.5 shrink-0" />
          <span className="truncate">{statusText}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Universal Mockup Dispatcher:
 * Intelligently picks the specialized mockup or automatically generates one from frontmatter.
 */
export function BlogCardMockup({ post }: { post: BlogPost }) {
  if (post.mockupType === "merchid" || post.slug.includes("merchid")) {
    return <MerchIDMockup />;
  }

  if (post.mockupType === "seo" || post.slug.includes("seo")) {
    return <SeoMockup />;
  }

  if (post.mockupType === "ticket") {
    return <TicketMockup />;
  }

  if (post.cover) {
    return (
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  // Default: 100% automated mockup generation from blog info!
  return <AutoBlogMockup post={post} />;
}

// Alias for backward compatibility
export const PhoneMockup = MerchIDMockup;
