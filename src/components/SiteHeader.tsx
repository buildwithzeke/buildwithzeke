//type
import { themeType } from "@/type/type";

//icons
import { Menu } from "lucide-react";
import Image from "next/image";


import Navbar from "./layout/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";



export default function SiteHeader({ theme, onThemeChange }: themeType) {

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface)]/85 px-5 py-4 backdrop-blur-xl md:px-12">
      <a href="#home" className="flex items-center gap-3">
        <Image src="/brand/logo-mark.png" alt="DEVZEKE logo" width={95} height={28} priority />
      </a>

      <Navbar />

      <div className="flex gap-3 items-center justify-between p-2">
        <ThemeSwitch theme={theme} onThemeChange={onThemeChange} />

        <div className="hidden md:block">
          <a href="#connect" className="btn-outline">
            Let&apos;s Connect
          </a>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded border border-[var(--line)] text-xl lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}