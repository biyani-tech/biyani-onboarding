# Set up your laptop

Install these in order. Each line ends with a command to check it worked.

| # | Install | Check it worked |
| --- | --- | --- |
| 1 | [Git](https://git-scm.com/downloads) | `git --version` |
| 2 | [VS Code](https://code.visualstudio.com/) | `code --version` |
| 3 | [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows: allow it to set up WSL 2) | `docker run hello-world` |
| 4 | [.NET 10 SDK](https://dotnet.microsoft.com/download) | `dotnet --version` shows 10.x |
| 5 | [Node.js LTS](https://nodejs.org/) | `node --version` |
| 6 | [Google Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity) | Opens and you can sign in |
| 7 | Your lane's extra tools, if any | See your lane in the [timetable challenge](/training/timetable-challenge) |

## Set your Git identity

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Use the same email as your GitHub account.

## VS Code extensions

- C# (`ms-dotnettools.csharp`)
- GitHub Pull Requests (`github.vscode-pull-request-github`)
- Your lane's extensions (listed in the challenge repo)

## When something fails

1. Copy the **whole** error message, not a photo of the screen.
2. Ask your AI tool: "I'm installing X on Windows 11. This command failed with this error: [paste]. Explain the cause, then the smallest fix."
3. Still stuck after 30 minutes? Post the error and what you tried in the WhatsApp group.
