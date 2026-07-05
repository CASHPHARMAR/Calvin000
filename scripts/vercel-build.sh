#!/usr/bin/env bash
# Vercel build script — uses the Build Output API v3 so Vercel picks up
# the output unconditionally without any outputDirectory path resolution.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Building portfolio..."
pnpm --filter @workspace/portfolio run build

echo "==> Staging Vercel Build Output API structure..."
rm -rf "$REPO_ROOT/.vercel/output"
mkdir -p "$REPO_ROOT/.vercel/output/static"

# Copy vite output into the static tree
cp -r "$REPO_ROOT/artifacts/portfolio/dist/public/." "$REPO_ROOT/.vercel/output/static/"

echo "==> Writing .vercel/output/config.json..."
cat > "$REPO_ROOT/.vercel/output/config.json" << 'EOF'
{
  "version": 3,
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": { "Cache-Control": "public, max-age=31536000, immutable" },
      "continue": true
    },
    {
      "src": "/(.*\\.[a-z0-9]+)",
      "headers": {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY"
      },
      "continue": true
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html",
      "headers": {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY"
      }
    }
  ]
}
EOF

echo "==> Done. Output in .vercel/output/static/"
ls "$REPO_ROOT/.vercel/output/static/"
