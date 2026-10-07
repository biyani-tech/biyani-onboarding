# Git and GitHub

**Git** keeps the full history of your code on your laptop. **GitHub** is the website where the team shares that history, reviews changes and runs automated checks. You'll use both every day.

## The ideas, in plain words

| Word | Means |
| --- | --- |
| Repository (repo) | A project folder whose full history Git tracks |
| Commit | A saved snapshot with a message saying what changed and why |
| Branch | A separate line of work, so your changes don't disturb anyone else's |
| `main` | The shared branch that must always work. Nobody pushes to it directly |
| Remote | The copy of the repo on GitHub (usually called `origin`) |
| Push / pull | Send your commits to GitHub / bring others' commits to your laptop |
| Pull request (PR) | "Please review my branch and merge it into `main`" |
| Review | A teammate reads your PR, comments, and approves or asks for changes |
| Merge conflict | Two people changed the same lines; Git asks you to choose |
| CI | Automated checks (build, tests) that run on every PR |

## The daily loop

```bash
git switch main
git pull                                # get the latest
git switch -c fix-timetable-clash       # new branch for your task

# ...work, with your AI tool...

git status                              # what changed?
git diff                                # read every line before committing
git add -A
git commit -m "Block faculty double-booking (R3)"
git push -u origin fix-timetable-clash  # then open a PR on GitHub
```

## Our conventions

- **Branch names:** short and descriptive, e.g. `lane-2-priya` or `fix-room-clash-message`.
- **Commit messages:** say *what* and *why* in one line, in the present tense. "Add batch field to entry form", not "changes" or "final".
- **Small PRs:** one idea per PR. Easier to review, easier to undo.
- **Fill in the PR template**, including what the AI did and how you checked it.
- **Never commit secrets:** passwords, API keys, connection strings or `.env` files.

## Undo, safely

| Situation | Command |
| --- | --- |
| Throw away changes to one file | `git restore path/to/file` |
| Unstage a file you added by mistake | `git restore --staged path/to/file` |
| Fix the message of your last commit (not yet pushed) | `git commit --amend` |
| Go back to how a file was in `main` | `git restore --source main path/to/file` |

When in doubt, ask before using anything with `--force` or `reset --hard`.

## Using AI with Git

Agents can run Git for you. Before you approve a Git command, ask: "What will this command do, and can it lose work?" Read every diff before it's committed.

## Practise

- [Introduction to GitHub](https://skills.github.com), then "Review pull requests" and "Resolve merge conflicts" (GitHub Skills)
- [Learn Git Branching](https://learngitbranching.js.org/), a visual game for branches and merges
