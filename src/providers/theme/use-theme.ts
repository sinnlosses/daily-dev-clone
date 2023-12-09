"use client"
import type { SetStateAction } from "react"
import { useState } from "react"

export type Theme = "light" | "dark"

export type UseThemeReturn = {
  isDarkMode: boolean
  toggleTheme: () => void
  setTheme: (value: SetStateAction<Theme>) => void
}

export function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState<Theme>("light")

  const isDarkMode = theme === "dark"
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    window.localStorage.setItem("theme", newTheme)

    const root = window.document.documentElement
    root.setAttribute("data-theme", newTheme)
  }

  return { isDarkMode, toggleTheme, setTheme }
}
