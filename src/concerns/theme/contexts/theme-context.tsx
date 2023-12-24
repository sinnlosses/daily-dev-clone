import { createContext } from "react"

export type Theme = "light" | "dark" | "auto"

export type ThemeContextType = {
  theme: Theme
  setTheme: (value: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "auto",
  setTheme: () => undefined,
})
