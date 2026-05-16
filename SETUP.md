# Setup — Vercel + Cloudflare

This guide walks through connecting this repository to Vercel and exposing it
on `toolkit.moretes.com` via Cloudflare DNS.

## 1. Create the Vercel project

1. Sign in at https://vercel.com with the GitHub account that owns this repo.
2. Click **Add New… → Project** and import `fernandofatech/sa-daily-toolkit`.
3. **Framework preset:** Next.js (auto-detected).
4. **Root directory:** `frontend`.
5. **Build command:** `npm run build` (default).
6. **Output directory:** `.next` (default).
7. Click **Deploy** to confirm the first build works.

## 2. Capture the Vercel IDs

In the project page, open **Settings → General** and copy:

- `Project ID` → maps to `VERCEL_PROJECT_ID`
- `Team ID` (or personal account ID) → maps to `VERCEL_ORG_ID`

Create a token at https://vercel.com/account/tokens → maps to `VERCEL_TOKEN`.

## 3. Configure GitHub Actions secrets

```bash
gh secret set VERCEL_TOKEN      --body "<token>"
gh secret set VERCEL_ORG_ID     --body "<org-id>"
gh secret set VERCEL_PROJECT_ID --body "<project-id>"
```

The next push to `main` triggers a real production deploy via
`.github/workflows/vercel.yml`.

## 4. Attach the custom subdomain

In Vercel: **Settings → Domains → Add** → `toolkit.moretes.com`.

Vercel returns a CNAME target (typically `cname.vercel-dns.com`).

## 5. Cloudflare DNS

In the Cloudflare dashboard for `moretes.com`:

1. **DNS → Records → Add record**
   - **Type:** CNAME
   - **Name:** `toolkit`
   - **Target:** `cname.vercel-dns.com`
   - **Proxy status:** **DNS only** (gray cloud) — required so Vercel can issue
     the TLS certificate.
2. Save and wait for propagation (usually < 1 minute).

## 6. Verify

```bash
curl -I https://toolkit.moretes.com
```

Expect `HTTP/2 200` and `server: Vercel`.
