"use client"
import { Theme, ThemeContext } from "@/providers/theme/theme-context"
import { useContext } from "react"

export type UseThemeReturn = {
  theme: Theme
  setTheme: (value: Theme) => void
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext)
  return { theme, setTheme }
}
