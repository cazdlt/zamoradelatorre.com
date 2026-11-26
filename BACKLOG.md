# Backlog & Ideas

## Completed

### Bilingual Support (ES / EN)

- [x] Added reactive ES / EN locale switcher (`es / en`) in the sidebar with `localStorage` persistence, browser-language auto-detection, and `?lang=es|en` query override
- [x] Localized core chrome (sidebar nav, Home tiles, About, Contact, Blog/Projects/Archive/Tags headers, footer, error page, `<html lang>`) while keeping posts and projects in their original languages

### About Page (`src/routes/about/+page.svelte`, `src/lib/data/about.ts`)

- [x] Updated bio, background, current focus areas, and personal notes in both ES and EN from updated CVs and personal notes
- [x] Added readable `max-w-3xl` layout, compact CV pill links, structured experience timeline, and 2-column "Currently / Ahora" grid
- [x] Removed legacy `/api/whatTheySay` serverless endpoint and updated `README.md` deploy notes

### Contact Page (`src/routes/contact/+page.svelte`, `src/lib/components/socials.svelte`)

- [x] Built two-column desktop layout (direct details/socials/CV on left, message form card on right)
- [x] Fixed phone number typo (`8181` -> `8101`), made email (`mailto:` + copy button) and phone (`tel:`) clickable, and added WhatsApp link (`wa.me/573185608101`)
- [x] Fixed `<Socials />` (`exclude={['mail']}` on Contact, platform-specific `aria-label`s, no `target="_blank"` on internal links)
- [x] Upgraded Netlify form with muted borders, focus states, `required` attributes, honeypot spam field, right-sized submit button, and inline confirmation state

### Site-Wide Polish & Fixes

- [x] Switched Google Fonts to `Source Sans 3` (`400;600;700` + italic, `display=swap`) loaded via `<link>` in `src/app.html`
- [x] Fixed layout shell (`w-full`, fixed `lg:w-64` desktop sidebar, compact `py-6 lg:py-16` mobile sidebar, sticky-bottom footer)
- [x] Polished Home grid with persistent subtle bottom scrim, always-visible titles, consistent `aspect-[4/3]` tiles, and clean hover states
- [x] Improved reading layout (`max-w-3xl` prose measure, `overflow-x-auto`, consistent `<PageTitle />` on Blog/Projects, on-palette `text-dark` in micro-reviews)
- [x] Fixed Archive intra-year descending sort, localized Archive dates, and removed unused `.year` class on Tags

---

## Deferred (Separate Track)

### Logo & Identity (handled with another agent)

- [ ] Design an SVG monogram/favicon (`Z`, `AZ`, or `zdlt`) using the site palette (`#d45143`, `#186688`, `#37414f`, `#edeae5`, `#fffef9`) to replace `static/favicon.png` and `static/favicon.ico`
- [ ] Refine sidebar wordmark (`andrés zamora`) to pair with the new mark

---

## Future Ideas

- [ ] **Dark mode**: Saved Huemint dark-palette explorations from `README.md` (CSS custom properties in `variables.css` already make theming straightforward)
- [ ] **Static-only adapter**: With `/api/whatTheySay` gone, evaluate switching from `@sveltejs/adapter-netlify` to `@sveltejs/adapter-static` if no server endpoints are planned
- [ ] **Hoja de Vida PDF**: `static/cv/hoja-de-vida.pdf` currently spills 1 bullet onto page 3 (small formatting fix in CV source)
- [ ] **New content**: More recent projects / micro-reviews / posts so the site reflects current work
- [ ] **Open Graph / social preview metadata**: Add `og:title`, `og:description`, `og:image` in `Head.svelte` for clean link shares
