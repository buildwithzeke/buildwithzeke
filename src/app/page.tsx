"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = ["Home", "About", "Work", "Mentorship", "Blog"];

const sections = [
  ["01.", "Hero"],
  ["02.", "My Story"],
  ["03.", "How I Create Impact"],
  ["04.", "My Journey"],
  ["05.", "Featured Work"],
  ["06.", "Learn With Zeke"],
  ["07.", "Let's Work Together"],
  ["08.", "Let's Connect"],
];

const impactCards = [
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

const journey = [
  ["Book", "Started Learning Tech", "It all started with curiosity and a desire to understand how things work."],
  ["</>", "Built My First Projects", "I built small projects, learned by doing, and improved my skills every day."],
  ["User", "Began Mentoring Developers", "I started teaching and mentoring others, helping them grow in tech."],
  ["DZ", "Founded DEVZEKE", "I created DEVZEKE to build solutions, share knowledge, and create impact."],
  ["Up", "Helping Businesses & Developers Grow", "Today, I help businesses build and developers level up their skills and careers."],
];

const work = [
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

const mentorship = [
  ["@","1-on-1 Mentorship", "Personalized guidance based on your goals."],
  ["</>","Project-Based Learning", "Learn by building real-world projects."],
  ["Up","Career Growth", "Get support, clarity, and direction."],
  ["#","Community Access", "Join a community of passionate learners."],
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <main
      data-theme={theme}
      className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      <ThemeSwitch theme={theme} onThemeChange={setTheme} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(0,102,255,.22),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(0,226,197,.2),transparent_25%),radial-gradient(circle_at_90%_72%,rgba(0,102,255,.12),transparent_28%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl">
          <div className="min-w-0 flex-1 border-x border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20">
            <SiteHeader />
            <HeroSection />
            <StorySection />
            <ImpactSection />
            <JourneySection />
            <WorkSection />
            <MentorshipSection />
            <BuildTogetherSection />
            <ContactSection />
            <Footer />
          </div>
          
        </div>
      </div>
    </main>
  );
}

function ThemeSwitch({
  theme,
  onThemeChange,
}: {
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}) {
  return (
    <div className="fixed right-4 top-4 z-50 flex rounded-md border border-[var(--line)] bg-[var(--panel)] p-1 shadow-xl backdrop-blur">
      {(["dark", "light"] as const).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => onThemeChange(mode)}
          className={`rounded px-3 py-2 text-xs font-bold uppercase tracking-[.12em] transition ${
            theme === mode
              ? "bg-gradient-to-r from-[#0e5cff] to-[#20e0b0] text-white"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface)]/85 px-5 py-4 backdrop-blur-xl md:px-12">
      <a href="#home" className="flex items-center gap-3">
        <Image src="/brand/logo-mark.png" alt="DEVZEKE logo" width={95} height={28} priority />
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
            {item}
          </a>
        ))}
      </nav>
      <a href="#connect" className="btn-outline hidden sm:inline-flex">
        Let&apos;s Connect
      </a>
      <button className="flex h-10 w-10 items-center justify-center rounded border border-[var(--line)] text-xl lg:hidden">
        Menu
      </button>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="section-grid min-h-[680px] items-center pb-10 pt-14 md:pt-20">
      <div className="relative z-10 max-w-xl">
        <p className="eyebrow">Hi, I&apos;m</p>
        <h1 className="mt-3 text-5xl font-black leading-[.95] tracking-normal md:text-7xl">
          Ayebidun
          <br />
          Ezekiel<span className="text-[#20e0b0]">.</span>
        </h1>
        <p className="mt-6 text-xl font-semibold leading-8 text-[var(--text)]">
          Software Engineer, Mentor & Founder building digital solutions and empowering future developers.
        </p>
        <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
          I help businesses build their digital presence through websites and software solutions while mentoring aspiring developers to grow their skills and careers.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#connect" className="btn-primary">
            Work With Me <span>&rarr;</span>
          </a>
          <a href="#mentorship" className="btn-ghost">
            Book Mentorship
          </a>
        </div>
      </div>
      <div className="relative min-h-[390px]">
        <div className="absolute right-4 top-6 hidden text-[16rem] font-black leading-none text-[var(--brand-ghost)] md:block">
          DZ
        </div>
        <div className="arrow-shape" />
        <Image
          src="/brand/hero-person.png"
          alt="Ayebidun Ezekiel"
          width={282}
          height={290}
          priority
          className="relative z-10 ml-auto mt-12 w-full max-w-[360px] object-contain drop-shadow-2xl"
        />
        <div className="founder-card">
          <Image src="/brand/logo-mark.png" alt="" width={70} height={21} />
          <span>Founder of DEVZEKE</span>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="about" className="section-grid border-t border-[var(--line)] py-12">
      <div className="relative">
        <Image
          src="/brand/story-portrait.png"
          alt="Ayebidun Ezekiel working on a laptop"
          width={225}
          height={225}
          className="w-full rounded-lg border border-[var(--line)] object-cover shadow-2xl"
        />
        <div className="stat-badge">
          <strong>7+</strong>
          <span>Years of Teaching & Mentoring</span>
        </div>
      </div>
      <div>
        <p className="eyebrow">My Story</p>
        <h2 className="section-title">The Person Behind Build With Zeke</h2>
        <div className="title-line" />
        <p className="mt-5 leading-7 text-[var(--muted)]">
          My journey into technology started with curiosity and a desire to solve problems. Over the years, that curiosity evolved into building software, mentoring developers, and creating solutions that help businesses grow.
        </p>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Today, through <strong className="text-[#0e8cff]">Build With Zeke</strong> and DEVZEKE, I combine software development, mentorship, and innovation to create meaningful impact.
        </p>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="border-t border-[var(--line)] px-5 py-12 md:px-12">
      <CenteredHeading eyebrow="What I Do" title="How I Create Impact" />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {impactCards.map((card) => (
          <article key={card.title} className="card">
            <div className={`icon-box bg-gradient-to-br ${card.tone}`}>{card.icon}</div>
            <h3 className="mt-5 text-2xl font-bold text-[var(--accent)]">{card.title}</h3>
            <div className="title-line my-3" />
            <p className="leading-7 text-[var(--muted)]">{card.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-xs font-black uppercase tracking-[.55em] text-[var(--accent)]">
        Build <span className="text-[var(--text)]">&bull;</span> Solve <span className="text-[var(--text)]">&bull;</span> Empower
      </p>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="border-t border-[var(--line)] px-5 py-12 md:px-12">
      <CenteredHeading eyebrow="My Journey" title="My Journey" />
      <div className="relative mt-10 grid gap-8 md:grid-cols-5">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-[#0e5cff] via-[#12d3ff] to-[#20e0b0] md:block" />
        {journey.map(([icon, title, text]) => (
          <article key={title} className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--surface)] text-sm font-black text-[var(--accent)] shadow-lg">
              {icon}
            </div>
            <h3 className="mt-5 text-base font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="border-t border-[var(--line)] px-5 py-12 md:px-12">
      <CenteredHeading eyebrow="Things I've Built" title="Featured Work" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {work.map((item) => (
          <article key={item.title} className="card p-4">
            <Image
              src={item.image}
              alt={`${item.title} website preview`}
              width={170}
              height={68}
              className="h-28 w-full rounded-md border border-[var(--line)] object-cover"
            />
            <h3 className="mt-5 text-2xl font-bold text-[var(--accent)]">{item.title}</h3>
            <p className="mt-1 font-semibold">{item.type}</p>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p>
            <a href="#connect" className="mt-5 inline-flex font-bold text-[var(--accent)]">
              View Project &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function MentorshipSection() {
  return (
    <section id="mentorship" className="section-grid border-t border-[var(--line)] py-12">
      <Image
        src="/brand/mentor.png"
        alt="Mentorship session with Zeke"
        width={248}
        height={183}
        className="h-full min-h-72 w-full rounded-lg border border-[var(--line)] object-cover"
      />
      <div>
        <p className="eyebrow">Mentorship</p>
        <h2 className="section-title">Learn With Zeke</h2>
        <div className="title-line" />
        <p className="mt-5 leading-7 text-[var(--muted)]">
          Whether you&apos;re just starting your journey or looking to level up your development skills, I provide practical mentorship focused on real-world experience, project building, and career growth.
        </p>
        <a href="#connect" className="btn-primary mt-7">
          Book a Mentorship Session <span>&rarr;</span>
        </a>
      </div>
      <div className="space-y-5 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
        {mentorship.map(([icon, title, text]) => (
          <div key={title} className="flex gap-4">
            <div className="icon-ring">{icon}</div>
            <div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BuildTogetherSection() {
  return (
    <section className="section-grid border-t border-[var(--line)] py-12">
      <div>
        <p className="eyebrow">Let&apos;s Work Together</p>
        <h2 className="section-title">I Help You Build, Solve & Grow Digitally</h2>
        <ul className="mt-6 grid gap-3 text-sm font-semibold sm:grid-cols-2">
          {["Website Design", "Developer Training", "Business Websites", "Technical Guidance", "Software Solutions"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-[var(--accent)]">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <a href="#connect" className="btn-primary mt-7">
          Start a Project <span>&rarr;</span>
        </a>
      </div>
      <Image
        src="/brand/desk-brand.png"
        alt="DEVZEKE branded laptop workspace"
        width={305}
        height={160}
        className="h-full min-h-64 w-full rounded-lg border border-[var(--line)] object-cover"
      />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="connect" className="grid gap-8 border-t border-[var(--line)] px-5 py-12 md:grid-cols-[.9fr_1.2fr_.9fr] md:px-12">
      <div>
        <h2 className="section-title text-3xl">Let&apos;s Build Something Amazing Together</h2>
      </div>
      <form className="space-y-3">
        <input className="field" placeholder="Your Name" />
        <input className="field" placeholder="Your Email" />
        <textarea className="field min-h-28 resize-none" placeholder="What do you need help with?" />
        <button className="btn-primary" type="button">
          Send Message <span>&rarr;</span>
        </button>
      </form>
      <div className="space-y-4">
        {["ayebidunezekiel@gmail.com", "www.buildwithzeke.com", "@buildwithzeke"].map((item, index) => (
          <p key={item} className="flex items-center gap-3 font-semibold">
            <span className="icon-ring h-9 w-9 text-xs">{["@", "www", "f"][index]}</span>
            {item}
          </p>
        ))}
        <div className="flex flex-wrap gap-3 pt-3">
          {["in", "X", "ig", "yt", "gh"].map((item) => (
            <span key={item} className="icon-ring h-9 w-9 text-xs">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 text-center">
      <Image src="/brand/logo-mark.png" alt="DEVZEKE logo" width={118} height={35} className="mx-auto" />
      <p className="mt-4 text-sm text-[var(--muted)]">&copy; 2025 DEVZEKE. All rights reserved.</p>
    </footer>
  );
}

function CenteredHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow justify-center">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className="title-line mx-auto" />
    </div>
  );
}

function SideIndex({ align = "left" }: { align?: "left" | "right" }) {
  return (
    <aside className={`sticky top-0 hidden h-screen w-28 shrink-0 flex-col justify-around py-24 xl:flex ${align === "right" ? "items-start pl-5" : "items-end pr-5"}`}>
      {sections.map(([number, label]) => (
        <div key={`${align}-${number}`} className={`w-20 ${align === "right" ? "text-left" : "text-left"}`}>
          <p className="text-lg font-black">{number}</p>
          <div className="my-2 h-px w-8 bg-[var(--text)]" />
          <p className="text-sm font-black uppercase leading-5">{label}</p>
        </div>
      ))}
    </aside>
  );
}
