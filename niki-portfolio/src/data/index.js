export const personalInfo = {
  name: "Niki Mahdian",
  title: "AI & Backend Specialist",
  subtitle: "Building intelligent systems where cutting-edge AI meets robust backend architecture",
  email: "Niki.mahdian@gmail.com",
  phone: "+98 996 066 3327",
  location: "Tehran, Iran",
  bio: "AI & Backend Specialist crafting intelligent solutions through the seamless fusion of advanced machine learning algorithms and scalable Django architectures. Currently pursuing cutting-edge research in autonomous vehicle optimization while engineering robust backend systems that power AI-driven applications.",
  social: {
    linkedin: "https://www.linkedin.com/in/erfan-mohammdapour/",
    github: "https://github.com/thisiserfun",
    instagram: "https://instagram.com/nikimahdian"
  },
  cvUrl: "/cv/niki-mahdian-cv.pdf",
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Niki",
  heroImage: "/images/hero/hero-main.svg"
}

export const certifications = [
  {
    id: 1,
    issuer: "IBM",
    title: "Data Analysis with Python",
    issuedDate: "Jun 2025",
    credentialId: "88PDFJ38AQN7",
    url: "#"
  },
  {
    id: 2,
    issuer: "Google",
    title: "Foundations: Data, Data, Everywhere",
    issuedDate: "Jun 2025",
    credentialId: "74LJEDCJIV5Y",
    url: "#"
  },
  {
    id: 3,
    issuer: "IBM",
    title: "Python for Data Science, AI & Development",
    issuedDate: "Jun 2025",
    credentialId: "P4JD3MALSV4A",
    url: "#"
  },
  {
    id: 4,
    issuer: "Stanford University",
    title: "Supervised Machine Learning: Regression and Classification",
    issuedDate: "Jun 2025",
    credentialId: "5MSB6PEUBWEL",
    url: "#"
  }
]

export const education = [
  {
    id: 1,
    degree: "Bachelor of Electrical Engineering",
    institution: "K.N. Toosi University of Technology",
    period: "2021 - Present",
    description: "Focus on AI, Machine Learning, and Autonomous Systems",
    gpa: "Ongoing"
  },
  {
    id: 2,
    degree: "High School Diploma - Mathematics Branch",
    institution: "Farzanegan 1 School (SAMPAAD)",
    period: "2015 - 2021",
    description: "Elite school for exceptional students, Mathematics specialization",
    gpa: "Excellent"
  }
]

export const experience = [
  {
    id: 1,
    position: "AI Research & Development",
    company: "CDH",
    period: "2024 - Present",
    description: "Working on cutting-edge tokenization platforms with blockchain technology",
    achievements: [
      "MADT: Developing tokenization platform for real estate and tourism sectors",
      "Mintoro: Building secure gold tokenization platform with multi-layer security",
      "Implementing blockchain-based secondary markets for token trading",
      "Enabling secure investment, collateralization, and institutional trade features"
    ]
  },
  {
    id: 2,
    position: "AI Research",
    company: "Academic Research",
    period: "2022 - Present",
    description: "2 years of research experience in AI and Machine Learning",
    achievements: [
      "Currently working on paper about Task Offloading in Autonomous Vehicles",
      "Research in Task Scheduling algorithms for distributed systems",
      "Developing ML models for autonomous vehicle decision-making",
      "Exploring optimization techniques for edge computing in vehicles"
    ]
  }
]

export const skills = {
  ai_ml: [
    { name: "Machine Learning", level: 90, icon: "machine-learning" },
    { name: "Deep Learning", level: 85, icon: "deep-learning" },
    { name: "TensorFlow/PyTorch", level: 85, icon: "tensorflow" },
    { name: "Computer Vision", level: 80, icon: "computer-vision" },
    { name: "Natural Language Processing", level: 75, icon: "nlp" },
    { name: "Neural Networks", level: 85, icon: "neural-networks" }
  ],
  backend: [
    { name: "Python", level: 95, icon: "python" },
    { name: "C++", level: 85, icon: "cpp" },
    { name: "Node.js", level: 80, icon: "nodejs" },
    { name: "API Development", level: 85, icon: "api" },
    { name: "Database Design", level: 80, icon: "database" },
    { name: "System Architecture", level: 75, icon: "architecture" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "git" },
    { name: "Docker", level: 75, icon: "docker" },
    { name: "Linux", level: 85, icon: "linux" },
    { name: "LaTeX", level: 90, icon: "latex" },
    { name: "MATLAB", level: 80, icon: "matlab" },
    { name: "Jupyter", level: 85, icon: "jupyter" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "MADT Platform",
    description: "Revolutionary blockchain tokenization platform for real estate and tourism assets with secondary market trading capabilities.",
    longDescription: "Developed cutting-edge tokenization platform at CDH enabling fractional ownership of real estate and tourism assets. Features blockchain-based secondary markets, secure investment protocols, and institutional-grade compliance.",
    image: "/images/projects/madt-platform.png",
    category: "AI/Backend",
    technologies: ["Python", "Blockchain", "Smart Contracts", "Web3"],
    features: [
      "Asset tokenization framework",
      "Secondary market trading",
      "Smart contract automation",
      "Institutional compliance"
    ],
    date: "2024"
  },
  {
    id: 2,
    title: "Mintoro - Gold Tokenization",
    description: "Secure gold tokenization platform with multi-layer security architecture for institutional investment and collateralization.",
    longDescription: "Built enterprise-grade gold tokenization system with advanced security measures. Enables secure gold-backed token creation, institutional trading capabilities, and collateralization features for financial institutions.",
    image: "/images/projects/mintoro-platform.png",
    category: "AI/Backend",
    technologies: ["Python", "Blockchain", "Security Protocols", "API Development"],
    features: [
      "Multi-layer security architecture",
      "Gold-backed token creation",
      "Institutional trading interface",
      "Collateralization protocols"
    ],
    date: "2024"
  },
  {
    id: 3,
    title: "Task Offloading Research",
    description: "Academic research project on optimizing task offloading algorithms for autonomous vehicle networks.",
    longDescription: "Currently working on paper about task offloading in autonomous vehicles. Research focuses on developing ML algorithms for optimizing computational task distribution in vehicle networks to reduce latency and improve real-time decision-making.",
    image: "/images/projects/task-offloading-research.png",
    category: "AI/ML Research",
    technologies: ["Python", "MATLAB", "Machine Learning", "Optimization"],
    features: [
      "Task scheduling algorithms",
      "Network optimization",
      "Real-time decision making",
      "Performance evaluation"
    ],
    date: "2022-Present"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at Tech Innovations",
    company: "Tech Innovations Inc.",
    text: "Niki is an exceptional developer who consistently delivers high-quality solutions. His ability to understand complex requirements and translate them into elegant code is remarkable.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "Digital Solutions Corp",
    text: "Working with Niki was a great experience. He brings creative solutions to challenging problems and is always willing to go the extra mile to ensure project success.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer",
    company: "Creative Agency",
    text: "Niki has an excellent eye for design implementation. He transforms designs into pixel-perfect, responsive interfaces while adding smooth animations that enhance user experience.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    position: "Engineering Manager",
    company: "StartupXYZ",
    text: "Niki's technical skills are matched only by his professionalism and dedication. He's a team player who mentors junior developers and contributes to a positive work environment.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5
  }
]

