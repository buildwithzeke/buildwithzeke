import { themeType } from "@/type/type";


//icons
import { Sun, Moon } from "lucide-react";



export default function ThemeSwitch({ theme, onThemeChange }: themeType) {
  return (
    <div className= "fixed p-2 right-0 top-[50%] z-50 flex rounded-l-md border border-[var(--line)] bg-[var(--panel)] p-1 shadow-xl backdrop-blur" >
      { theme === "light" ? (
        <Moon onClick= {() => onThemeChange("dark")
} className = "text-[var(--muted)] hover:text-[var(--text)] cursor-pointer" />
      ) : (
  <Sun onClick= {() => onThemeChange("light")} className = "text-[var(--muted)] hover:text-[var(--text)] cursor-pointer" />
      )}

</div>
  );
}

