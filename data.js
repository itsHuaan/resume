const translations = {
    vi: {
        name: "Đỗ Quang Huân",
        title: "Backend Developer",
        initials: "ĐH",
        image: "pf.jpg",
        labels: {
            contact: "Liên hệ",
            education: "Học vấn",
            skills: "Kỹ năng",
            summary: "Tóm tắt chuyên môn",
            experience: "Kinh nghiệm làm việc",
            settings: {
                language: "Ngôn ngữ",
                layout: "Bố cục",
                theme: "Giao diện",
                layouts: {
                    default: "Cột bên",
                    modern: "Hiện đại",
                    compact: "Thu gọn"
                },
                themes: {
                    light: "Sáng",
                    dark: "Tối",
                    device: "Hệ thống"
                }
            }
        },
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
                detail: "Ngành: Công nghệ Thông tin </br> GPA: 3.6 / 4.0"
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
                            "Phối hợp tester, nghiệp vụ rà soát log, xử lý edge case."
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
                        name: "Backend Development",
                        desc: "",
                        tasks: [
                            "Phát triển và triển khai các API backend sử dụng Java và Spring Boot.",
                            "Thực hiện các tính năng bảo mật với Spring Security.",
                            "Thiết kế và tối ưu hóa cơ sở dữ liệu để nâng cao hiệu suất hệ thống.",
                            "Triển khai Redis cache và WebSocket realtime."
                        ],
                        tech: "Spring Boot · Spring Security · Redis · WebSocket"
                    }
                ]
            }
        ]
    },
    en: {
        name: "Do Quang Huan",
        title: "Backend Developer",
        initials: "DH",
        image: "pf.jpg",
        labels: {
            contact: "Contact",
            education: "Education",
            skills: "Skills",
            summary: "About Me",
            experience: "Work Experience",
            settings: {
                language: "Language",
                layout: "Layout",
                theme: "Theme",
                layouts: {
                    default: "Sidebar",
                    modern: "Modern",
                    compact: "Compact"
                },
                themes: {
                    light: "Light",
                    dark: "Dark",
                    device: "Device"
                }
            }
        },
        contact: [
            { icon: "fa-envelope", text: "doquanghuan1909@gmail.com" },
            { icon: "fa-phone", text: "0338 836 098" },
            { icon: "fa-birthday-cake", text: "19/09/2001" },
            { icon: "fa-map-marker-alt", text: "Hanoi, Vietnam" }
        ],
        summary: "Backend Developer specializing in the Java ecosystem (Spring Boot / WebFlux). Experienced in developing Microservices systems, focusing on optimizing API performance and asynchronous processing with Message Queue and Redis Caching. Proficient in database optimization and security standards.",
        education: [
            {
                time: "2020 – 2024",
                school: "Univ. of Economic and Technology for Industries",
                detail: "Major: Information Technology </br> GPA: 3.6 / 4.0"
            }
        ],
        skills: [
            {
                category: "Languages & Frameworks",
                items: ["Java", "SQL", "Spring Boot", "Spring WebFlux"]
            },
            {
                category: "Infrastructure & Services",
                items: ["Microservices", "Apache Kafka", "Redis", "MariaDB"]
            },
            {
                category: "Tools",
                items: ["Git", "Linux"]
            },
            {
                category: "Languages",
                items: ["TOEIC 750"]
            }
        ],
        experience: [
            {
                time: "03/2025 – Present",
                company: "VIETTEL TELECOM",
                role: "Software Development Engineer",
                projects: [
                    {
                        name: "Viettel MiniApp",
                        desc: "Mini-app platform for Viettel utility services.",
                        tasks: [
                            "Build auth & authz systems for users and services, ensuring secure access control.",
                            "Coordinate data from external systems and optimize APIs.",
                            "Develop features according to business requirements.",
                            "Collaborate with QA to review logs and handle edge cases."
                        ],
                        tech: "Spring WebFlux · Redis · MariaDB"
                    },
                    {
                        name: "Viettel++",
                        desc: "Customer care and loyalty points system.",
                        tasks: [
                            "Maintain and refactor modules to improve code quality.",
                            "Develop core business logic for loyalty programs.",
                            "Implement new features as requested."
                        ],
                        tech: "Spring Boot · Kafka · MariaDB · Redis"
                    }
                ]
            },
            {
                time: "08/2024 – 02/2025",
                company: "CY VIETNAM",
                role: "Backend Development Intern",
                projects: [
                    {
                        name: "Backend Development",
                        desc: "",
                        tasks: [
                            "Develop and deploy backend APIs using Java and Spring Boot.",
                            "Implement security features with Spring Security.",
                            "Design and optimize databases for performance.",
                            "Utilize Redis for caching and WebSocket for real-time features."
                        ],
                        tech: "Spring Boot · Spring Security · Redis · WebSocket"
                    }
                ]
            }
        ]
    }
};
