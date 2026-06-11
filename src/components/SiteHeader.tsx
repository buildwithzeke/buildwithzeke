import Image from "next/image";
  
//ui data
import { navItems } from "@/constants";



export default function SiteHeader() {
  return (
    <header className="sticky top-5 z-40 flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface)]/85 px-5 py-4 backdrop-blur-xl md:px-12">
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