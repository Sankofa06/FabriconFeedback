# FabriconFeedback

Static public site and GitHub Issues feedback queue for Fabricon products,
especially AeroTycoon / Fabricon Aerospace.

The paired app repository is `Sankofa06/AeroTycoonGame`. This repository stays
public so GitHub Pages, issue templates, and player feedback can live outside
the app tracker.

## Pages

| File | Purpose | Deployed URL |
|---|---|---|
| `index.html` | Public static page | `https://sankofa06.github.io/FabriconFeedback/` |

## Structure

- `index.html` — deployed static page.
- `.github/ISSUE_TEMPLATE/` — public bug and feature request templates.
- `.github/workflows/` — issue bridge workflows.
- `ISSUE_BRIDGE_NEXT_STEPS.md` — one-time GitHub setup checklist.
- `AGENTS.md` — contributor and Codex guidance.

## Deployment

This repo is intended to be public with GitHub Pages enabled:

1. In `Sankofa06/FabriconFeedback`, go to Settings -> Pages.
2. Set Source to `Deploy from a branch`.
3. Set Branch to `main` / `(root)`.
4. Push changes to `main`; Pages should publish within a minute or two.

## Issue Bridge

This public repo can copy feedback into `Sankofa06/AeroTycoonGame` through
`.github/workflows/public-to-private-issue-sync.yml`.

- Add `triage-private` to a public issue to create an internal issue titled
  `[Public feedback #N] ...`.
- The public issue is then labeled `internal-tracked` and `synced`, and gets a
  neutral confirmation comment.
- `Sankofa06/AeroTycoonGame` can mirror selected internal issues back here with
  its `private-to-public-issue-sync.yml` workflow.
- Both repos need an `ISSUE_MIRROR_TOKEN` secret with Issues read/write access.
- After adding the secret, run `Setup issue bridge labels` in this repo once.

See `ISSUE_BRIDGE_NEXT_STEPS.md` for the full setup checklist.

## Local Preview

Open `index.html` directly, or serve the repo root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Development Notes

Keep this repo static and public-safe. Do not commit secrets, private product details, generated build output, or third-party tracking scripts.
