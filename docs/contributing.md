# How to update this site

Every page is a Markdown file in the `docs/` folder. If you can edit a README, you can update this site.

## Quick edits (no setup)

1. Click **Suggest a change to this page** at the bottom of any page.
2. Edit on GitHub, describe your change, and open a pull request.
3. Once merged, the site updates itself in about two minutes.

## Bigger edits (on your laptop)

```bash
npm install
npm run dev      # opens a live preview at http://localhost:5173/biyani-onboarding/
```

Edit any `.md` file in `docs/` and the preview updates as you save.

## Where things live

| To change | Edit |
| --- | --- |
| The home page journey (the timetable of steps) | `journey:` list at the top of `docs/index.md` |
| The home page greeting and buttons | Top of `docs/index.md` |
| The sidebar and top menu | `docs/.vitepress/config.mts` |
| Colours and fonts | `docs/.vitepress/theme/custom.css` |
| Any page's text | The matching `.md` file in `docs/` |

## Add a new page

1. Create `docs/<section>/<page-name>.md` starting with `# Page title`.
2. Add one line to the `sidebar` in `docs/.vitepress/config.mts`:
   `{ text: 'Page title', link: '/<section>/<page-name>' }`
3. Preview, commit, open a pull request.

## Useful Markdown extras

```md
::: tip Title
A helpful note (blue).
:::

::: warning Title
Something to be careful about (yellow).
:::

::: danger Title
A rule that must not be broken (red).
:::

- [ ] A checklist item
```

## Writing style

- Write for someone in their first week. Plain words, short sentences.
- Lead with what to do. Explain why afterwards, briefly.
- Prefer a checklist or table over long paragraphs.
- Never include real names of students or clients, passwords or internal URLs that shouldn't be public. If this repo is public, everything in it is public.

## Publishing

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
