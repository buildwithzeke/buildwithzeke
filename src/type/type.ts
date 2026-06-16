export type themeType = {
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
} 