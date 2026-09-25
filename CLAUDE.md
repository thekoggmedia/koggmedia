KOGG MEDIA — Site Rules (mandatory for AI assistants & devs)
Stack
Static HTML/CSS/JS. NO build step, NO frameworks, NO npm, NO node_modules.
Deploy: git push origin main → Cloudflare Pages (automatic).
Laws (never break)
Brand assets live ONLY in /assets. NEVER invent, redraw, or substitutelogo artwork. Ever.
ring.svg is PENDING recovery — until it exists, the hero uses thewordmark treatment. Do NOT substitute the ring.
All colours, fonts, and components come from css/kogg.css tokens (:root).NEVER hardcode colours in pages.
Edits are FULL-FILE replacements. Keep files self-contained and complete.
Local testing: python3 -m http.server 8000 — never open via file://(CSS masks break on file://).
Booking email until further notice: thekoggmedia@gmail.com
Structure
index.html — home
css/kogg.css — design system (single source of truth)
js/kogg.js — shared behaviour
assets/ — brand masters only (wordmark.svg, wordmark-teal.svg, +ring.svg when recovered)
PHASES.md — product phase tracker (update when a phase advances)