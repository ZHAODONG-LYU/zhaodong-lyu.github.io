# 个人主页 - zhaodong-lyu.github.io

这是一个使用纯HTML、CSS和JavaScript构建的个人主页，包含学术信息展示和摄影作品集。通过GitHub Actions自动部署到GitHub Pages。

## 功能特点

✨ **响应式设计** - 完美适配桌面、平板和手机
📱 **多部分展示** - 首页、学术、摄影、联系
🎨 **现代UI** - 精美的界面和交互效果
📸 **摄影集** - 支持主题和时间双重分类、灯箱浏览
🤖 **自动部署** - GitHub Actions自动构建和部署
⚡ **高性能** - 轻量级，无依赖，快速加载

## 项目结构

```
personal-website/
├── index.html              # 主页面
├── README.md              # 说明文档
├── .gitignore             # Git忽略文件
├── assets/
│   ├── css/
│   │   └── style.css      # 样式表
│   ├── js/
│   │   └── script.js      # JavaScript脚本
│   ├── images/
│   │   ├── avatar.jpg     # 头像照片
│   │   ├── cv.pdf         # 简历PDF
│   │   └── photography/   # 摄影作品文件夹
│   │       └── *.jpg      # 摄影照片
│   └── ...
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions部署配置
```

## 快速开始

### 1. 创建GitHub仓库

1. 登录 GitHub
2. 创建一个新仓库，名称必须为：`zhaodong-lyu.github.io`
3. 设置为Public

### 2. 本地配置

```bash
# 克隆当前项目到本地
cd /home/jordon/personal-website

# 初始化git（如果还没初始化）
git init
git branch -M main
git add .
git commit -m "Initial commit"

# 添加远程仓库（替换USERNAME）
git remote add origin https://github.com/zhaodong-lyu/zhaodong-lyu.github.io.git

# 推送到GitHub
git push -u origin main
```

### 3. 自定义内容

编辑以下文件来个性化你的主页：

#### 修改个人信息
编辑 `index.html`：

```html
<!-- 首页部分 -->
<h1 class="hero-title">你的名字</h1>
<p class="hero-subtitle">你的职位 / 身份</p>
<p class="hero-bio">你的个人简介</p>

<!-- 学术部分 -->
<!-- 修改"关于"标签页的内容 -->
<p>你的详细简介...</p>
<p><strong>邮箱：</strong> your.email@example.com</p>
<p><strong>机构：</strong> 你的学校/公司</p>

<!-- 联系部分 -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
<a href="https://github.com/zhaodong-lyu" target="_blank">GitHub</a>
```

#### 添加简历
1. 将你的简历PDF文件放在 `assets/` 文件夹，命名为 `cv.pdf`
git branch -M main
git add .
git commit -m "Initial personal site"

# Personal Website — zhaodong-lyu.github.io

This repository contains a lightweight personal website built with plain HTML, CSS and JavaScript. It includes an academic profile and a photography gallery and is ready to be deployed to GitHub Pages.

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

