export const id = {
    nav: {
        projects: "Proyek",
        skills: "Keahlian",
        achievements: "Pencapaian",
        about: "Tentang",
        contact: "Kontak",
        switch_lang: "English",
    },
    hero: {
        greeting: "Halo, saya",
        name: "Rayhan Destian",
        tagline: "Mahasiswa Ilmu Komputer · Full-Stack Developer · Penggemar Game Dev",
        description: "Pendiri Kaizen Network, jaringan server Minecraft dengan 100.000+ pemain terdaftar. Saya membangun pengalaman game yang imersif dan aplikasi web modern.",
        cta_email: "hi@rayhan.ch",
        cta_github: "GitHub",
        cta_linkedin: "LinkedIn",
        cta_resume: "Resume",
    },
    projects: {
        title: "Proyek",
        subtitle: "Kumpulan karya yang saya banggakan.",
        featured: {
            title: "Kaizen Network",
            description: "Jaringan Server Minecraft Indonesia, didirikan dan dijalankan sendiri sejak 2022. Membangun situs web e-commerce full-stack, plugin Java Spigot & Velocity kustom, berbagai skrip Skript, bot Discord, dan mengelola infrastruktur cloud.",
            button: "Kunjungi Situs",
            stats: {
                players: "Peak concurrent players",
                accounts: "Akun terdaftar",
                uptime: "Uptime",
            },
        },
        kaizen: {
            game_servers: {
                title: "Server Game",
                description: "Mengorkestrasi sistem gameplay yang kompleks yang melibatkan mekanik survival campuran, ekonomi berbasis pulau, skill kustom, manajemen guild, skrip yang saling terhubung, dan banyak lagi.",
            },
            web_platform: {
                title: "Platform Web",
                description: "Situs web brand full-stack dengan status server game, papan peringkat, platform e-commerce (store) dengan integrasi payment gateway, dan dashboard admin yang komprehensif.",
            },
            infrastructure: {
                title: "Infrastruktur",
                description: "Infrastruktur high-availability yang mengelola beberapa node game, database, deployment otomatis, hingga orkestrasi bot Discord.",
            }
        },
        list: {
            thesis: {
                title: "Kepatuhan UU PDP untuk Kaizen Network",
                description: "Tugas akhir: kerangka tujuh langkah untuk menerjemahkan UU Pelindungan Data Pribadi (UU PDP) ke kebutuhan teknis, diterapkan pada 107.000+ akun Kaizen Network. Membangun modul Privacy by Design: dialog consent in-game, portal Next.js untuk akses, unduh, dan hapus data, audit trail append-only, retensi otomatis, dan pengamanan API. 9 dari 9 item kepatuhan terpenuhi dan 15 test case lulus di produksi.",
                link_thesis: "Baca tugas akhir",
                link_poster: "Lihat poster",
            },
            top_mc: {
                title: "Top MC Servers Indonesia",
                description: "Sejarah peringkat interaktif server Minecraft terbaik Indonesia dari 2012 hingga 2026, dibangun ulang dari 49 snapshot Wayback Machine yang mencakup 150+ server. Bump chart kustom yang dibagi dua era, lengkap dengan dataset yang bisa diunduh. Diterbitkan sebagai halaman blog Kaizen Network.",
            },
            cloudshort: {
                title: "Cloudshort",
                description: "Penyingkat URL pribadi berkinerja tinggi yang mentenagai kzn.li. Dibangun di ekosistem Cloudflare menggunakan Workers dan Hono untuk pengalihan di bawah 50ms, dengan dashboard React untuk manajemen tautan.",
            },
            uperli: {
                title: "UPer.li",
                description: "Penyingkat URL eksklusif universitas untuk Universitas Pertamina. Menampilkan autentikasi berbasis peran, 2FA, kode QR, dashboard analitik, dan integrasi Google Safe Browsing.",
            },
            quickbites: {
                title: "QuickBites",
                description: "Aplikasi pemesanan makanan seluler yang menampilkan pelacakan pesanan real-time, dashboard penjual, dan integrasi backend Firebase yang mulus.",
            },
            packvertise: {
                title: "Packvertise",
                description: "Startup iklan yang saya dirikan sendiri, menempatkan iklan brand di kemasan makanan sekali pakai: pengiklan menjangkau pelanggan saat mereka makan, dan penjual makanan mendapat kemasan gratis plus bagi hasil. Memproduksi dan mendistribusikan 1.000 kemasan bermerek dengan pelacakan QR lewat dua tenant kantin kampus, plus satu kampanye pilot untuk klien. Top 7 dari 31 tim di UPER CASE IB 2025 (MBKM, Universitas Pertamina), lolos 2 dari 3 babak pitching.",
                link_report: "Laporan MBKM",
            },
            water_tank: {
                title: "Smart Water Tank",
                description: "Solusi IoT untuk pemantauan level air real-time dan kontrol pompa otomatis menggunakan ESP32 dan integrasi aplikasi web.",
            },
            emotion_cnn: {
                title: "Emotion Detection CNN",
                description: "Model deep learning yang mencapai akurasi 61% dalam mendeteksi 7 kelas emosi wajah menggunakan Convolutional Neural Networks.",
            }
        }
    },
    skills: {
        title: "Keahlian",
        subtitle: "Stack yang saya pakai.",
        categories: {
            languages: "Bahasa",
            frameworks: "Framework",
            game_dev: "Game Dev",
            databases: "Database",
            devops: "DevOps & Cloud",
            other: "Lainnya",
        }
    },
    achievements: {
        title: "Pencapaian",
        subtitle: "Pengakuan di luar kode yang dirilis.",
        items: {
            cve: {
                date: "Agustus 2026",
                title: "Microsoft Security Response Center",
                description: "Diakui Microsoft sebagai penemu CVE-2026-47285, kerentanan command injection information disclosure di Visual Studio Code dengan rating Important (CVSS 6.5).",
                link: "Lihat advisory",
            },
            upercase: {
                date: "2025",
                title: "UPER CASE IB 2025",
                description: "Top 7 dari 31 tim bersama Packvertise di program inkubasi MBKM Universitas Pertamina, lolos 2 dari 3 babak pitching sebagai pendiri tunggal.",
                link: "Lihat sertifikat",
            },
        }
    },
    about: {
        title: "Tentang",
        paragraphs: [
            "Saya adalah mahasiswa tingkat akhir Ilmu Komputer di <strong>Universitas Pertamina</strong>, lulus tahun 2026 dengan tugas akhir tentang kepatuhan UU PDP pada platform game online. Saya suka membangun sesuatu yang hidup di internet dan dalam game.",
            "Saya adalah pendiri sekaligus arsitek teknis tunggal di balik <strong>Kaizen Network</strong>, jaringan server Minecraft Indonesia dengan 100.000+ akun terdaftar dan puncak 150 pemain bersamaan. Saya menangani hampir segala hal teknis di sana, mulai dari skrip game dan pengembangan plugin kustom hingga pengembangan web full-stack dan manajemen infrastruktur cloud, dengan uptime 99,9%.",
            "Saya juga mendirikan <strong>Packvertise</strong>, startup iklan di kemasan makanan yang masuk top 7 dari 31 tim di UPER CASE IB 2025. Di luar itu, saya menjelajahi AI/ML, berkecimpung di IoT, dan melakukan riset keamanan, termasuk temuan kerentanan di Visual Studio Code yang diakui Microsoft."
        ]
    },
    contact: {
        title: "Kontak",
        subtitle: "Pilih salah satu untuk memulai, atau tulis pesan Anda sendiri.",
        prompts: [
            { label: "Bikin website atau aplikasi", starter: "Saya sedang mencari orang untuk membuat website atau aplikasi web. Kira-kira seperti ini: " },
            { label: "Lowongan kerja atau magang", starter: "Saya menghubungi terkait peluang kerja atau magang. " },
            { label: "Tanya soal proyek", starter: "Saya punya pertanyaan tentang salah satu proyek Anda: " },
            { label: "Hanya mau menyapa", starter: "Halo! " },
        ],
        form: {
            name: "Nama",
            name_placeholder: "Nama Anda",
            email: "Email",
            email_placeholder: "email@anda.com",
            message: "Pesan",
            message_placeholder: "Pesan Anda...",
            submit: "Kirim Pesan",
            sending: "Mengirim...",
            success: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
            error: "Terjadi kesalahan. Silakan coba lagi.",
            validation: {
                name: "Silakan masukkan nama Anda.",
                email: "Silakan masukkan email Anda.",
                email_invalid: "Silakan masukkan alamat email yang valid.",
                message: "Silakan masukkan pesan.",
                captcha: "Silakan selesaikan verifikasi captcha.",
            }
        }
    },
    footer: {
        copyright: "© {year} Rayhan Destian",
    }
};
