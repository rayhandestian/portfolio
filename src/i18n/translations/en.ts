export const en = {
  nav: {
    projects: "Projects",
    skills: "Skills",
    achievements: "Achievements",
    about: "About",
    contact: "Contact",
    blog: "Blog",
    switch_lang: "Bahasa Indonesia",
  },
  hero: {
    name: "Rayhan Destian",
    tagline: "Full-Stack Developer · Game Server Founder · Security Researcher",
    description: "Founder and sole developer of Kaizen Network, an Indonesian Minecraft server network running since 2022. I build and operate live web and game systems.",
    cta_contact: "Contact me",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_resume: "Resume",
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of work I'm proud of.",
    count: "{n} projects",
    lightbox_zoom: "Zoom in or out",
    lightbox_close: "Close",
    visit: "Visit Website",
    source: "Source",
    image: "Image of {title}",
    groups: {
      plugins: "Minecraft plugins",
      web: "Web apps",
      other: "Mobile, IoT, and machine learning",
    },
    featured: {
      title: "Kaizen Network",
      description: "Indonesian Minecraft Server Network, founded and run solo since 2022. Built a full-stack e-commerce website, custom Java Spigot and Velocity plugins, various Skript scripts, Discord bots, and managed cloud infrastructure.",
      button: "Visit Website",
      stats: {
        players: "Peak concurrent players",
        accounts: "Registered accounts",
      },
    },
    kaizen: {
      game_servers: {
        title: "Game Servers",
        description: "Orchestrated complex gameplay systems involving a mixed survival mechanics, island-based economy, custom skills, guild management, interconnected scripts, and many more.",
      },
      web_platform: {
        title: "Web Platform",
        description: "Next.js, TypeScript, and MongoDB store and website with Tripay and Midtrans payments, webhook confirmation, automated in-game fulfillment, and a JWT-authenticated admin panel. Added rate limiting and Turnstile bot protection.",
      },
      infrastructure: {
        title: "Infrastructure",
        description: "Deploy and operate game servers, databases, and Discord bots on Linux, Docker, and Pterodactyl, with MariaDB and Redis. HetrixTools reported 99.95% average monitor uptime over the 30 days to 12 September 2026, excluding maintenance.",
      }
    },
    list: {
      consentgate: {
        title: "ConsentGate",
        tagline: "In-game rules and policy agreements",
        description: "Shows a server's rules and policies to players before they can play, and records their acceptance. Runs on Velocity, Paper, and Spigot, with translated and versioned documents and Bedrock forms through Geyser. No website or extra hosting needed.",
      },
      origingate: {
        title: "OriginGate",
        tagline: "VPN, proxy, and country checks at login",
        description: "Kicks VPN, proxy, and out-of-country players at login on Bukkit, Spigot, Paper, BungeeCord, and Velocity. Combines IP data from several providers or a local MaxMind file, saves each lookup, and has a dry-run mode for testing rules.",
      },
      nexusshout: {
        title: "NexusShout",
        tagline: "Global chat across a proxy network",
        description: "Global chat plugin for Velocity and BungeeCord that lets players talk across every server on a network, with anti-spam and mute support, private messages, and Discord integration.",
      },
      minecraftserver_id: {
        title: "MinecraftServer.ID",
        tagline: "Minecraft server listing for Indonesia",
        description: "Server listing site for the Indonesian Minecraft community. A Next.js frontend, an Express REST API, and BullMQ background workers share TypeScript types and Zod validators in a Turborepo monorepo, with PostgreSQL and Redis.",
      },
      thesis: {
        title: "Privacy Features for Kaizen Network",
        tagline: "Undergraduate thesis on UU PDP privacy features",
        description: "Undergraduate thesis implementing privacy features based on Indonesia's Personal Data Protection Law (UU PDP): in-game consent, a Next.js portal for data access and deletion, audit trails, and automated retention.",
        link_thesis: "Read thesis",
        link_poster: "View poster",
      },
      top_mc: {
        title: "Top MC Servers Indonesia",
        tagline: "Ranking history of Indonesia's top Minecraft servers",
        description: "Interactive ranking history of Indonesia's top Minecraft servers from 2012 to 2026, rebuilt from 49 Wayback Machine snapshots covering 150+ servers. Custom bump charts with a downloadable dataset, published on the Kaizen Network blog.",
      },
      cloudshort: {
        title: "Cloudshort",
        tagline: "Private URL shortener on Cloudflare Workers",
        description: "Private URL shortener built with TypeScript, Cloudflare Workers, and Hono. Uses KV-backed redirects, D1 click analytics, and a React admin dashboard protected by JWT/cookie authentication.",
      },
      uperli: {
        title: "UPer.li",
        tagline: "URL shortener for Universitas Pertamina",
        description: "University-exclusive URL shortener for Universitas Pertamina. Features role-based auth, 2FA, QR codes, analytics dashboard, and Google Safe Browsing integration.",
      },
      quickbites: {
        title: "QuickBites",
        tagline: "Mobile food ordering app",
        description: "Mobile food ordering app featuring real-time order tracking, seller dashboards, and seamless Firebase backend integration.",
      },
      packvertise: {
        title: "Packvertise",
        tagline: "Startup placing ads on food packaging",
        description: "Solo-founded startup placing brand ads on disposable food packaging: advertisers reach customers where they eat, vendors get free packaging plus a revenue share. Distributed 1,000 QR-tracked packages through two campus canteens and ran a pilot campaign for one client. Top 7 of 31 teams at UPER CASE IB 2025.",
        link_report: "MBKM report",
      },
      water_tank: {
        title: "Smart Water Tank",
        tagline: "IoT water level monitor and pump control",
        description: "IoT solution for real-time water level monitoring and automated pump control using ESP32 and web app integration.",
      },
      emotion_cnn: {
        title: "Emotion Detection CNN",
        tagline: "Facial emotion detection with a CNN",
        description: "Deep learning model achieving 61% accuracy in detecting 7 facial emotion classes using Convolutional Neural Networks.",
      }
    }
  },
  skills: {
    title: "Skills",
    subtitle: "Tools and skills behind my projects.",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks and Libraries",
      web: "Web Development",
      security: "Security and Privacy",
      game_dev: "Minecraft Development",
      databases: "Databases and Storage",
      devops: "DevOps and Cloud",
      other: "Data, ML, and IoT",
    },
    items: {
      payments: "Payment Integration",
      authentication: "Authentication",
      security_research: "Security Research",
      vulnerability_discovery: "Vulnerability Discovery",
      privacy: "Privacy by Design",
      data_visualization: "Data Visualization",
      plugin_development: "Plugin Development",
      gameplay_systems: "Gameplay Systems",
    }
  },
  achievements: {
    title: "Achievements",
    subtitle: "Recognition outside of shipped code.",
    items: {
      cve: {
        date: "2026",
        title: "Microsoft Security Response Center",
        note: "CVSS 3.1 scores. All rated Important by Microsoft.",
        sole: "Sole finder",
        finders: "1 of {n} finders",
        types: {
          rce: "Remote code execution",
          info: "Information disclosure",
          sfb: "Security feature bypass",
        },
      },
      upercase: {
        date: "2025",
        title: "UPER CASE IB 2025",
        description: "Top 7 of 31 teams with Packvertise at Universitas Pertamina's MBKM incubation program, advancing through 2 of 3 pitching rounds as a solo founder.",
        link: "View certificate",
      },
    }
  },
  blog: {
    title: "Blog",
    subtitle: "Writing on software, privacy, and the systems I build.",
    all: "All posts",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm the founder and sole developer of <strong>Kaizen Network</strong>, an Indonesian Minecraft server network I've run since 2022. It has grown to 100,000+ registered accounts and 150 peak concurrent players. I own the whole stack: TypeScript/Next.js applications, payment integrations, custom Java plugins, and cloud operations, from implementation to deployment.",
      "I graduated in Computer Science from <strong>Universitas Pertamina</strong> (Indonesia) in August 2026. My thesis implemented privacy features for online game platforms based on UU PDP.",
      "I also founded <strong>Packvertise</strong>, an ad-on-packaging startup that reached the top 7 of 31 teams at UPER CASE IB 2025.",
      "On the side, I do security research, with seven Microsoft-credited vulnerability finds in Visual Studio Code, Windows PowerShell, and .NET. I also explore AI/ML and dabble in IoT."
    ]
  },
  contact: {
    title: "Contact",
    subtitle: "Pick a starting point, or write your own message.",
    email_note: "Prefer email? Reach me at",
    prompts: [
      { label: "Build a website or app", starter: "I'm looking for someone to build a website or web app. Here's what I have in mind: " },
      { label: "Job or internship", starter: "I'm reaching out about a job or internship opportunity. " },
      { label: "Question about a project", starter: "I have a question about one of your projects: " },
      { label: "Just saying hi", starter: "Hi! " },
    ],
    form: {
      name: "Name",
      name_placeholder: "Your name",
      email: "Email",
      email_placeholder: "your@email.com",
      message: "Message",
      message_placeholder: "Your message...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        email_invalid: "Please enter a valid email address.",
        message: "Please enter a message.",
        captcha: "Please complete the captcha verification.",
      }
    }
  },
  footer: {
    copyright: "© {year} Rayhan Destian",
  }
};
