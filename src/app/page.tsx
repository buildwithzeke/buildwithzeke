"use client";

import Image from "next/image";
import { useState } from "react";


//data
import { impactCards, journey, mentorship, sections, work } from "@/constants";


//components
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import BuildTogetherSection from "@/components/sections/BuildTogetherSection";
import FeedTrigger from "@/components/FeedTrigger";




export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <main
      data-theme={theme}
      className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(0,102,255,.22),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(0,226,197,.2),transparent_25%),radial-gradient(circle_at_90%_72%,rgba(0,102,255,.12),transparent_28%)]" />
        <div className="min-w-0 flex-1 border-x border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20">
          <SiteHeader theme={theme} onThemeChange={setTheme} />
          <HeroSection />
          {/* <StorySection /> */}
          {/* <ImpactSection /> */}
          {/* <JourneySection /> */}
          {/* <WorkSection /> */}
          {/* <MentorshipSection /> */}
          <BuildTogetherSection />
          <ContactSection />
          <FeedTrigger />
          <Footer />
        </div>
      </div>
    </main>
  );
}


// function StorySection() {
//   return (
//     <section id="about" className="section-grid border-t border-[var(--line)] py-12">
//       <div className="relative">
//         <Image
//           src="/brand/story-portrait.png"
//           alt="Ayebidun Ezekiel working on a laptop"
//           width={225}
//           height={225}
//           className="w-full rounded-lg border border-[var(--line)] object-cover shadow-2xl"
//         />
//         <div className="stat-badge">
//           <strong>7+</strong>
//           <span>Years of Teaching & Mentoring</span>
//         </div>
//       </div>
//       <div>
//         <p className="eyebrow">My Story</p>
//         <h2 className="section-title">The Person Behind Build With Zeke</h2>
//         <div className="title-line" />
//         <p className="mt-5 leading-7 text-[var(--muted)]">
//           My journey into technology started with curiosity and a desire to solve problems. Over the years, that curiosity evolved into building software, mentoring developers, and creating solutions that help businesses grow.
//         </p>
//         <p className="mt-4 leading-7 text-[var(--muted)]">
//           Today, through <strong className="text-[#0e8cff]">Build With Zeke</strong> and DEVZEKE, I combine software development, mentorship, and innovation to create meaningful impact.
//         </p>
//       </div>
//     </section>
//   );
// }

// function ImpactSection() {
//   return (
//     <section className="border-t border-[var(--line)] px-5 py-12 md:px-12">
//       <CenteredHeading eyebrow="What I Do" title="How I Create Impact" />
//       <div className="mt-8 grid gap-5 md:grid-cols-3">
//         {impactCards.map((card) => (
//           <article key={card.title} className="card">
//             <div className={`icon-box bg-gradient-to-br ${card.tone}`}>{card.icon}</div>
//             <h3 className="mt-5 text-2xl font-bold text-[var(--accent)]">{card.title}</h3>
//             <div className="title-line my-3" />
//             <p className="leading-7 text-[var(--muted)]">{card.text}</p>
//           </article>
//         ))}
//       </div>
//       <p className="mt-8 text-center text-xs font-black uppercase tracking-[.55em] text-[var(--accent)]">
//         Build <span className="text-[var(--text)]">&bull;</span> Solve <span className="text-[var(--text)]">&bull;</span> Empower
//       </p>
//     </section>
//   );
// }

// function JourneySection() {
//   return (
//     <section className="border-t border-[var(--line)] px-5 py-12 md:px-12">
//       <CenteredHeading eyebrow="My Journey" title="My Journey" />
//       <div className="relative mt-10 grid gap-8 md:grid-cols-5">
//         <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-[#0e5cff] via-[#12d3ff] to-[#20e0b0] md:block" />
//         {journey.map(([icon, title, text]) => (
//           <article key={title} className="relative text-center">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--surface)] text-sm font-black text-[var(--accent)] shadow-lg">
//               {icon}
//             </div>
//             <h3 className="mt-5 text-base font-black">{title}</h3>
//             <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function WorkSection() {
//   return (
//     <section id="work" className="border-t border-[var(--line)] px-5 py-12 md:px-12">
//       <CenteredHeading eyebrow="Things I've Built" title="Featured Work" />
//       <div className="mt-8 grid gap-6 md:grid-cols-3">
//         {work.map((item) => (
//           <article key={item.title} className="card p-4">
//             <Image
//               src={item.image}
//               alt={`${item.title} website preview`}
//               width={170}
//               height={68}
//               className="h-28 w-full rounded-md border border-[var(--line)] object-cover"
//             />
//             <h3 className="mt-5 text-2xl font-bold text-[var(--accent)]">{item.title}</h3>
//             <p className="mt-1 font-semibold">{item.type}</p>
//             <p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p>
//             <a href="#connect" className="mt-5 inline-flex font-bold text-[var(--accent)]">
//               View Project &rarr;
//             </a>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function MentorshipSection() {
//   return (
//     <section id="mentorship" className="section-grid border-t border-[var(--line)] py-12">
//       <Image
//         src="/brand/mentor.png"
//         alt="Mentorship session with Zeke"
//         width={248}
//         height={183}
//         className="h-full min-h-72 w-full rounded-lg border border-[var(--line)] object-cover"
//       />
//       <div>
//         <p className="eyebrow">Mentorship</p>
//         <h2 className="section-title">Learn With Zeke</h2>
//         <div className="title-line" />
//         <p className="mt-5 leading-7 text-[var(--muted)]">
//           Whether you&apos;re just starting your journey or looking to level up your development skills, I provide practical mentorship focused on real-world experience, project building, and career growth.
//         </p>
//         <a href="#connect" className="btn-primary mt-7">
//           Book a Mentorship Session <span>&rarr;</span>
//         </a>
//       </div>
//       <div className="space-y-5 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
//         {mentorship.map(([icon, title, text]) => (
//           <div key={title} className="flex gap-4">
//             <div className="icon-ring">{icon}</div>
//             <div>
//               <h3 className="font-black">{title}</h3>
//               <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





// function CenteredHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
//   return (
//     <div className="text-center">
//       <p className="eyebrow justify-center">{eyebrow}</p>
//       <h2 className="section-title">{title}</h2>
//       <div className="title-line mx-auto" />
//     </div>
//   );
// }

// function SideIndex({ align = "left" }: { align?: "left" | "right" }) {
//   return (
//     <aside className={`sticky top-0 hidden h-screen w-28 shrink-0 flex-col justify-around py-24 xl:flex ${align === "right" ? "items-start pl-5" : "items-end pr-5"}`}>
//       {sections.map(([number, label]) => (
//         <div key={`${align}-${number}`} className={`w-20 ${align === "right" ? "text-left" : "text-left"}`}>
//           <p className="text-lg font-black">{number}</p>
//           <div className="my-2 h-px w-8 bg-[var(--text)]" />
//           <p className="text-sm font-black uppercase leading-5">{label}</p>
//         </div>
//       ))}
//     </aside>
//   );
// }
