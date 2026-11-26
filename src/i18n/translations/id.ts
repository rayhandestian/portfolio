export const id = {
    nav: {
        projects: "Proyek",
        skills: "Keahlian",
        achievements: "Pencapaian",
        about: "Tentang",
        contact: "Kontak",
        blog: "Blog",
        switch_lang: "English",
    },
    hero: {
        name: "Rayhan Destian",
        tagline: "Full-Stack Developer · Game Server Founder · Security Researcher",
        description: "Pendiri dan pengembang tunggal Kaizen Network, jaringan server Minecraft Indonesia yang berjalan sejak 2022. Saya membangun dan menjalankan aplikasi web serta sistem game.",
        cta_contact: "Hubungi saya",
        cta_github: "GitHub",
        cta_linkedin: "LinkedIn",
        cta_resume: "Resume",
    },
    projects: {
        title: "Proyek",
        subtitle: "Kumpulan karya yang saya banggakan.",
        count: "{n} proyek",
        lightbox_zoom: "Perbesar atau perkecil",
        lightbox_close: "Tutup",
        groups: {
            plugins: "Plugin Minecraft",
            web: "Aplikasi web",
            other: "Mobile, IoT dan machine learning",
        },
        featured: {
            title: "Kaizen Network",
            description: "Jaringan Server Minecraft Indonesia, didirikan dan dijalankan sendiri sejak 2022. Membangun situs web e-commerce full-stack, plugin Java Spigot & Velocity kustom, berbagai skrip Skript, bot Discord, dan mengelola infrastruktur cloud.",
            button: "Kunjungi Situs",
            stats: {
                players: "Puncak pemain bersamaan",
                accounts: "Akun terdaftar",
            },
        },
        kaizen: {
            game_servers: {
                title: "Server Game",
                description: "Mengorkestrasi sistem gameplay yang kompleks yang melibatkan mekanik survival campuran, ekonomi berbasis pulau, skill kustom, manajemen guild, skrip yang saling terhubung, dan banyak lagi.",
            },
            web_platform: {
                title: "Platform Web",
                description: "Toko dan situs web dengan Next.js, TypeScript dan MongoDB, pembayaran Tripay dan Midtrans, konfirmasi webhook, pengiriman pembelian otomatis ke dalam game, serta panel admin dengan autentikasi JWT. Dilengkapi pembatasan permintaan dan perlindungan bot Turnstile.",
            },
            infrastructure: {
                title: "Infrastruktur",
                description: "Menjalankan dan mengelola server game, database dan bot Discord di Linux, Docker dan Pterodactyl, dengan MariaDB dan Redis. HetrixTools mencatat rata-rata uptime monitor 99,95% selama 30 hari hingga 12 September 2026, di luar waktu pemeliharaan.",
            }
        },
        list: {
            consentgate: {
                title: "ConsentGate",
                tagline: "Persetujuan aturan dan kebijakan di dalam game",
                description: "Menampilkan aturan dan kebijakan server kepada pemain sebelum mereka bisa bermain, lalu mencatat persetujuan mereka. Berjalan di Velocity, Paper dan Spigot, dengan dokumen yang punya terjemahan dan versi, serta form Bedrock lewat Geyser. Tidak perlu situs web atau hosting tambahan.",
            },
            origingate: {
                title: "OriginGate",
                tagline: "Pemeriksaan VPN, proxy dan negara saat login",
                description: "Menolak pemain yang memakai VPN, proxy atau terhubung dari negara yang tidak diizinkan saat login di Bukkit, Spigot, Paper, BungeeCord dan Velocity. Menggabungkan data IP dari beberapa penyedia atau file MaxMind lokal, menyimpan setiap hasil pencarian, dan punya mode uji coba untuk menguji aturan.",
            },
            nexusshout: {
                title: "NexusShout",
                tagline: "Chat global di seluruh jaringan proxy",
                description: "Plugin chat global untuk Velocity dan BungeeCord agar pemain bisa mengobrol di semua server dalam satu jaringan, dengan anti-spam dan dukungan mute, pesan pribadi, serta integrasi Discord.",
            },
            minecraftserver_id: {
                title: "MinecraftServer.ID",
                tagline: "Daftar server Minecraft Indonesia",
                description: "Situs daftar server untuk komunitas Minecraft Indonesia. Frontend Next.js, REST API Express dan worker latar BullMQ berbagi tipe TypeScript dan validator Zod dalam monorepo Turborepo, dengan PostgreSQL dan Redis.",
            },
            thesis: {
                title: "Fitur Privasi untuk Kaizen Network",
                tagline: "Tugas akhir tentang fitur privasi berbasis UU PDP",
                description: "Tugas akhir yang menerapkan fitur privasi berdasarkan UU Pelindungan Data Pribadi (UU PDP): persetujuan di dalam game, portal Next.js untuk akses dan penghapusan data, catatan audit, serta retensi otomatis.",
                link_thesis: "Baca tugas akhir",
                link_poster: "Lihat poster",
            },
            top_mc: {
                title: "Top MC Servers Indonesia",
                tagline: "Riwayat peringkat server Minecraft terbaik Indonesia",
                description: "Sejarah peringkat interaktif server Minecraft terbaik Indonesia dari 2012 hingga 2026, dibangun ulang dari 49 snapshot Wayback Machine yang mencakup 150+ server. Bump chart kustom dengan dataset yang bisa diunduh, diterbitkan di blog Kaizen Network.",
            },
            cloudshort: {
                title: "Cloudshort",
                tagline: "Penyingkat URL pribadi di Cloudflare Workers",
                description: "Penyingkat URL pribadi dengan TypeScript, Cloudflare Workers dan Hono. Menggunakan KV untuk pengalihan tautan, D1 untuk analitik klik, serta dashboard admin React dengan autentikasi JWT/cookie.",
            },
            uperli: {
                title: "UPer.li",
                tagline: "Penyingkat URL untuk Universitas Pertamina",
                description: "Penyingkat URL eksklusif universitas untuk Universitas Pertamina. Menampilkan autentikasi berbasis peran, 2FA, kode QR, dashboard analitik, dan integrasi Google Safe Browsing.",
            },
            quickbites: {
                title: "QuickBites",
                tagline: "Aplikasi pemesanan makanan seluler",
                description: "Aplikasi pemesanan makanan seluler yang menampilkan pelacakan pesanan real-time, dashboard penjual, dan integrasi backend Firebase yang mulus.",
            },
            packvertise: {
                title: "Packvertise",
                tagline: "Startup iklan di kemasan makanan",
                description: "Startup yang saya dirikan sendiri, menempatkan iklan brand di kemasan makanan sekali pakai: pengiklan menjangkau pelanggan saat mereka makan, penjual dapat kemasan gratis plus bagi hasil. Mendistribusikan 1.000 kemasan dengan pelacakan QR lewat dua kantin kampus, plus satu kampanye pilot untuk klien. Top 7 dari 31 tim di UPER CASE IB 2025.",
                link_report: "Laporan MBKM",
            },
            water_tank: {
                title: "Smart Water Tank",
                tagline: "Pemantau level air dan kontrol pompa berbasis IoT",
                description: "Solusi IoT untuk pemantauan level air real-time dan kontrol pompa otomatis menggunakan ESP32 dan integrasi aplikasi web.",
            },
            emotion_cnn: {
                title: "Emotion Detection CNN",
                tagline: "Deteksi emosi wajah dengan CNN",
                description: "Model deep learning yang mencapai akurasi 61% dalam mendeteksi 7 kelas emosi wajah menggunakan Convolutional Neural Networks.",
            }
        }
    },
    skills: {
        title: "Keahlian",
        subtitle: "Teknologi dan keahlian di balik proyek saya.",
        categories: {
            languages: "Bahasa",
            frameworks: "Framework & Library",
            web: "Pengembangan Web",
            security: "Keamanan & Privasi",
            game_dev: "Pengembangan Minecraft",
            databases: "Database & Penyimpanan",
            devops: "DevOps & Cloud",
            other: "Data, ML & IoT",
        },
        items: {
            payments: "Integrasi Pembayaran",
            authentication: "Autentikasi",
            security_research: "Riset Keamanan",
            vulnerability_discovery: "Penemuan Kerentanan",
            privacy: "Privasi sejak Perancangan",
            data_visualization: "Visualisasi Data",
            plugin_development: "Pengembangan Plugin",
            gameplay_systems: "Sistem Gameplay",
        }
    },
    achievements: {
        title: "Pencapaian",
        subtitle: "Pengakuan di luar kode yang dirilis.",
        items: {
            cve: {
                date: "2026",
                title: "Microsoft Security Response Center",
                note: "Skor CVSS 3.1. Semua dinilai Important oleh Microsoft.",
                sole: "Penemu tunggal",
                finders: "1 dari {n} penemu",
                types: {
                    rce: "Remote code execution",
                    info: "Information disclosure",
                    sfb: "Security feature bypass",
                },
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
            "Saya adalah pendiri sekaligus pengembang tunggal <strong>Kaizen Network</strong>, jaringan server Minecraft Indonesia yang saya jalankan sejak 2022. Kini jaringan ini memiliki 100.000+ akun terdaftar dan puncak 150 pemain bersamaan. Saya menangani seluruh stack: aplikasi TypeScript/Next.js, integrasi pembayaran, plugin Java kustom dan operasional cloud, dari implementasi hingga deployment.",
            "Saya lulus dari program studi Ilmu Komputer di <strong>Universitas Pertamina</strong> pada Agustus 2026. Tugas akhir saya menerapkan fitur privasi untuk platform game online berdasarkan UU PDP.",
            "Saya juga mendirikan <strong>Packvertise</strong>, startup iklan di kemasan makanan yang masuk top 7 dari 31 tim di UPER CASE IB 2025.",
            "Di luar itu, saya melakukan riset keamanan, dengan tujuh temuan kerentanan di Visual Studio Code, Windows PowerShell dan .NET yang diakui Microsoft. Saya juga menjelajahi AI/ML dan berkecimpung di IoT."
        ]
    },
    contact: {
        title: "Kontak",
        subtitle: "Pilih salah satu untuk memulai, atau tulis pesan Anda sendiri.",
        email_note: "Lebih suka email? Hubungi saya di",
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
