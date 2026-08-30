---
title: "MerchID: Building a QR-Powered Digital Identity Platform for Committee Members"
description: "How we linked permanent physical QR codes printed on official merchandise to dynamic, customizable digital profiles with bulk onboarding, 6 animated theme engines, and privacy-first analytics."
date: 2026-08-28
tag: "FULL-STACK"
author: "Aliasgar Lakkadghat"
mockupType: "merchid"
cover: "/projects/merchid.png"
---

Every year, student committees print hundreds of customized t-shirts, hoodies, and ID cards. Once printed, that merchandise is static — if a member changes their phone number, portfolio URL, social handles, or committee sub-department, the physical print cannot change.

I built **MerchID** to turn physical merchandise into an interactive digital identity layer.

Each committee member receives a permanent, custom-styled squircle QR code printed directly on their official merchandise. Scanning the code opens a live, customizable digital profile that members can update at any time without changing their physical QR code.

---

## 1. The Core Architecture: Separating Identity from Destination

The core design principle behind MerchID was separating the *physical identifier* from the *runtime destination*:

1. **Persistent Target URL**: Each member is assigned a permanent identifier (`member.mpstmeacm.com/u/:username`).
2. **Dynamic Resolution**: When scanned, the backend resolves the user's active configuration, records anonymous telemetry, and delivers the customized profile page.
3. **Dynamic 307 Redirect Mode**: Members can toggle redirect mode on or off. When enabled, scanning their merchandise instantly issues an HTTP 307 redirect directly to their LinkedIn, GitHub, or personal portfolio while still recording visitor analytics in the background.

```js
// Fast runtime resolution with optional 307 passthrough
export async function resolveMemberProfile(username, req) {
  const profile = await db.query.members.findFirst({
    where: eq(members.username, username),
    with: { links: true, settings: true },
  });

  if (!profile || !profile.isActive) {
    return { notFound: true };
  }

  // Record privacy-safe analytics asynchronously
  queueAnalyticsEvent(profile.id, req);

  // Dynamic redirect passthrough
  if (profile.settings.redirectMode && profile.settings.redirectUrl) {
    return { redirect: profile.settings.redirectUrl, status: 307 };
  }

  return { profile };
}
```

---

## 2. Administrator Dashboard & Batch QR Pipeline

Onboarding 50+ committee members manually is tedious and error-prone. The MerchID Administrator Console automates the entire provisioning lifecycle:

- **Bulk CSV Ingestion**: Administrators can upload a single CSV file containing member names, emails, and roles. The server batches user creation, sets up temporary credentials, and initializes custom QR code vectors automatically.
- **Batch ZIP Vector Export**: Designers and print vendors require high-resolution assets. MerchID generates crisp vector `.svg` and 300 DPI `.png` files, bundling all member QR codes into a single downloadable ZIP archive with one click.
- **Access & Role Control**: Admins can instantly reset passwords to temporary defaults, toggle active/suspended member status, and manage role-based permissions across Executives, Subheads, and Heads.

---

## 3. The Member Console: Personalization & Themes

Once onboarded, members log in to customize their digital presence through an intuitive control panel:

- **6 Animated Theme Engines**: Members can choose between tailored visual presets including *Minimal*, *Neon Glow*, *Spider-Verse*, *Glassmorphism*, *Hacker Terminal (Matrix Rain)*, and *College Neubrutalist*.
- **Asset Pipeline**: Direct integration with Cloudinary for fast image uploads, avatar cropping, and global CDN delivery.
- **Interactive Link Builder**: Drag-and-drop / Up-Down controls to organize links, custom icons, and visibility toggles for social platforms (GitHub, LinkedIn, Instagram, Discord, personal portfolios).
- **Typography & Color Customization**: Full control over font families (Sans, Serif, Monospace) and custom hex accent palettes with live in-browser preview.

---

## 4. Privacy-First Visitor Analytics

Traditional tracking solutions are invasive and heavy. MerchID uses a lightweight, privacy-respecting analytics pipeline:

```
[QR Scan] ──► [Hash IP + UserAgent + DateSalt via MD5] ──► [Unique View Check]
                                                          │
                                                          ▼
                                            [Record Device / OS / Referrer]
```

- **Zero PII Storage**: We never store raw IP addresses. Unique daily scans are calculated using daily-salted MD5 hashes of the client IP and User-Agent.
- **Granular Insights**: Members view comprehensive scanning trends across 30-day timelines, device breakdowns (iOS vs. Android vs. Desktop), browser distributions, and referrers.
- **Sub-50ms Latency**: Analytics ingestion is handled non-blockingly, ensuring profile loading remains instantaneous.

---

## 5. What Matters Beyond the Code

Building MerchID reinforced a key engineering lesson: **software becomes valuable when it connects seamlessly with physical human interactions**. 

Instead of treating committee merchandise as just clothing, MerchID gave every member a persistent digital identity they could proudly share with a single scan.

The production platform is live and in active use at [member.mpstmeacm.com](https://member.mpstmeacm.com/).
