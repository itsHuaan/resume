let currentLang = 'en';
let currentLayout = 'default';
let currentTheme = 'device';

// ── RENDER SIDEBAR ──
function renderSidebar(data) {
    const imgTag = `<img src="${data.image}" class="profile-img" alt="Profile" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
    const fallbackAvatar = `<div class="avatar-placeholder" style="display:none;">${data.initials}</div>`;
    const avatar = `<div class="avatar-wrapper">${imgTag}${fallbackAvatar}</div>`;

    const contacts = data.contact.map((c, i) => `
    <div class="contact-item">
      <div class="contact-icon"><i class="fas ${c.icon}"></i></div>
      <span data-path="contact.${i}.text">${c.text}</span>
    </div>`).join('');

    const educations = data.education.map((e, i) => `
    <div class="edu-item">
      <div class="edu-time" data-path="education.${i}.time">${e.time}</div>
      <div class="edu-school" data-path="education.${i}.school">${e.school}</div>
      <div class="edu-detail" data-path="education.${i}.detail">${e.detail}</div>
    </div>`).join('');

    const skills = data.skills.map((s, i) => `
    <div class="skill-group">
      <span class="skill-category" data-path="skills.${i}.category">${s.category}</span>
      <div class="skill-tags">${s.items.map((item, j) => `<span class="skill-tag" data-path="skills.${i}.items.${j}">${item}</span>`).join('')}</div>
    </div>`).join('');

    document.getElementById('sidebar').innerHTML = `
    <div class="profile-block">
      ${avatar}
      <div class="profile-name" data-path="name">${data.name}</div>
      <div class="profile-title" data-path="title">${data.title}</div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-heading">${data.labels.contact}</div>
      ${contacts}
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-heading">${data.labels.education}</div>
      ${educations}
    </div>

    <div class="sidebar-section">
      <div class="sidebar-heading">${data.labels.skills}</div>
      ${skills}
    </div>`;
}

// ── RENDER MAIN ──
function renderMain(data) {
    const projects = (list, expIdx) => list.map((p, pIdx) => `
    <div class="project-card">
      ${p.name ? `<div class="project-name" data-path="experience.${expIdx}.projects.${pIdx}.name">${p.name}</div>` : ''}
      ${p.desc ? `<div class="project-desc" data-path="experience.${expIdx}.projects.${pIdx}.desc">${p.desc}</div>` : ''}
      <ul class="task-list">
        ${p.tasks.map((t, tIdx) => `<li data-path="experience.${expIdx}.projects.${pIdx}.tasks.${tIdx}">${t}</li>`).join('')}
      </ul>
      ${p.tech ? `<div class="tech-badge" data-path="experience.${expIdx}.projects.${pIdx}.tech">${p.tech}</div>` : ''}
    </div>`).join('');

    const experience = data.experience.map((e, i) => `
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-company" data-path="experience.${i}.company">${e.company}</div>
        <div class="exp-time" data-path="experience.${i}.time">${e.time}</div>
      </div>
      <div class="exp-role" data-path="experience.${i}.role">${e.role}</div>
      ${projects(e.projects, i)}
    </div>`).join('');

    document.getElementById('main').innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-icon"><i class="fas fa-user-tie"></i></div>
        <div class="section-title">${data.labels.summary}</div>
        <div class="section-rule"></div>
      </div>
      <p class="summary-text" data-path="summary">${data.summary}</p>
    </div>
    
    <div class="section">
      <div class="section-header">
        <div class="section-icon"><i class="fas fa-briefcase"></i></div>
        <div class="section-title">${data.labels.experience}</div>
        <div class="section-rule"></div>
      </div>
      ${experience}
    </div>`;
}

function updateCV(lang) {
    const wrapper = document.querySelector('.cv-wrapper');
    const isFirstLoad = !document.getElementById('sidebar').innerHTML.trim();
    
    if (!isFirstLoad && currentLang === lang) return;
    
    if (isFirstLoad) {
        renderContent(lang, false);
    } else {
        wrapper.classList.add('switching');
        // Wait for the fade-out to complete (matching CSS transition time)
        setTimeout(() => {
            renderContent(lang, true);
            // Ensure DOM updates and paints before fading back in
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    wrapper.classList.remove('switching');
                });
            });
        }, 300); 
    }
}

