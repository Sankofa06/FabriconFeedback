# Issue Bridge Next Steps

The issue bridge workflows are committed in both repos. Complete these GitHub
settings steps to turn the bridge on.

## 1. Create the token

Create a fine-grained GitHub personal access token named something like
`Fabricon Issue Bridge`.

Required repository access:

- `Sankofa06/AeroTycoonGame`
- `Sankofa06/FabriconFeedback`

Required permissions:

- Issues: Read and write
- Metadata: Read

## 2. Add the secret in both repos

Add the same token as a repository secret named `ISSUE_MIRROR_TOKEN` in:

- `Sankofa06/AeroTycoonGame`
- `Sankofa06/FabriconFeedback`

GitHub path:

`Settings -> Secrets and variables -> Actions -> New repository secret`

## 3. Create the bridge labels

In `Sankofa06/FabriconFeedback`, run the manual workflow:

`Actions -> Setup issue bridge labels -> Run workflow`

That creates the required bridge labels in both repos.

## 4. Use the bridge

Internal to public:

- In `Sankofa06/AeroTycoonGame`, add `public-feedback` to an issue.
- Add public-safe text between:

```md
<!-- public-summary:start -->
Public-safe summary goes here.
<!-- public-summary:end -->
```

Public to internal:

- In `Sankofa06/FabriconFeedback`, add `triage-private` to a public issue.
- The workflow copies it into the internal tracker and leaves a neutral public
  comment.

## 5. Smoke test

- Create one internal test issue with `public-feedback` and a public summary.
- Confirm a public mirror appears in `FabriconFeedback`.
- Create one public test issue and label it `triage-private`.
- Confirm an internal issue appears in `AeroTycoonGame`.
- Delete or close the test issues after verification.
