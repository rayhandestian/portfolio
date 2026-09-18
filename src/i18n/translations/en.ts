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
    greeting: "Hi, I'm",
    name: "Rayhan Destian",
    tagline: "Full-Stack Developer · TypeScript, React & Next.js",
    description: "Full-stack developer and Computer Science graduate building and operating live web and game systems. Founder and sole developer of Kaizen Network, with 100,000+ registered accounts and 150 peak concurrent players.",
    cta_contact: "Contact me",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_resume: "Resume",
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of work I'm proud of.",
    featured: {
      title: "Kaizen Network",
      description: "Indonesian Minecraft Server Network, founded and run solo since 2022. Built a full-stack e-commerce website, custom Java Spigot & Velocity plugins, various Skript scripts, Discord bots, and managed cloud infrastructure.",
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
        description: "Next.js, TypeScript and MongoDB store and website with Tripay and Midtrans payments, webhook confirmation, automated in-game fulfillment and a JWT-authenticated admin panel. Added rate limiting and Turnstile bot protection.",
      },
      infrastructure: {
        title: "Infrastructure",
        description: "Deploy and operate game servers, databases and Discord bots on Linux, Docker and Pterodactyl, with MariaDB and Redis. HetrixTools reported 99.95% average monitor uptime over the 30 days to 12 September 2026, excluding maintenance.",
      }
    },
    list: {
      thesis: {
        title: "Privacy Features for Kaizen Network",
        description: "Undergraduate thesis implementing privacy features based on Indonesia's Personal Data Protection Law (UU PDP): in-game consent, a Next.js portal for data access and deletion, audit trails and automated retention.",
        link_thesis: "Read thesis",
        link_poster: "View poster",
      },
      top_mc: {
        title: "Top MC Servers Indonesia",
        description: "Interactive ranking history of Indonesia's top Minecraft servers from 2012 to 2026, rebuilt from 49 Wayback Machine snapshots covering 150+ servers. Custom bump charts with a downloadable dataset, published on the Kaizen Network blog.",
      },
      cloudshort: {
        title: "Cloudshort",
        description: "Private URL shortener built with TypeScript, Cloudflare Workers and Hono. Uses KV-backed redirects, D1 click analytics and a React admin dashboard protected by JWT/cookie authentication.",
      },
      uperli: {
        title: "UPer.li",
        description: "University-exclusive URL shortener for Universitas Pertamina. Features role-based auth, 2FA, QR codes, analytics dashboard, and Google Safe Browsing integration.",
      },
      quickbites: {
        title: "QuickBites",
        description: "Mobile food ordering app featuring real-time order tracking, seller dashboards, and seamless Firebase backend integration.",
      },
      packvertise: {
        title: "Packvertise",
        description: "Solo-founded startup placing brand ads on disposable food packaging: advertisers reach customers where they eat, vendors get free packaging plus a revenue share. Distributed 1,000 QR-tracked packages through two campus canteens and ran a pilot campaign for one client. Top 7 of 31 teams at UPER CASE IB 2025.",
        link_report: "MBKM report",
      },
      water_tank: {
        title: "Smart Water Tank",
        description: "IoT solution for real-time water level monitoring and automated pump control using ESP32 and web app integration.",
      },
      emotion_cnn: {
        title: "Emotion Detection CNN",
        description: "Deep learning model achieving 61% accuracy in detecting 7 facial emotion classes using Convolutional Neural Networks.",
      }
    }
  },
  skills: {
    title: "Skills",
    subtitle: "The stack I work with.",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks",
      game_dev: "Game Dev",
      databases: "Databases",
      devops: "DevOps & Cloud",
      other: "Other",
    }
  },
  achievements: {
    title: "Achievements",
    subtitle: "Recognition outside of shipped code.",
    items: {
      cve: {
        date: "2026",
        title: "Microsoft Security Response Center",
        advisories: [
          "Credited as sole finder of an information disclosure in Visual Studio Code (Important, CVSS 6.5).",
          "Credited as 1 of 2 finders of a security feature bypass in VS Code Copilot Chat (Important, CVSS 7.1).",
          "Credited as 1 of 22 finders of a remote code execution in Windows PowerShell (Important, CVSS 8.0).",
        ],
      },
      upercase: {
        date: "2025",
        title: "UPER CASE IB 2025",
        description: "Top 7 of 31 teams with Packvertise at Universitas Pertamina's MBKM incubation program, advancing through 2 of 3 pitching rounds as a solo founder.",
        link: "View certificate",
      },
    }
  },
  about: {
    title: "About",
    paragraphs: [
      "I graduated from <strong>Universitas Pertamina</strong> (Indonesia) in August 2026 with a bachelor's degree in Computer Science. My thesis implemented privacy features for online game platforms based on UU PDP. I build and operate web applications and game systems.",
      "I'm the founder and sole full-stack developer behind <strong>Kaizen Network</strong>, an Indonesian Minecraft server network with 100,000+ registered accounts and 150 peak concurrent players. I own the TypeScript/Next.js applications, payment integrations, custom Java plugins and cloud operations from implementation to deployment.",
      "I also founded <strong>Packvertise</strong>, an ad-on-packaging startup that reached the top 7 of 31 teams at UPER CASE IB 2025. Outside of that, I explore AI/ML, dabble in IoT, and do security research on the side, including three Microsoft-credited vulnerability finds in Visual Studio Code and Windows PowerShell."
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
