# Timetable stack challenge

Four interns build **the same small timetable feature**, each on a different combination of backend and database, and each with a different AI tool. Then we compare.

The code lives in the challenge repository: **[timetable-stack-challenge](https://github.com/biyani-tech/timetable-module-challenge)**. Its README is the full brief. This page is the summary.

## What you build: one form, one report

| Screen | Who uses it | What it does |
| --- | --- | --- |
| **Lecture form** | A teacher | Pick teacher, class, subject and period, tick the days of the week, save. One save can add the same lecture on several days |
| **Timetable report** | Students, the headmaster or admin | The week as a grid. **By class** shows what one class has each period. **By teacher** shows one teacher's week, or every teacher's for the headmaster |

The form stops two kinds of clash: a class with two lectures in the same period, and a teacher in two classes at once. If any ticked day clashes, nothing is saved, and the form lists every clash so the teacher can fix them in one go.

Teachers, classes, subjects and periods are already in the database, so there's nothing else to build.

## The four lanes

Everyone builds the screens in React. The lanes differ in backend and database:

| Lane | Backend | Database | AI tool |
| --- | --- | --- | --- |
| 1 | C# .NET 10 | PostgreSQL | Google Antigravity |
| 2 | C# .NET 10 | SQL Server Express | GitHub Copilot |
| 3 | Python (FastAPI) | PostgreSQL | OpenAI Codex |
| 4 | Python (FastAPI) | SQL Server Express | Google Antigravity |

The lanes form a grid, so each comparison changes one thing at a time:

|  | PostgreSQL | SQL Server Express |
| --- | --- | --- |
| **.NET 10** | Lane 1: our target stack | Lane 2: new backend, today's database |
| **Python** | Lane 3 | Lane 4 |

- **Across a row** (1 vs 2, 3 vs 4): what does the database choice change?
- **Down a column** (1 vs 3, 2 vs 4): what does the backend language change?

Your trainer assigns lanes. To change the combinations, edit this table and the repo's README.

## What everyone shares

- **One spec** with four rules (R1–R4), such as "a teacher can't teach two classes in the same period."
- **The same tables and made-up seed data** on both databases, so results are comparable.
- **One API contract**, so any lane's React app works with any other lane's API. On Day 3 you prove it with a swap test.
- **Ten acceptance checks**: A1–A6 for the form, A7–A10 for the report.
- **One scorecard** everyone fills in on Day 3.

## What you hand in

- Working code in your lane's folder, runnable from its README
- A `ci.sh` that builds and tests it
- `PROMPTS.md`: your prompt log
- Your column of the scorecard
- A reviewed pull request

## Why we do this

You learn the most from one small, real feature built with care. And the team learns something too: two backends, two databases and four AI tools compared on our own problem, not on someone's blog.
