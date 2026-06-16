import { themeType } from "@/type/type";


//icons
import { Sun, Moon } from "lucide-react";



export default function ThemeSwitch({ theme, onThemeChange }: themeType) {
  return (
    <>
      {theme === "light" ? (
        <Moon onClick={() => onThemeChange("dark")} className="text-[var(--muted)] hover:text-[var(--text)] cursor-pointer" />
      ) : (
        <Sun onClick={() => onThemeChange("light")} className="text-[var(--muted)] hover:text-[var(--text)] cursor-pointer" />
      )}

    </>
  );
}

