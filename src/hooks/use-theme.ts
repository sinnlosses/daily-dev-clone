"use client"
import { useCallback, useState } from "react"

export type Theme = "light" | "dark" | "auto"

export type UseThemeReturn = {
  theme: Theme
  setTheme: (value: Theme) => void
}

export function useTheme(): UseThemeReturn {
  const [theme, _setTheme] = useState<Theme>("auto")

  const setTheme = useCallback((newTheme: Theme) => {
    _setTheme(newTheme)

    window.localStorage.setItem("theme", newTheme)

    const newDataTheme = () => {
      if (newTheme === "auto") {
        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        return mql.matches ? "dark" : "light"
      }
      return newTheme
    }

    const root = window.document.documentElement
    root.setAttribute("data-theme", newDataTheme())
  }, [])

  return { theme, setTheme }
}
