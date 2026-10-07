# AI fundamentals

You'll write most code with an AI coding tool. To use one well, you need five ideas: **model, tokens, context, prompts and modes**.

## 1. What the model actually does

A large language model (LLM) reads text and predicts what text should come next, one small piece at a time. It's very good at patterns it has seen, which is why it writes common code well.

It doesn't "know" your project unless you show it. It can be confidently wrong, especially about recent versions of libraries. **Running the code is the only real check.**

## 2. Tokens

Models read and write in **tokens**, chunks of text rather than words. As a rough guide, one token is about four characters of English (approx.). Code, long identifiers and Indian-language text usually take more tokens.

Tokens matter because:

- **Limits** are counted in tokens. Free plans give you a fixed allowance, and a long session can use it up fast.
- **Cost** on paid plans and APIs is per token, both for what you send and what you get back.
- **Context** (next section) is measured in tokens.

**Habit:** point the tool at files instead of pasting huge blocks, and start a new session for a new task.

## 3. Context window

The **context window** is everything the model can see at once: your messages, its replies, the files it opened and command output. It's large but not unlimited.

When it fills up, tools drop or summarise older parts, and quality drops: the model forgets your earlier instructions.

**Habits:**

- One task per session. Finished the form? Start fresh for the tests.
- Put lasting rules in a file the tool always reads (`AGENTS.md`, `CLAUDE.md`), not in a chat message you'll scroll past.
- Paste the **full** error message: it's the most useful context you can give.

## 4. Prompts

A prompt is your instruction. A good one has four parts:

| Part | Example |
| --- | --- |
| **Context** | "In lanes/2-dotnet-razor, a .NET 10 Razor Pages app on PostgreSQL…" |
| **Task** (one thing) | "Add rule R3: block a faculty member being booked twice in one slot." |
| **Constraints** | "Only change TimetableService.cs and its tests. No new packages." |
| **Output** | "First explain your approach in three steps, then show the code." |

Weak vs strong:

| Weak | Strong |
| --- | --- |
| "make the form" | "Read docs/timetable-spec.md, Screen 2. Build the entry form with the fields in that table. Use the existing schema. List the files you'll create before writing any code." |
| "it's broken, fix it" | "`dotnet test` fails with this error: [full error]. It started after I added the batch field. Explain the cause in two sentences, then give the smallest fix." |
| "write tests" | "Write one test per rule R1–R4 using the seed data. Work out each expected result by hand from the spec, not from the code." |

## 5. Modes: autocomplete, chat, agent, plan

| Mode | What it does | Use it for |
| --- | --- | --- |
| **Autocomplete** | Suggests the next few lines as you type | Small, obvious code |
| **Chat / ask** | Answers questions; doesn't change files | Understanding code, errors, concepts |
| **Agent** | Reads files, edits several of them, runs commands, checks results | Building a feature end to end |
| **Plan mode** | The agent investigates and writes a plan, but changes nothing until you approve | The start of every non-trivial task |

Most agent tools have a planning mode, though names differ (Claude Code calls it plan mode; Antigravity lets you choose a planning-style conversation). If your tool has none, say: "Don't change any files yet. Give me a plan."

**Our rule: plan first, approve, then build in small steps.**

## Approvals and permissions

Agents can run terminal commands. Keep your tool on **"ask before running commands"** while you learn. Before approving, ask yourself: could this delete files, push code, or touch something outside my folder?

## Rules files

| File | Read by |
| --- | --- |
| `AGENTS.md` | Codex, Copilot and many other tools. If Antigravity doesn't pick it up, add it as a workspace rule or name it in your first prompt |
| `CLAUDE.md` | Claude Code (ours just points to `AGENTS.md`) |
| `.github/copilot-instructions.md` | GitHub Copilot |

Our repos keep one `AGENTS.md` as the source of truth.

## Practise

Take the [free courses](/learn/courses), then try each idea in the [3-day AI sprint](/training/ai-sprint).