function updateLayout(layout) {
    const wrapper = document.querySelector('.cv-wrapper');
    if (currentLayout === layout) return;

    currentLayout = layout;
    
    document.querySelectorAll('.layout-switch button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.layout-switch button[data-layout="${layout}"]`).classList.add('active');

    wrapper.classList.add('switching');
    setTimeout(() => {
        // Remove old layout classes
        wrapper.classList.remove('layout-modern', 'layout-compact');
        // Add new layout class if not default
        if (layout !== 'default') {
            wrapper.classList.add(`layout-${layout}`);
        }
        
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                wrapper.classList.remove('switching');
            });
        });
    }, 300);
}

function updateTheme(theme) {
    currentTheme = theme;

    document.querySelectorAll('.theme-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`theme-${theme}`).classList.add('active');

    applyTheme();
}

function applyTheme() {
    let shouldBeDark = false;
    if (currentTheme === 'dark') {
        shouldBeDark = true;
    } else if (currentTheme === 'device') {
        shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if (shouldBeDark) {
        document.body.classList.add('theme-dark');
        document.querySelector('.cv-wrapper').classList.add('theme-dark');
    } else {
        document.body.classList.remove('theme-dark');
        document.querySelector('.cv-wrapper').classList.remove('theme-dark');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'device') applyTheme();
});

function renderContent(lang, animateSections) {
    currentLang = lang;
    const data = translations[lang];
    
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    document.documentElement.lang = lang;
    document.title = lang === 'vi' ? `CV - ${data.name}` : `Resume - ${data.name}`;
    
    // Translate Settings Menu
    document.getElementById('lbl-language').textContent = data.labels.settings.language;
    document.getElementById('lbl-layout').textContent = data.labels.settings.layout;
    document.getElementById('lbl-theme').textContent = data.labels.settings.theme;
    
    document.getElementById('btn-vi').textContent = data.labels.settings.languages.vi;
    document.getElementById('btn-en').textContent = data.labels.settings.languages.en;
    
    document.getElementById('btn-layout-default').innerHTML = `<i class="fas fa-columns"></i> ${data.labels.settings.layouts.default}`;
    document.getElementById('btn-layout-modern').innerHTML = `<i class="fas fa-window-maximize"></i> ${data.labels.settings.layouts.modern}`;
    document.getElementById('btn-layout-compact').innerHTML = `<i class="fas fa-list"></i> ${data.labels.settings.layouts.compact}`;
    
    document.getElementById('theme-light').innerHTML = `<i class="fas fa-sun"></i> ${data.labels.settings.themes.light}`;
    document.getElementById('theme-dark').innerHTML = `<i class="fas fa-moon"></i> ${data.labels.settings.themes.dark}`;
    document.getElementById('theme-device').innerHTML = `<i class="fas fa-desktop"></i> ${data.labels.settings.themes.device}`;
    
    renderSidebar(data);
    renderMain(data);
    
    if (animateSections) {
        document.querySelectorAll('.section, .sidebar-section, .profile-block').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.05}s`;
            el.classList.add('fade-in');
        });
    }
}

document.getElementById('btn-vi').addEventListener('click', () => updateCV('vi'));
document.getElementById('btn-en').addEventListener('click', () => updateCV('en'));

document.querySelectorAll('.layout-switch button').forEach(btn => {
    btn.addEventListener('click', () => updateLayout(btn.dataset.layout));
});

document.getElementById('theme-light').addEventListener('click', () => updateTheme('light'));
document.getElementById('theme-dark').addEventListener('click', () => updateTheme('dark'));
document.getElementById('theme-device').addEventListener('click', () => updateTheme('device'));

// ── CONTROLS MENU TOGGLE ──
const controlsToggle = document.getElementById('controls-toggle');
const controlsMenu = document.getElementById('controls-menu');

controlsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    controlsToggle.classList.toggle('active');
    controlsMenu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!controlsToggle.contains(e.target) && !controlsMenu.contains(e.target)) {
        controlsToggle.classList.remove('active');
        controlsMenu.classList.remove('show');
    }
});

// ── INLINE EDITOR LOGIC ──
let isEditing = false;

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = isNaN(keys[i+1]) ? {} : [];
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
}

function applyEditMode(enabled) {
    isEditing = enabled;
    const editableElements = document.querySelectorAll('[data-path]');
    const editToggle = document.getElementById('edit-toggle');
    const discardToggle = document.getElementById('discard-toggle');
    const settingsToggle = document.getElementById('controls-toggle');
    
    if (enabled) {
        document.body.classList.add('editing');
        editToggle.classList.add('active');
        editToggle.innerHTML = '<i class="fas fa-save"></i>';
        discardToggle.style.display = "flex";
        editableElements.forEach(el => el.contentEditable = "true");
        // Disable settings to prevent data loss during edit
        settingsToggle.style.opacity = "0.5";
        settingsToggle.style.pointerEvents = "none";
        controlsMenu.classList.remove('show');
    } else {
        document.body.classList.remove('editing');
        editToggle.classList.remove('active');
        editToggle.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        discardToggle.style.display = "none";
        editableElements.forEach(el => el.contentEditable = "false");
        settingsToggle.style.opacity = "1";
        settingsToggle.style.pointerEvents = "auto";
    }
}

document.getElementById('discard-toggle').addEventListener('click', () => {
    if (confirm('Discard all unsaved changes?')) {
        applyEditMode(false);
        renderContent(currentLang, false); // Re-render from original data
    }
});

async function saveToGitHub(pat) {
    const repoOwner = 'itsHuaan';
    const repoName = 'resume';
    const filePath = 'data.js';
    const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
    const submitBtn = document.getElementById('modal-submit');
    const originalBtnText = submitBtn.textContent;

    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Saving...';

        // 1. Extract data from DOM
        document.querySelectorAll('[data-path]').forEach(el => {
            const path = el.dataset.path;
            const value = (path.includes('detail') || path.includes('summary')) ? el.innerHTML : el.innerText;
            setNestedValue(translations[currentLang], path, value.trim());
        });

        // 2. Serialize translations to string
        const fileContent = `const translations = ${JSON.stringify(translations, null, 4)};`;

        // 3. Get latest SHA
        const getRes = await fetch(apiBase);
        if (!getRes.ok) throw new Error('Failed to fetch file metadata');
        const getJson = await getRes.json();
        const sha = getJson.sha;

        // 4. PUT update
        const encoder = new TextEncoder();
        const data = encoder.encode(fileContent);
        const base64Content = btoa(String.fromCharCode(...data));

        const putRes = await fetch(apiBase, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${pat}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Update resume content (${currentLang}) via inline editor`,
                content: base64Content,
                sha: sha
            })
        });

        if (!putRes.ok) {
            const errJson = await putRes.json();
            throw new Error(errJson.message || 'Failed to save to GitHub');
        }

        alert('Changes saved successfully to GitHub!');
        applyEditMode(false);
        closeModal();
    } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
}

// ── MODAL CONTROL ──
const patModal = document.getElementById('pat-modal');
const ghPatInput = document.getElementById('gh-pat');

function openModal() { patModal.classList.add('show'); ghPatInput.focus(); }
function closeModal() { patModal.classList.remove('show'); ghPatInput.value = ''; }

document.getElementById('edit-toggle').addEventListener('click', () => {
    if (isEditing) {
        openModal();
    } else {
        applyEditMode(true);
    }
});

document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-submit').addEventListener('click', () => {
    const pat = ghPatInput.value.trim();
    if (!pat) return alert('Please enter your Personal Access Token');
    saveToGitHub(pat);
});

// Close modal on escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && patModal.classList.contains('show')) closeModal();
});

updateCV('en');
applyTheme();