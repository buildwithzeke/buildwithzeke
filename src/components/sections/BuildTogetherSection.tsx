// import Link from "next/link";

import Image from "next/image";

// export default function BuildTogetherSection() {
//     return (
//         <section id="build" className="border-t border-[var(--line)] px-5 py-12 md:px-12">
//             <div className="card">
//                 <p className="eyebrow">How I Can Help</p>
//                 <h2 className="section-title">Let&apos;s Work Together</h2>
//                 <div className="title-line" />
//                 <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
//                     Whether you need a new website, software solution, or want to level up your development skills, I&apos;m here to help.
//                 </p>
//                 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//                     <Link href="#connect" className="btn-primary">
//                         Start a Project <span>&rarr;</span>
//                     </Link>
//                     <Link href="/mentorship" className="btn-ghost">
//                         Book Mentorship
//                     </Link>
//                 </div>
//             </div>
//         </section>

//     );
// }


export default function BuildTogetherSection() {
    return (
        <section className="section-grid border-t border-[var(--line)] py-12">
            <div >
                <p className="eyebrow bg-gradient-to-r from-[#0e5cff] to-[#20e0b0] bg-clip-text text-transparent">Let&apos;s Work Together</p>
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
                className="h-full min-h-64 w-full rounded-lg object-cover"
            />
        </section>
    );
}