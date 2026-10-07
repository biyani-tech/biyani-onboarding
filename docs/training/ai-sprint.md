# 3-day AI sprint

Three days to go from "I've used ChatGPT" to "I can build a real feature with an AI agent and explain every line." Day 1 is concepts and Git; days 2 and 3 are the [timetable challenge](/training/timetable-challenge).

The rule for all three days: **you don't hand-type code.** You direct the agent, read every change, and keep only what you can explain.

## Sprint day 1: concepts, tools, Git

| Time | What happens |
| --- | --- |
| 9:30 | Stand-up in the WhatsApp group: one line each on how setup went |
| 9:45–10:45 | **How LLMs work:** tokens, the context window, why models are confidently wrong. Live demo: the same question with too little and with enough context |
| 10:45–11:30 | **Prompting:** context, task, constraints, output. Pairs rewrite three weak prompts and compare results |
| 11:45–12:45 | **Modes and tools:** autocomplete vs chat vs agent vs plan mode. The trainer does one small task in Antigravity, Claude Code, Codex and Copilot, side by side |
| 14:00–15:00 | **Git and GitHub through the agent:** clone, branch, commit, push, pull request, review. Ask the agent to explain each command before you approve it |
| 15:00–16:30 | **Challenge kick-off:** clone the challenge repo, start the database, read the spec, get your agent's plan. Post a plan summary in the group |
| 16:30–17:00 | Trainer approves plans; questions |
| Evening | [Claude Code: A Highly Agentic Coding Assistant](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/) (about 1 hr 50 min) |

## Sprint day 2: build

| Time | What happens |
| --- | --- |
| 9:30 | Stand-up: done, doing, blocked |
| 9:45–10:30 | Trainer demo: tests first from the spec, then build until green; reject an agent step that goes off track |
| 10:30–13:00 | Build the weekly grid and entry form; commit after every working step |
| 14:00–16:30 | Add rules R1–R8; open a draft pull request; CI runs |
| 16:30–17:15 | Two interns demo; the trainer asks "why is this line here?" |
| Evening | [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/) (part 1) |

## Sprint day 3: finish, review, compare

| Time | What happens |
| --- | --- |
| 9:30 | Stand-up |
| 9:45–12:00 | Finish acceptance checks; review one other lane's pull request, then ask your AI tool to review it and compare findings |
| 12:00–13:00 | Safety pass: no real data, no secrets, parameterised queries |
| 14:00–15:00 | Fill in your column of the scorecard; finish `PROMPTS.md` |
| 15:00–16:30 | **Demo day:** 10 minutes per lane, then compare stacks and tools as a team |
| 16:30–17:00 | Retro in the group: keep, drop, try next time |

## How you're assessed

| What | Weight | Looks like |
| --- | --- | --- |
| Understanding | 30% | You explain any line the trainer points at |
| Spec and rules | 25% | Every rule has a test; acceptance checks pass |
| AI judgement | 20% | `PROMPTS.md` shows plans, steering and rejected suggestions |
| GitHub habits | 15% | Small commits, clear PR description, review comments answered |
| Data and secrets | Pass/fail | No real data or secrets anywhere |
