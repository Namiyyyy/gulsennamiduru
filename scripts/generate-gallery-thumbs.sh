#!/usr/bin/env bash
# Build wire-gallery thumbnails: img/<project>/thumbs/<same basename>
# Uses macOS sips (longest edge max). Re-run after adding photos.
set -euo pipefail
MAX_EDGE="${1:-560}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

for segment in architecture_of_sky abandoned_battleground hiyeroglifler; do
    dir="$ROOT/img/$segment"
    [[ -d "$dir" ]] || continue
    out="$dir/thumbs"
    mkdir -p "$out"
    find "$dir" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) ! -path '*/thumbs/*' |
        while IFS= read -r f; do
            [[ -f "$f" ]] || continue
            bn="$(basename "$f")"
            dest="$out/$bn"
            if command -v sips >/dev/null 2>&1; then
                sips -Z "$MAX_EDGE" "$f" --out "$dest" >/dev/null 2>&1 || cp "$f" "$dest"
            else
                echo "sips not found; copying full file to $dest" >&2
                cp "$f" "$dest"
            fi
        done
done

echo "Gallery thumbs updated (max edge ${MAX_EDGE}px)."
