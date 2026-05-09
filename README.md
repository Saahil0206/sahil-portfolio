# Sahil Bhattacharya — Quarto Portfolio

## Quick Start (Mac)

```bash
cd ~/Desktop/sahil-portfolio

# Preview locally (live reload)
quarto preview

# Render final site → docs/
quarto render
```

## Before running, add:
- `cv/sahil-bhattacharya-cv.pdf`  ← your CV
- Replace `YOUR_FORMSPREE_ID` in `contact.qmd` ← free at formspree.io

## GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Saahil0206/YOUR-REPO-NAME.git
git push -u origin main
```
Then: GitHub repo → Settings → Pages → Branch: main, Folder: /docs → Save.

Site will be live at: `https://Saahil0206.github.io/YOUR-REPO-NAME/`
