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
2. 链接会自动指向该文件

#### 添加头像
1. 将你的头像照片放在 `assets/images/` 文件夹，命名为 `avatar.jpg`
2. 推荐尺寸：正方形，至少200x200像素

#### 添加摄影作品

**第一步：准备照片**
- 将照片放在 `assets/images/photography/` 文件夹
- 推荐格式：JPG，尺寸1200x1200像素以上

**第二步：编辑 `assets/js/script.js`**

找到 `photographyData` 数组，添加你的照片信息：

```javascript
const photographyData = [
    {
        id: 1,
        title: "照片标题",
        theme: "风景",  // 主题：风景、人物、建筑、微距、其他
        date: "2024-01-15",  // 日期：YYYY-MM-DD格式
        year: 2024,
        month: 1,
        image: "assets/images/photography/photo-name.jpg"
    },
    // 添加更多照片...
];
```

可用的主题（theme）：
- 风景
- 人物
- 建筑
- 微距
- 其他

你可以自由添加新的主题，过滤器会自动生成。

## GitHub Actions部署

项目已经包含了自动部署配置 `.github/workflows/deploy.yml`。

**工作原理：**
1. 推送代码到main/master分支
2. GitHub Actions自动运行
3. 自动部署到GitHub Pages
4. 访问 `https://zhaodong-lyu.github.io` 查看

**启用方法：**
1. 进入GitHub仓库 Settings → Pages
2. 在"Build and deployment"中选择"GitHub Actions"
3. 确保分支是 `main` 或 `master`

## 特性说明

### 摄影集功能
- **主题分类**：按选定的主题快速筛选
- **年份分类**：按年份快速筛选
- **多种排序**：最新、最旧、按主题
- **灯箱浏览**：点击照片查看大图，支持键盘导航
- **响应式**：自适应各种屏幕尺寸

### 键盘快捷键
在灯箱浏览时：
- `←` / `→` ：上一张/下一张照片
- `Esc` ：关闭灯箱

### 学术部分
- **关于**：个人信息和简历下载
- **研究方向**：展示3个研究领域
- **论文发表**：列表展示论文信息
- **教学**：展示教学经历

## 联系表单

联系表单目前只是前端验证。如果想要真正接收消息，可以集成以下服务：

### 选项1：使用 Formspree
1. 访问 https://formspree.io/
2. 创建表单，获得表单ID
3. 在 `index.html` 中修改表单的 `action` 属性

### 选项2：使用 Netlify Forms
1. 将项目部署到 Netlify
2. Netlify 会自动处理表单

### 选项3：使用 Emailjs
添加客户端邮件发送库

## 自定义样式

主要颜色定义在 `assets/css/style.css` 的 `:root` 中：

```css
:root {
    --primary-color: #2563eb;      /* 主色调（蓝色） */
    --secondary-color: #7c3aed;    /* 副色调（紫色） */
    --text-color: #1f2937;         /* 文字颜色 */
    --light-bg: #f9fafb;           /* 浅色背景 */
}
```

修改这些变量可以改变整个网站的配色。

## 性能优化建议

1. **图片优化**
   - 使用 WebP 格式（推荐）
   - 使用工具压缩图片大小
   - 为大图片使用懒加载

2. **文件优化**
   - 最小化CSS和JS
   - 合并小图片为精灵图

## 常见问题

**Q: 网站显示为空白？**
A: 检查GitHub Pages设置是否启用，确保分支是main或master。

**Q: 照片不显示？**
A: 检查照片文件是否在正确路径，路径是否有拼写错误。

**Q: 域名能否自定义？**
A: 可以。在仓库Settings→Pages中配置自定义域名。

## 许可证

这个项目是自由的，你可以自由使用、修改和分发。

## 更新历史

- v1.0 (2024) - 初始版本
  - 基础布局和样式
  - 学术信息展示
  - 摄影集功能
  - GitHub Actions自动部署

## 支持

如有问题或建议，可以：
1. 检查 README 的常见问题部分
2. 查看代码注释
3. 修改 JavaScript 中的摄影数据

---

**开始使用：** 现在就可以将这个项目推送到GitHub并开始自定义你的个人主页了！
