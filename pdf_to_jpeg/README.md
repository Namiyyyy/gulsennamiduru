# PDF to JPEG (web-optimised)

Drop PDFs into **`source`** and run the script. It will create one JPEG per page in **`output`**, optimised for the web (good quality, smaller file size).

## Requirements

- **ImageMagick** (for the shell script)
  - Mac: `brew install imagemagick`
  - Or download from https://imagemagick.org/

## Usage

1. Put your PDF(s) in the **`source`** folder.
2. Run the script:
   - **Mac/Linux:** `./convert.sh` or `bash convert.sh`
   - **Windows:** use the Node script (see below).
3. Find JPEGs in **`output/<pdf-name>/`** (e.g. `output/my_zine/page1.jpg`, `page2.jpg`, …).
4. In your project data, use **`pdfImages`** with these paths, e.g.:
   ```js
   pdfImages: [
     "pdf_to_jpeg/output/my_zine/page1.jpg",
     "pdf_to_jpeg/output/my_zine/page2.jpg"
   ]
   ```
   Or copy the folder into `img/` and reference from there.

## Settings

- **Resolution:** 150 DPI (good for web, keeps file size down).
- **Quality:** 90% JPEG (high quality, still web-friendly).

You can change `DPI` and `QUALITY` at the top of `convert.sh`.
