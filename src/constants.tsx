export const navItems: string[] = ["Home", "About", "Work", "Mentorship", "Blog"];

export const sections: [string, string][] = [
  ["01.", "Hero"],
  ["02.", "My Story"],
  ["03.", "How I Create Impact"],
  ["04.", "My Journey"],
  ["05.", "Featured Work"],
  ["06.", "Learn With Zeke"],
  ["07.", "Let's Work Together"],
  ["08.", "Let's Connect"],
];

export const impactCards: { icon: string; title: string; tone: string; text: string }[] = [
  {
    icon: "</>",
    title: "Build",
    tone: "from-[#0e5cff] to-[#00d5ff]",
    text: "I design and develop websites, web applications, and digital solutions that help businesses establish a strong digital presence.",
  },
  {
    icon: "+",
    title: "Solve",
    tone: "from-[#18a986] to-[#20e0b0]",
    text: "I help businesses use technology to solve problems, improve processes, and achieve growth through smart digital solutions.",
  },
  {
    icon: "3",
    title: "Empower",
    tone: "from-[#0f8ec7] to-[#25f0d1]",
    text: "I mentor aspiring developers and share practical knowledge through training, content, and community.",
  },
];

export const journey: [string, string, string][] = [
  ["Book", "Started Learning Tech", "It all started with curiosity and a desire to understand how things work."],
  ["</>", "Built My First Projects", "I built small projects, learned by doing, and improved my skills every day."],
  ["User", "Began Mentoring Developers", "I started teaching and mentoring others, helping them grow in tech."],
  ["DZ", "Founded DEVZEKE", "I created DEVZEKE to build solutions, share knowledge, and create impact."],
  ["Up", "Helping Businesses & Developers Grow", "Today, I help businesses build and developers level up their skills and careers."],
];

export const work: { image: string; title: string; type: string; text: string }[] = [
  {
    image: "/brand/work-payzeker.png",
    title: "Payzeker",
    type: "Fintech Platform",
    text: "A task and rewards platform that allows users earn through digital activities.",
  },
  {
    image: "/brand/work-codene.png",
    title: "CodeneAcademy",
    type: "Developer Education",
    text: "An online platform focused on training the next generation of developers through practical learning.",
  },
  {
    image: "/brand/work-client.png",
    title: "Client Websites",
    type: "Business Solutions",
    text: "Modern, responsive websites and web applications built for businesses and individuals.",
  },
];

export const mentorship: [string, string, string][] = [
  ["@", "1-on-1 Mentorship", "Personalized guidance based on your goals."],
  ["</>", "Project-Based Learning", "Learn by building real-world projects."],
  ["Up", "Career Growth", "Get support, clarity, and direction."],
  ["#", "Community Access", "Join a community of passionate learners."],
];
