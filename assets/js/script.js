// ===== Photography Data ===== 
// Define your photography portfolio data here
// Edit and add your photo information as needed
const photographyData = [
    {
        id: 1,
        title: "Mountain Sunrise",
        theme: "Landscape",
        date: "2024-01-15",
        year: 2024,
        month: 1,
        image: "assets/images/photography/photo1.jpg"
    },
    {
        id: 2,
        title: "City Nightscape",
        theme: "Architecture",
        date: "2024-02-20",
        year: 2024,
        month: 2,
        image: "assets/images/photography/photo2.jpg"
    },
    {
        id: 3,
        title: "Flower Close-up",
        theme: "Macro",
        date: "2024-03-10",
        year: 2024,
        month: 3,
        image: "assets/images/photography/photo3.jpg"
    },
    {
        id: 4,
        title: "Portrait",
        theme: "Portrait",
        date: "2023-11-05",
        year: 2023,
        month: 11,
        image: "assets/images/photography/photo4.jpg"
    },
    {
        id: 5,
        title: "Ancient Architecture",
        theme: "Architecture",
        date: "2023-09-12",
        year: 2023,
        month: 9,
        image: "assets/images/photography/photo5.jpg"
    },
    {
        id: 6,
        title: "Landscape Long Exposure",
        theme: "Landscape",
        date: "2023-07-22",
        year: 2023,
        month: 7,
        image: "assets/images/photography/photo6.jpg"
    }
];

// ===== 导航和部分切换 =====
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

function navigateToSection(sectionId) {
    // 隐藏所有部分
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示选中的部分
    document.getElementById(sectionId).classList.add('active');
    
    // 更新导航链接
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // 如果是摄影部分，加载图片
    if (sectionId === 'photography') {
        renderGallery(photographyData);
    }
}

// ===== 汉堡菜单切换 =====
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
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

document.getElementById('theme-filter').addEventListener('change', (e) => {
    applyFilters();
});

document.getElementById('year-filter').addEventListener('change', (e) => {
    applyFilters();
});

function applyFilters() {
    const themeFilter = document.getElementById('theme-filter').value;
    const yearFilter = document.getElementById('year-filter').value;
    
    currentPhotos = photographyData.filter(photo => {
        const themeMatch = !themeFilter || photo.theme === themeFilter;
        const yearMatch = !yearFilter || photo.year === parseInt(yearFilter);
        return themeMatch && yearMatch;
    });
    
    // 应用当前排序
    const activeSortBtn = document.querySelector('.sort-btn.active');
    if (activeSortBtn) {
        applySorting(activeSortBtn.getAttribute('data-sort'));
    } else {
        renderGallery(currentPhotos);
    }
}

document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除活跃类
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        
        // 添加活跃类
        btn.classList.add('active');
        
        const sortType = btn.getAttribute('data-sort');
        applySorting(sortType);
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
    gallery.innerHTML = '';
    
    if (photos.length === 0) {
        gallery.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No matching photos found</p>';
        return;
    }
    
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
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
    lightbox.querySelector('.lightbox-image').src = photo.image;
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
    // 默认显示首页
    navigateToSection('home');
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
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
