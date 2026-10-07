# Biyani Technologies onboarding site

The step-by-step guide for new team members and interns: who we are, setting up, learning Git and AI tools, the 3-day AI sprint, the timetable challenge, and the first 90 days.

Built with [VitePress](https://vitepress.dev). Every page is a Markdown file in `docs/`.

## Publish it (one time)

1. Create a repo on GitHub, for example `biyani-onboarding`, and push this folder to it.
2. In `docs/.vitepress/config.mts`, check that `repo` points at your GitHub organisation.
3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Push to `main`. The site appears at `https://<your-org>.github.io/biyani-onboarding/` in about two minutes.

GitHub Pages is free for public repos. For a private repo, your GitHub plan must include Pages for private repositories.

## Work on it locally

```bash
npm install
npm run dev
```

## Update it

See [`docs/contributing.md`](docs/contributing.md), or the "How to update this site" page on the live site.
