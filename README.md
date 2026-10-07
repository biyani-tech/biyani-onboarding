# Biyani Technologies onboarding site

The step-by-step guide for new team members and interns: who we are, setting up, learning Git and AI tools, the 3-day AI sprint, the timetable challenge, and the first 90 days.

Built with [VitePress](https://vitepress.dev). Every page is a Markdown file in `docs/`.

## Publish it (one time)

1. Create a repo on GitHub, for example `biyani-onboarding`, and push this folder to it.
2. In `docs/.vitepress/config.mts`, check that `repo` points at your GitHub organisation.
3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
4. On GitHub: **Settings → Environments → `github-pages` → Deployment branches and tags**, and allow the `production` branch.
5. Push to `production`. The site appears at `https://<your-org>.github.io/biyani-onboarding/` in about two minutes.

`main` is where reviewed work lands; `production` is what is live. See [`docs/contributing.md`](docs/contributing.md) for how to promote one to the other.

GitHub Pages is free for public repos. For a private repo, your GitHub plan must include Pages for private repositories.

## Work on it locally

```bash
npm install
npm run dev
```

## Update it

See [`docs/contributing.md`](docs/contributing.md), or the "How to update this site" page on the live site.
