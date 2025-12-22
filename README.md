# Personal Website — zhaodong-lyu.github.io

This repository contains a lightweight personal website built with plain HTML, CSS, and JavaScript. It includes an academic profile and a photography gallery and is ready to be deployed to GitHub Pages.

## Features
# Personal Website — zhaodong-lyu.github.io

This repository contains a lightweight personal website built with plain HTML, CSS, and JavaScript. It includes an academic profile and a photography gallery and is ready to be deployed to GitHub Pages.

## Features

- Responsive layout for desktop and mobile
- Sections: Home, Academic, Photography, Contact
- Photography gallery with theme and date filters and a lightbox viewer
- Easy customization with no build step required
- Optional GitHub Actions workflow included for automated deployment

## Project Structure

```
personal-website/
├── index.html              # Main page
├── README.md               # This document
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   └── script.js      # Client-side scripts
│   ├── images/
│   │   ├── avatar.jpg     # Avatar image
│   │   ├── cv.pdf         # Resume PDF
│   │   └── photography/   # Photography images
└── .github/
    └── workflows/
        └── deploy.yml     # Optional GitHub Actions workflow
```

## Quick Start

### 1) Create the repository on GitHub

1. Go to https://github.com and sign in.
2. Create a new public repository named exactly `zhaodong-lyu.github.io`.

### 2) Push this project to GitHub

Run these commands from the `personal-website` directory:

```bash
git init
git branch -M main
git add .
git commit -m "Initial personal site"
git remote add origin https://github.com/zhaodong-lyu/zhaodong-lyu.github.io.git
git push -u origin main
```

### 3) Enable GitHub Pages

You can use the Static HTML option in the Pages settings (recommended for this project), or enable the included GitHub Actions workflow in `.github/workflows/deploy.yml`.

After deployment, your site will be available at:

`https://zhaodong-lyu.github.io`

## Customization

### Personal Info

Edit `index.html` to update your name, title, bio, contact links, and other text content.

### Resume and Avatar

- Place your resume at `assets/cv.pdf`.
- Place your avatar at `assets/images/avatar.jpg` (square image recommended).

### Photography Gallery

1. Copy your photos into `assets/images/photography/`.
2. Edit the `photographyData` array inside `assets/js/script.js` to add entries for each photo.

Example entry:

```javascript
{
  id: 1,
  title: "Sunrise on the Ridge",
  theme: "Landscape",     // e.g. Landscape, Portrait, Architecture, Macro, Other
  date: "2024-01-15",     // YYYY-MM-DD
  year: 2024,
  month: 1,
  image: "assets/images/photography/photo1.jpg"
}
```

The gallery UI supports filtering by theme and year and includes a lightbox viewer with keyboard navigation.

## Deployment Options

- Static HTML (simple): Use GitHub Pages Static HTML option in repository Settings → Pages.
- GitHub Actions (automated): The repository already includes `.github/workflows/deploy.yml` for deploying via Actions.

## Performance Tips

1. Optimize images (use WebP where appropriate and create smaller thumbnails).
2. Use lazy loading for large image lists (the current code uses `loading="lazy"`).
3. Minify CSS and JS for production if needed.

## Contact & Support

If you need help customizing the site or automating image processing, open an issue or edit the files directly. The key files to edit are `index.html` and `assets/js/script.js`.

---

You can now push changes and visit `https://zhaodong-lyu.github.io` to preview your site.
---

You can now push changes and visit `https://zhaodong-lyu.github.io` to preview your site.
git remote add origin https://github.com/zhaodong-lyu/zhaodong-lyu.github.io.git

# 推送到GitHub
编辑以下文件来个性化你的主页：
# Personal Website — zhaodong-lyu.github.io

This repository contains a lightweight personal website built with plain HTML, CSS, and JavaScript. It includes an academic profile and a photography gallery and is ready to be deployed to GitHub Pages.

## Features

- Responsive layout for desktop and mobile
- Sections: Home, Academic, Photography, Contact
- Photography gallery with theme and date filters and a lightbox viewer
- Easy customization with no build step required
- Optional GitHub Actions workflow included for automated deployment

## Project Structure

```
personal-website/
├── index.html              # Main page
├── README.md               # This document
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   └── script.js      # Client-side scripts
│   ├── images/
│   │   ├── avatar.jpg     # Avatar image
│   │   ├── cv.pdf         # Resume PDF
│   │   └── photography/   # Photography images
└── .github/
    └── workflows/
        └── deploy.yml     # Optional GitHub Actions workflow
```

## Quick Start

### 1) Create the repository on GitHub

1. Go to https://github.com and sign in.
2. Create a new public repository named exactly `zhaodong-lyu.github.io`.

### 2) Push this project to GitHub

Run these commands from the `personal-website` directory:

```bash
git init
git branch -M main
git add .
git commit -m "Initial personal site"
git remote add origin https://github.com/zhaodong-lyu/zhaodong-lyu.github.io.git
git push -u origin main
```

### 3) Enable GitHub Pages

You can use the Static HTML option in the Pages settings (recommended for this project), or enable the included GitHub Actions workflow in `.github/workflows/deploy.yml`.

After deployment, your site will be available at:

`https://zhaodong-lyu.github.io`

## Customization

### Personal Info

Edit `index.html` to update your name, title, bio, contact links, and other text content.

### Resume and Avatar

- Place your resume at `assets/cv.pdf`.
- Place your avatar at `assets/images/avatar.jpg` (square image recommended).

### Photography Gallery

1. Copy your photos into `assets/images/photography/`.
2. Edit the `photographyData` array inside `assets/js/script.js` to add entries for each photo.

Example entry:

```javascript
{
  id: 1,
  title: "Sunrise on the Ridge",
  theme: "Landscape",     // e.g. Landscape, Portrait, Architecture, Macro, Other
  date: "2024-01-15",     // YYYY-MM-DD
  year: 2024,
  month: 1,
  image: "assets/images/photography/photo1.jpg"
}
```

The gallery UI supports filtering by theme and year and includes a lightbox viewer with keyboard navigation.

## Deployment Options

- Static HTML (simple): Use GitHub Pages Static HTML option in repository Settings → Pages.
- GitHub Actions (automated): The repository already includes `.github/workflows/deploy.yml` for deploying via Actions.

## Performance Tips

1. Optimize images (use WebP where appropriate and create smaller thumbnails).
2. Use lazy loading for large image lists (the current code uses `loading="lazy"`).
3. Minify CSS and JS for production if needed.

## Contact & Support

If you need help customizing the site or automating image processing, open an issue or edit the files directly. The key files to edit are `index.html` and `assets/js/script.js`.

---

You can now push changes and visit `https://zhaodong-lyu.github.io` to preview your site.
│   │   ├── cv.pdf         # Resume PDF
