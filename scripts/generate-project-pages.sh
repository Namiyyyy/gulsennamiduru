#!/usr/bin/env bash
# Regenerate per-project pages at /{slug}/index.html from portfolio slugs in index.js.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
JS="$ROOT/index/index.js"
ASSET_V="${ASSET_V:-202604231200}"

slugs=(
  voices-of-leopoldplatz
  pirate-pedagogies
  sylwester-stalker
  book-of-textures
  abandoned-battleground
  architectures-of-sky
  hieroglyphs
)

titles=(
  "Voices of Leopoldplatz"
  "Pirate Pedagogies"
  "Sylwester Stalker"
  "Book of Textures"
  "Abandoned Battleground"
  "Architectures Of Sky"
  "Hieroglyphs"
)

render_page() {
  local slug="$1"
  local title="$2"
  local out_dir="$ROOT/$slug"
  mkdir -p "$out_dir"
  cat > "$out_dir/index.html" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — Gülsen Namıduru</title>
    <link rel="stylesheet" href="../index/index.css?v=${ASSET_V}">
</head>
<body class="project-page">
    <div class="container">
        <header class="landing-header">
            <div class="landing-top-bar">
                <div class="landing-top-bar__col landing-top-bar__col--name">
                    <a href="../index.html" class="landing-nav-link">Gülsen Namıduru</a>
                </div>
                <div class="landing-top-bar__col">
                    <a href="../index.html#about-section" class="landing-nav-link">About</a>
                </div>
                <div class="landing-top-bar__col">
                    <a href="../index.html#works-landing" class="landing-nav-link">Observer</a>
                </div>
                <div class="landing-top-bar__col landing-top-bar__col--contact">
                    <a href="mailto:namidurugg@gmail.com" class="landing-nav-link">Email</a><span class="landing-top-bar__sep">, </span><a href="https://www.instagram.com/gnamiduru/?hl=en" target="_blank" rel="noopener noreferrer" class="landing-nav-link landing-nav-link--external">Instagram</a><span class="landing-ext-arrow" aria-hidden="true">↗</span>
                </div>
            </div>
        </header>

        <main class="project-page-main" aria-label="${title}">
            <div
                id="project-sections"
                class="project-sections project-sections--single"
                data-page-mode="single"
                data-project-slug="${slug}"
                aria-label="Work"
            ></div>
        </main>

        <div id="image-lightbox" class="image-lightbox" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Image viewer">
            <button type="button" class="image-lightbox-close" aria-label="Close">×</button>
            <button type="button" class="image-lightbox-prev" aria-label="Previous image">‹</button>
            <button type="button" class="image-lightbox-next" aria-label="Next image">›</button>
            <div class="image-lightbox-stage">
                <img id="image-lightbox-img" src="" alt="" decoding="async" />
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <script src="../index/index.js?v=${ASSET_V}"></script>
</body>
</html>
EOF
  echo "Wrote $out_dir/index.html"
}

for i in "${!slugs[@]}"; do
  render_page "${slugs[$i]}" "${titles[$i]}"
done

echo "Done. ${#slugs[@]} project pages."
