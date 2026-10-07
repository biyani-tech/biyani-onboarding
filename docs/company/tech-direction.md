# Where our tech is heading

We're moving from one Windows server per client to **one shared, multi-tenant cloud platform**. You'll join in the middle of this, so here is the short version.

## The target stack

| Layer | We're moving to | Why |
| --- | --- | --- |
| Backend | C# on .NET 10 (long-term support), one modular application | Our team already knows C#; it's fast, free and supported to Nov 2028 |
| Web | React + TypeScript + Vite | The biggest frontend community and the one AI tools know best |
| Mobile, lab and panels | Flutter | One codebase for Android, iOS, lab PCs and classroom panels |
| Database | PostgreSQL | No licence fees; one database covers data, search and AI features |
| Hosting | Ubuntu + Docker on an Indian cloud, Cloudflare in front | Rupee billing, data stays in India, far less server upkeep |
| Code | Git, with pull requests and automated checks | Every change reviewed and tested before it ships |

## What we're deliberately not doing

Microservices, Kubernetes from day one, NoSQL databases, a separate vector database, Kafka, Blazor, Next.js for the main product, and any big-bang rewrite.

We stay open to new tools where they clearly help, for example Python for analytics. The [timetable challenge](/training/timetable-challenge) is partly a way to test that openness with real numbers.

## Two deadlines that shape our work

| Date | What happens |
| --- | --- |
| 10 November 2026 | .NET 8 and 9 stop getting security fixes, so everything moves to .NET 10 |
| 13 May 2027 | India's DPDP rules on children's data become enforceable: verified parental consent and audit trails for every user under 18 |
