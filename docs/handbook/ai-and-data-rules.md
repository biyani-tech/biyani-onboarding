# AI and data rules

Short on purpose. The first two can't be broken, by anyone, ever.

::: danger 1. No real data in AI tools, chats or screenshots
Never paste real student, parent, staff or client data, passwords, API keys or connection strings into any AI tool, the WhatsApp group, or a screenshot. Use made-up data. Blur names in screenshots of our products.
:::

::: danger 2. You own every line you commit
If you can't explain a line, don't commit it. "The AI wrote it" is never an answer in a review.
:::

## Working rules

1. **Plan first.** For anything bigger than a one-line fix, get a plan from the agent and check it before any code is written.
2. **Small steps.** One change per prompt; commit after each working step.
3. **Run it before you trust it.** It isn't done until it builds, the tests pass, and you've clicked through it.
4. **Approve commands consciously.** Keep your agent on "ask before running". Read what a command does before you approve it.
5. **Stay in your folder.** Agents like to "improve" files you didn't ask about. Reject those changes.
6. **No new libraries without asking.** Each one is something we maintain for years.
7. **Say what the AI did.** Every pull request explains which parts the agent wrote and how you checked them.
8. **Log your prompts** while you're learning, in `PROMPTS.md`: what worked, what didn't, and why.
9. **Watch for old answers.** Tools often suggest outdated patterns. Name the version you use (".NET 10", "React 19") in your prompts.

## Why we're strict about data

Our software holds personal data about children and young adults. Under India's DPDP rules, most of our users under 18 need verified parental consent, and we must keep audit trails. A careless paste into a chat tool can undo that. So the rule is simple: **no real data, anywhere outside the product itself.**
