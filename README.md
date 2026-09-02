# dwwr.github.io

Personal site, rebuilt as a React + Vite app. Editorial content is managed with [TinaCMS](https://tina.io/) as JSON under `content/`.

## Development

```bash
npm install
npm run dev
```

- Site: [http://localhost:5173](http://localhost:5173)
- Tina admin: [http://localhost:5173/admin/index.html](http://localhost:5173/admin/index.html)

Edits in Tina write to `content/**/*.json`. Commit those files and push to deploy.

UI chrome (ARIA labels, button text) stays in `src/content/uiChrome.ts`.

## Build

```bash
npm run build
npm run preview
```

CI uses local Tina build (`--local --skip-cloud-checks`) so GitHub Pages does not need Tina Cloud credentials.

## Storybook

```bash
npm run storybook
npm run build-storybook
```

Pushes to `main` deploy the production build and Storybook to GitHub Pages (`/` and `/storybook/`).

## Optional: Tina Cloud

To edit via `/admin` on the live site, create a project at [app.tina.io](https://app.tina.io), set `TINA_PUBLIC_CLIENT_ID` / `TINA_TOKEN` (see `.env.example`), and switch the build script to `tinacms build` without `--local --skip-cloud-checks`.
