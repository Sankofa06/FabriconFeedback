# Repository Guidelines

## Project Structure & Module Organization

FabriconFeedback is the public support site, feedback board, and GitHub Issues queue for Fabricon Aerospace. The site is intentionally simple: `index.html`, `feedback.html`, `privacy.html`, and `assets/` are served by GitHub Pages; `worker/` contains the Cloudflare Worker relay used for no-account issue creation; `.github/ISSUE_TEMPLATE/` contains public issue templates; `.github/workflows/` contains the issue bridge. There is no bundler or generated source.

## Development Commands

Open `index.html`, `feedback.html`, or `privacy.html` directly for a quick local check, or serve the folder from the repo root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. To test the Worker locally, run its Node tests from `worker/`:

```sh
node --test index.test.mjs
```

## Coding Style & Naming Conventions

Keep the site dependency-light and readable. Use semantic HTML, plain CSS, vanilla JavaScript, and the existing Worker module style; do not introduce a bundler without an explicit decision.

## Testing Guidelines

Before committing, verify the pages load locally, check browser console errors, run `node --test worker/index.test.mjs`, and test desktop plus narrow mobile widths. For link changes, click every primary navigation or call-to-action link.

## Commit & Pull Request Guidelines

Use concise Conventional Commit-style messages for repo maintenance, such as `docs: add contributor guide` or `fix: update feedback link`. PRs should describe the visible page change and include a screenshot when layout or styling changes.

## Agent-Specific Notes

This repo is public. Do not add secrets, API tokens, private project links, analytics, or third-party scripts unless explicitly requested. Worker secrets must be stored in Cloudflare, never committed.
