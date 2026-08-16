# zamoradelatorre.com

Personal blog and portfolio site built with [SvelteKit](https://kit.svelte.dev/). Deployed on [Netlify](https://www.netlify.com/).

## Stack

- **Svelte 5 / SvelteKit 2** — meta-framework and components
- **Vite 8** — build tooling
- **Tailwind CSS 4** — utility-first CSS (CSS-first config in `src/app.css`, Vite plugin in `vite.config.js`)
- **mdsvex** — Markdown posts (`src/lib/data/posts/`) rendered as Svelte components
- **TypeScript 6** — type checking via `svelte-check`
- **ESLint 10** (flat config `eslint.config.js`) + **Prettier**
- **@sveltejs/adapter-netlify** — serverless adapter for Netlify

## Getting started

Requires **Node.js 24 (LTS)**. The repo pins it via `.nvmrc` (and `netlify.toml` sets `NODE_VERSION` for the Netlify build).

```bash
nvm use        # switches to the pinned Node 24 LTS
npm install
npm run dev
```

## Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the dev server                       |
| `npm run build`   | Production build (emits to `.svelte-kit/`) |
| `npm run preview` | Preview the production build               |
| `npm run check`   | `svelte-kit sync` + `svelte-check` (types) |
| `npm run lint`    | Prettier check + ESLint                    |
| `npm run format`  | Prettier write                             |

## Deployment

Netlify builds with `npm run build` and publishes the `build/` output (see `netlify.toml`). Pushing to `master` triggers a deploy; the site uses SvelteKit's `prerender` with a serverless API route for the "what they say" endpoint.

## Content

- Posts live in `src/lib/data/posts/*.md` (frontmatter `type`, `layout`, `tags`, `date`, etc.).
- `type` controls the route segment (`blog` or `projects`); `layout` selects the renderer (`article` or `microreviews`).
- Site-wide data (author, socials, pages) is in `src/lib/data/`.

---

### Design notes (original author)

fondo claro
https://huemint.com/website-2/#palette=edeae5-37414f-d45143-186688
https://huemint.com/website-2/#palette=fdf7f3-583749-007280-c33f3b

fondo oscuro
https://huemint.com/website-2/#palette=0e2a2a-fafbfb-b6784a-51b1e4
https://huemint.com/website-2/#palette=212120-dbdede-cd632b-1db1a6
https://huemint.com/website-2/#palette=141517-08db9f-fb671b-61c3ce
https://huemint.com/website-2/#palette=2f2b2c-f9fffc-74aa70-178add

TODO:

- tema oscuro
- pags de error
