const data = {
    name: "Đỗ Quang Huân",
    title: "Backend Developer",
    initials: "ĐH",
    image: "pf.jpg",
    contact: [
        { icon: "fa-envelope", text: "doquanghuan1909@gmail.com" },
        { icon: "fa-phone", text: "0338 836 098" },
        { icon: "fa-birthday-cake", text: "19/09/2001" },
        { icon: "fa-map-marker-alt", text: "Hồng Vân, Thường Tín, Hà Nội" }
    ],
    summary: "Backend Developer chuyên hệ sinh thái Java (Spring Boot / WebFlux). Có kinh nghiệm thực chiến phát triển hệ thống Microservices, tập trung tối ưu hiệu năng API và xử lý bất đồng bộ với Message Queue, Caching (Redis). Nắm vững khả năng tối ưu truy vấn database và áp dụng các tiêu chuẩn bảo mật hệ thống.",
    education: [
        {
            time: "2020 – 2024",
            school: "Đại học Kinh tế – Kỹ thuật Công nghiệp",
            detail: "<strong>Ngành:</strong> Công nghệ Thông tin </br> <strong>GPA:</strong> 3.6 / 4.0"
        }
    ],
    skills: [
        {
            category: "Ngôn ngữ & Framework",
            items: ["Java", "SQL", "Spring Boot", "Spring WebFlux"]
        },
        {
            category: "Hạ tầng & Dịch vụ",
            items: ["Microservices", "Apache Kafka", "Redis", "MariaDB"]
        },
        {
            category: "Công cụ",
            items: ["Git", "Linux"]
        },
        {
            category: "Kỹ năng mềm",
            items: ["Phân tích vấn đề", "Làm việc nhóm", "Tự học nhanh"]
        },
        {
            category: "Ngoại ngữ",
            items: ["TOEIC 750"]
        }
    ],
    experience: [
        {
            time: "03/2025 – Hiện tại",
            company: "VIETTEL TELECOM",
            role: "Kỹ sư Phát triển Phần mềm",
            projects: [
                {
                    name: "Viettel MiniApp",
                    desc: "Nền tảng tích hợp nhiều dịch vụ tiện ích của Viettel dưới dạng mini-app.",
                    tasks: [
                        "Xây dựng hệ thống xác thực & phân quyền cho người dùng và services, kiểm soát truy cập an toàn.",
                        "Điều phối dữ liệu từ các hệ thống khác, tối ưu hóa API để thực hiện các nghiệp vụ.",
                        "Tiếp nhận, phát triển tính năng theo yêu cầu.",
                        "Phối hợp tester, nghiệp vụ rà soát log, xử lý edge case, duy trì tỷ lệ lỗi ở mức thấp nhất."
                    ],
                    tech: "Spring WebFlux · Redis · MariaDB"
                },
                {
                    name: "Viettel++",
                    desc: "Hệ thống chăm sóc khách hàng và tích điểm.",
                    tasks: [
                        "Tiếp nhận bảo trì hệ thống, chủ động refactor các module giảm thiểu các đoạn mã chưa tối ưu.",
                        "Phát triển các luồng nghiệp vụ cốt lõi cho các chương trình tích điểm / tiêu điểm.",
                        "Xây dựng các tính năng mới theo yêu cầu."
                    ],
                    tech: "Spring Boot · Kafka · MariaDB · Redis"
                }
            ]
        },
        {
            time: "08/2024 – 02/2025",
            company: "CY VIỆT NAM",
            role: "Thực tập sinh Phát triển Backend",
            projects: [
                {
                    name: "",
                    desc: "",
                    tasks: [
                        "Phát triển và triển khai các API backend sử dụng Java và Spring Boot.",
                        "Thực hiện các tính năng bảo mật với Spring Security.",
                        "Thiết kế và tối ưu hóa cơ sở dữ liệu để nâng cao hiệu suất hệ thống.",
                        "Triển khai Redis để cache dữ liệu thường xuyên truy xuất và tích hợp WebSocket cho các tính năng realtime."
                    ],
                    tech: "Spring Boot · Spring Security · Redis · WebSocket"
                }
            ]
        }
    ]
};

// ── RENDER SIDEBAR ──
function renderSidebar() {
    const imgTag = `<img src="${data.image}" alt="Profile" onerror="this.outerHTML='<div class=\\'avatar-placeholder\\'>${data.initials}</div>'">`;

    const contacts = data.contact.map((c, i) => `
    <div class="contact-item" style="animation-delay:${i * 0.08}s">
      <div class="contact-icon"><i class="fas ${c.icon}"></i></div>
      <span>${c.text}</span>
    </div>`).join('');

    const educations = data.education.map(e => `
    <div class="edu-item">
      <div class="edu-time">${e.time}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-detail">${e.detail}</div>
    </div>`).join('');

    const skills = data.skills.map(s => `
    <div class="skill-group">
      <div class="skill-category">${s.category}</div>
      <div class="skill-tags">${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
    </div>`).join('');

    document.getElementById('sidebar').innerHTML = `
    <div class="profile-block">
      <div class="avatar-ring">${imgTag}</div>
      <div class="profile-name">${data.name}</div>
      <div class="profile-title">${data.title}</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">Liên hệ</div>
      ${contacts}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">Học vấn</div>
      ${educations}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">Kỹ năng</div>
      ${skills}
    </div>`;
}

// ── RENDER MAIN ──
function renderMain() {
    const projects = (list) => list.map(p => `
    <div class="project-card">
      ${p.name ? `<div class="project-name">${p.name}</div>` : ''}
      ${p.desc ? `<div class="project-desc">${p.desc}</div>` : ''}
      <ul class="task-list">
        ${p.tasks.map(t => `<li>${t}</li>`).join('')}
      </ul>
      ${p.tech ? `<div class="tech-badge">${p.tech}</div>` : ''}
    </div>`).join('');

    const experience = data.experience.map((e, i) => `
    <div class="exp-item" style="animation-delay:${i * 0.12}s">
      <div class="exp-dot"></div>
      <div class="exp-header">
        <div class="exp-company">${e.company}</div>
        <div class="exp-time">${e.time}</div>
      </div>
      <div class="exp-role">${e.role}</div>
      ${projects(e.projects)}
    </div>`).join('');

    document.getElementById('main').innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-icon"><i class="fas fa-user-tie fa-xs"></i></div>
        <div class="section-title">Tóm tắt chuyên môn</div>
        <div class="section-rule"></div>
      </div>
      <p class="summary-text">${data.summary}</p>
    </div>
    <div class="section">
      <div class="section-header">
        <div class="section-icon"><i class="fas fa-briefcase fa-xs"></i></div>
        <div class="section-title">Kinh nghiệm làm việc</div>
        <div class="section-rule"></div>
      </div>
      ${experience}
    </div>`;
}

renderSidebar();
renderMain();