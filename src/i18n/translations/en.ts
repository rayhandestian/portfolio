export const en = {
  nav: {
    projects: "Projects",
    skills: "Skills",
    achievements: "Achievements",
    about: "About",
    contact: "Contact",
    switch_lang: "Bahasa Indonesia",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Rayhan Destian",
    tagline: "Computer Science Student · Full-Stack Developer · Game Dev Enthusiast",
    description: "Founder of Kaizen Network, a Minecraft server network with 100,000+ registered players. I build immersive game experiences and modern web applications.",
    cta_email: "hi@rayhan.ch",
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
        uptime: "Uptime",
      },
    },
    kaizen: {
      game_servers: {
        title: "Game Servers",
        description: "Orchestrated complex gameplay systems involving a mixed survival mechanics, island-based economy, custom skills, guild management, interconnected scripts, and many more.",
      },
      web_platform: {
        title: "Web Platform",
        description: "Full-stack brand website with game server status, leaderboards, e-commerce (store) platform with payment gateway integration, and a comprehensive admin dashboard.",
      },
      infrastructure: {
        title: "Infrastructure",
        description: "High-availability infrastructure managing multiple game nodes, databases, automated deployments, to Discord bot orchestration.",
      }
    },
    list: {
      thesis: {
        title: "UU PDP Compliance for Kaizen Network",
        description: "Undergraduate thesis: a seven-step framework for translating Indonesia's Personal Data Protection Law (UU PDP) into technical requirements, applied to Kaizen Network's 107,000+ accounts. Shipped a Privacy by Design module: in-game consent dialogs, a Next.js portal for data access, export, and deletion, append-only audit trails, automated retention, and hardened APIs. All 9 compliance items met and 15 test cases passed in production.",
        link_thesis: "Read thesis",
        link_poster: "View poster",
      },
      top_mc: {
        title: "Top MC Servers Indonesia",
        description: "Interactive ranking history of Indonesia's top Minecraft servers from 2012 to 2026, rebuilt from 49 Wayback Machine snapshots covering 150+ servers. Custom bump charts split into two eras, with a downloadable dataset. Published as a Kaizen Network blog page.",
      },
      cloudshort: {
        title: "Cloudshort",
        description: "High-performance, private URL shortener powering kzn.li. Built on the Cloudflare ecosystem using Workers and Hono for sub-50ms redirects, with a React dashboard for link management.",
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
        description: "Solo-founded ad startup placing brand ads on disposable food packaging: advertisers reach customers where they eat, and food vendors get free packaging plus a revenue share. Produced and distributed 1,000 QR-tracked branded packages through two campus canteen tenants and ran a pilot campaign for one client. Top 7 of 31 teams at UPER CASE IB 2025 (MBKM, Universitas Pertamina), advancing through 2 of 3 pitching rounds.",
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
        date: "August 2026",
        title: "Microsoft Security Response Center",
        description: "Credited by Microsoft as the finder of CVE-2026-47285, a command injection information disclosure vulnerability in Visual Studio Code rated Important (CVSS 6.5).",
        link: "View advisory",
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
      "I'm a final-year Computer Science student at <strong>Universitas Pertamina</strong> (Indonesia), graduating in 2026 with a thesis on UU PDP compliance for online game platforms. I love building things that live on the internet and in games.",
      "I'm the founder and sole technical architect behind <strong>Kaizen Network</strong>, an Indonesian Minecraft server network with 100,000+ registered accounts and 150 peak concurrent players. I handle almost every technical thing there, from game scripting and custom plugin development to full-stack web development and cloud infrastructure management, at 99.9% uptime.",
      "I also founded <strong>Packvertise</strong>, an ad-on-packaging startup that reached the top 7 of 31 teams at UPER CASE IB 2025. Outside of that, I explore AI/ML, dabble in IoT, and do security research on the side, including a Microsoft-credited vulnerability find in Visual Studio Code."
    ]
  },
  contact: {
    title: "Contact",
    subtitle: "Pick a starting point, or write your own message.",
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
