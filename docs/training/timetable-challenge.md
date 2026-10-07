# Timetable stack challenge

Four interns rebuild **the same timetable entry form** from our College Management System, each on a different stack and with a different AI tool. Then we compare.

The code lives in the challenge repository: **[timetable-stack-challenge](https://github.com/biyani-tech/timetable-stack-challenge)**. Its README is the full brief. This page is the summary.

::: warning The repo is not published yet
Your trainer will share the link and add you to it on sprint day 1. If the link above gives you a 404, that is why; it is not something you have done wrong.
:::

## The four lanes

| Lane | Stack | AI tool | Why it's here |
| --- | --- | --- | --- |
| 1 | .NET 10 Web API + React (Vite, TypeScript) + PostgreSQL | Google Antigravity | Our target stack |
| 2 | .NET 10 Razor Pages + EF Core + PostgreSQL | GitHub Copilot | Closest to our legacy screens; no separate front end |
| 3 | Python FastAPI + React (Vite, TypeScript) + PostgreSQL | OpenAI Codex | Tests Python, which we may use for analytics and AI |
| 4 | Next.js (TypeScript, full-stack) + PostgreSQL | Claude Code | Tests the "Next.js for simplicity" idea with real numbers |

Your trainer assigns lanes. To change the combinations, edit this table and the repo's README.

## What everyone shares

- **One database:** the same PostgreSQL schema and made-up seed data.
- **One spec:** the fields, screens and eight rules (R1–R8), such as "a faculty member can't teach two classes in the same period."
- **One API contract** for lanes with an API, so lanes 1, 3 and 4 can be compared like for like.
- **Twelve acceptance checks** (A1–A12) everyone demos.
- **One scorecard** everyone fills in on day 3.

## What you hand in

- Working code in your lane's folder, runnable from its README
- A `ci.sh` that builds and tests it
- `PROMPTS.md`: your prompt log
- Your column of the scorecard
- A reviewed pull request

## Why we do this

You learn the most from one small, real feature built with care. And the team learns something too: four stacks and four AI tools compared on our own problem, not on someone's blog.
