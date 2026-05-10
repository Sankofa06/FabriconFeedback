# Repository Guidelines

## Project Structure & Module Organization

FabriconFeedback is a public static feedback page and GitHub Issues queue for Fabricon products. The site is intentionally simple: `index.html` is the deployed page, `.github/ISSUE_TEMPLATE/` contains public issue templates, `.github/workflows/` contains the issue bridge, and `README.md` describes the repo. There is no build system, package manager, backend, or generated source.

## Development Commands

Open `index.html` directly for a quick local check, or serve the folder from the repo root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Coding Style & Naming Conventions

Keep the site dependency-light and readable. Use semantic HTML, plain CSS, and vanilla JavaScript only when needed. Keep assets and future supporting files in predictable folders such as `assets/`, `assets/css/`, or `assets/js/`; do not introduce a bundler without an explicit decision.

## Testing Guidelines

Before committing, verify the page loads locally, check browser console errors, and test desktop plus narrow mobile widths. For link changes, click every primary navigation or call-to-action link.

## Commit & Pull Request Guidelines

Use concise Conventional Commit-style messages for repo maintenance, such as `docs: add contributor guide` or `fix: update feedback link`. PRs should describe the visible page change and include a screenshot when layout or styling changes.

## Agent-Specific Notes

This repo is a static public site. Do not add secrets, API tokens, private project links, analytics, or third-party scripts unless explicitly requested.
