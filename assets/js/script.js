// ===== Photography Data =====
// 当前批次照片的 theme（地点），与页面上 Filter by Theme 选项一致。运行 scripts/generate_photography_data.py 时会读取此值。
const PHOTOGRAPHY_DEFAULT_THEME = "Singapore";

// 每张图：id, title, theme, date, year, month, image。theme 可选值见上方注释或页面的 Filter by Theme。
// 添加新图：1) 把图片放到 assets/images/photography/  2) 运行 python3 scripts/generate_photography_data.py --update
const photographyData = [
    {
        id: 1,
        title: "DSC01015",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01015.JPG"
    },
    {
        id: 2,
        title: "DSC01016",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01016.JPG"
    },
    {
        id: 3,
        title: "DSC01017",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01017.JPG"
    },
    {
        id: 4,
        title: "DSC01018",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01018.JPG"
    },
    {
        id: 5,
        title: "DSC01019",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01019.JPG"
    },
    {
        id: 6,
        title: "DSC01020",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01020.JPG"
    },
    {
        id: 7,
        title: "DSC01021",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01021.JPG"
    },
    {
        id: 8,
        title: "DSC01022",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01022.JPG"
    },
    {
        id: 9,
        title: "DSC01023",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01023.JPG"
    },
    {
        id: 10,
        title: "DSC01024",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01024.JPG"
    },
    {
        id: 11,
        title: "DSC01025",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01025.JPG"
    },
    {
        id: 12,
        title: "DSC01027",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01027.JPG"
    },
    {
        id: 13,
        title: "DSC01028",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01028.JPG"
    },
    {
        id: 14,
        title: "DSC01029",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01029.JPG"
    },
    {
        id: 15,
        title: "DSC01033",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01033.JPG"
    },
    {
        id: 16,
        title: "DSC01034",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01034.JPG"
    },
    {
        id: 17,
        title: "DSC01035",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01035.JPG"
    },
    {
        id: 18,
        title: "DSC01037",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01037.JPG"
    },
    {
        id: 19,
        title: "DSC01039",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01039.JPG"
    },
    {
        id: 20,
        title: "DSC01040",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01040.JPG"
    },
    {
        id: 21,
        title: "DSC01041",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01041.JPG"
    },
    {
        id: 22,
        title: "DSC01043",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01043.JPG"
    },
    {
        id: 23,
        title: "DSC01044",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01044.JPG"
    },
    {
        id: 24,
        title: "DSC01048",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01048.JPG"
    },
    {
        id: 25,
        title: "DSC01049",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01049.JPG"
    },
    {
        id: 26,
        title: "DSC01050",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01050.JPG"
    },
    {
        id: 27,
        title: "DSC01051",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01051.JPG"
    },
    {
        id: 28,
        title: "DSC01052",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01052.JPG"
    },
    {
        id: 29,
        title: "DSC01053",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01053.JPG"
    },
    {
        id: 30,
        title: "DSC01054",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01054.JPG"
    },
    {
        id: 31,
        title: "DSC01056",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01056.JPG"
    },
    {
        id: 32,
        title: "DSC01058",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01058.JPG"
    },
    {
        id: 33,
        title: "DSC01077",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01077.JPG"
    },
    {
        id: 34,
        title: "DSC01079",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01079.JPG"
    },
    {
        id: 35,
        title: "DSC01114",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01114.JPG"
    },
    {
        id: 36,
        title: "DSC01119",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01119.JPG"
    },
    {
        id: 37,
        title: "DSC01120",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01120.JPG"
    },
    {
        id: 38,
        title: "DSC01121",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01121.JPG"
    },
    {
        id: 39,
        title: "DSC01124",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01124.JPG"
    },
    {
        id: 40,
        title: "DSC01128",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01128.JPG"
    },
    {
        id: 41,
        title: "DSC01131",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01131.JPG"
    },
    {
        id: 42,
        title: "DSC01133",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01133.JPG"
    },
    {
        id: 43,
        title: "DSC01134",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01134.JPG"
    },
    {
        id: 44,
        title: "DSC01140",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01140.JPG"
    },
    {
        id: 45,
        title: "DSC01144",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01144.JPG"
    },
    {
        id: 46,
        title: "DSC01157",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01157.JPG"
    },
    {
        id: 47,
        title: "DSC01158",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01158.JPG"
    },
    {
        id: 48,
        title: "DSC01162",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01162.JPG"
    },
    {
        id: 49,
        title: "DSC01163",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01163.JPG"
    },
    {
        id: 50,
        title: "DSC01166",
        theme: "Singapore",
        date: "2024-05-19",
        year: 2024,
        month: 5,
        image: "assets/images/photography/DSC01166.JPG"
    },
];

// ===== 导航和部分切换 =====
// 注意：事件监听器在 DOMContentLoaded 中绑定

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    section.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const navLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (navLink) navLink.classList.add('active');
    // 切到摄影时只切换显示，画廊已在 DOMContentLoaded 中渲染
    if (sectionId === 'photography') currentPhotos = [...photographyData];
}

