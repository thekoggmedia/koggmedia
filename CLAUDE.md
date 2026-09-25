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
TWO-ACCOUNT MACHINE (critical)
This Chromebook hosts TWO GitHub accounts. NEVER change global git configor ~/.git-credentials from this repo.

Global identity + first credential line = ukeme02 (personal — untouchable)
This repo ONLY: remote URL embeds thekoggmedia@, identity is setLOCAL (user.name "KOGG MEDIA", user.email thekoggmedia@gmail.com)
To push here, git must prompt as 'thekoggmedia@github.com'. If a pushauthenticates as ukeme02, STOP — the remote URL lost its username.
Structure
index.html — home
css/kogg.css — design system (single source of truth)
js/kogg.js — shared behaviour
assets/ — brand masters only
PHASES.md — product phase tracker (update when a phase advances)
