#!/usr/bin/env bash
# Convert all PDFs in source/ to web-optimised JPEGs (one per page) in output/<pdf-name>/

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="${SCRIPT_DIR}/source"
OUTPUT_DIR="${SCRIPT_DIR}/output"

# Web-friendly: 150 DPI, 90% quality, max width 1600px
DPI=150
QUALITY=90
MAX_WIDTH=1600

mkdir -p "$SOURCE_DIR" "$OUTPUT_DIR"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "No source/ folder. Creating it. Put your PDFs in pdf_to_jpeg/source/"
  exit 0
fi

for pdf in "$SOURCE_DIR"/*.pdf; do
  [ -f "$pdf" ] || continue
  name=$(basename "$pdf" .pdf)
  dest="${OUTPUT_DIR}/${name}"
  mkdir -p "$dest"
  echo "Converting: $pdf -> $dest/"
  # One JPEG per page (page001.jpg, page002.jpg, ...)
  if command -v magick &>/dev/null; then
    magick convert -density "$DPI" "$pdf" -quality "$QUALITY" "$dest/page%03d.jpg"
  else
    convert -density "$DPI" "$pdf" -quality "$QUALITY" "$dest/page%03d.jpg"
  fi
  # Rename page001.jpg -> page1.jpg, page002.jpg -> page2.jpg, etc.
  for f in "$dest"/page*.jpg; do
    [ -f "$f" ] || continue
    base=$(basename "$f" .jpg)
    num=$(echo "$base" | sed 's/page0*//')
    newpath="$dest/page$num.jpg"
    [ "$f" != "$newpath" ] && mv "$f" "$newpath"
  done
done

echo "Done. Check pdf_to_jpeg/output/"