// ===== 汉堡菜单切换 =====
const hamburger = document.querySelector('.hamburger');
if (hamburger) hamburger.addEventListener('click', () => {
    document.querySelector('.nav-menu')?.classList.toggle('active');
});

// ===== 标签页切换 =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // 移除活跃类
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // 添加活跃类
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ===== 摄影集过滤和排序 =====
let currentPhotos = [...photographyData];

/** 根据当前页面地址解析图片 URL，兼容 localhost 子路径 与 GitHub Pages 根路径 */
function resolveImageUrl(relativePath) {
    try {
        return new URL(relativePath, window.location.href).href;
    } catch {
        return relativePath;
    }
}

function applyFilters() {
    const themeEl = document.getElementById('theme-filter');
    const yearEl = document.getElementById('year-filter');
    if (!themeEl || !yearEl) return;
    const themeFilter = String(themeEl.value || '').trim();
    const yearFilter = String(yearEl.value || '').trim();

    currentPhotos = photographyData.filter(photo => {
        const themeMatch = !themeFilter || String(photo.theme || '').trim() === themeFilter;
        const yearNum = yearFilter ? parseInt(yearFilter, 10) : NaN;
        const yearMatch = isNaN(yearNum) || Number(photo.year) === yearNum;
        return themeMatch && yearMatch;
    });

    const activeSortBtn = document.querySelector('.sort-btn.active');
    if (activeSortBtn) {
        applySorting(activeSortBtn.getAttribute('data-sort'));
    } else {
        renderGallery(currentPhotos);
    }
}

function setupPhotographyFilters() {
    const themeEl = document.getElementById('theme-filter');
    const yearEl = document.getElementById('year-filter');
    if (themeEl) themeEl.addEventListener('change', applyFilters);
    if (yearEl) yearEl.addEventListener('change', applyFilters);
}

const sortBtns = document.querySelectorAll('.sort-btn');
sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sortType = btn.getAttribute('data-sort');
        if (sortType) applySorting(sortType);
    });
});

function applySorting(sortType) {
    let sorted = [...currentPhotos];
    
    switch(sortType) {
        case 'date-desc':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'theme':
            sorted.sort((a, b) => a.theme.localeCompare(b.theme));
            break;
    }
    
    renderGallery(sorted);
}

function renderGallery(photos) {
    const gallery = document.getElementById('gallery-grid');
    if (!gallery) return;
    gallery.innerHTML = '';

    if (!photos || photos.length === 0) {
        gallery.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No matching photos found</p>';
        return;
    }

    photos.forEach((photo, index) => {
        const imgUrl = resolveImageUrl(photo.image);
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${imgUrl}" alt="${photo.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <div class="gallery-title">${photo.title}</div>
                    <div class="gallery-date">${photo.theme} · ${formatDate(photo.date)}</div>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openLightbox(photos, index));
        gallery.appendChild(item);
    });
}

// ===== 灯箱功能 =====
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

function openLightbox(photos, index) {
    currentLightboxPhotos = photos;
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function updateLightbox() {
    const photo = currentLightboxPhotos[currentLightboxIndex];
    const lightbox = document.getElementById('lightbox');
    lightbox.querySelector('.lightbox-image').src = resolveImageUrl(photo.image);
    lightbox.querySelector('.lightbox-title').textContent = photo.title;
    lightbox.querySelector('.lightbox-meta').textContent = `${photo.theme} · ${formatDate(photo.date)}`;
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    updateLightbox();
}

function previousImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
    updateLightbox();
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});

// 键盘导航
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
});

// ===== 工具函数 =====
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ===== 页面加载初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 年份下拉保留 HTML 中的完整列表（2019–2026），之后有新照片年份可直接用
    currentPhotos = [...photographyData];
    setupPhotographyFilters();

    // 只在此处渲染摄影画廊一次（索引与图片路径统一由 renderGallery 处理）
    const initialList = [...photographyData].sort((a, b) => new Date(b.date) - new Date(a.date));
    renderGallery(initialList);

    // 默认显示首页
    navigateToSection('home');
    
    // 处理导航栏链接
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            navigateToSection(sectionId);
            
            // 关闭汉堡菜单
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });
    
    // 处理所有其他锚点链接（包括首页按钮）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // 跳过已经处理的导航栏链接
        if (anchor.classList.contains('nav-link')) return;
        
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            const sectionId = href.substring(1); // 移除 # 号
            const section = document.getElementById(sectionId);
            
            if (section) {
                e.preventDefault();
                navigateToSection(sectionId);
            }
        });
    });
});

// ===== 联系表单处理 =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 这里可以添加表单提交逻辑
    // 可以使用第三方服务如 FormSubmit, Netlify Forms 等
    
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contact-form').reset();
});
