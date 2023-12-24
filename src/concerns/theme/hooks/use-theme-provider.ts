import { Theme, ThemeContextType } from "@/concerns/theme/contexts/theme-context"
import { loggerInfo } from "@/lib"
import { useCallback, useMemo, useState } from "react"

export type UseThemeProviderReturnType = {
  context: ThemeContextType
  getThemeFromLocalStorage: () => Theme | null
  setTheme: (value: Theme) => void
}

export function useThemeProvider(): UseThemeProviderReturnType {
  const [theme, _setTheme] = useState<Theme>("auto")

  const getThemeFromLocalStorage = () => {
    return window.localStorage.getItem("theme") as Theme | null
  }

  const saveThemeToLocalStorage = (theme: Theme) => {
    window.localStorage.setItem("theme", theme)
  }

  const setThemeToRootHTML = (theme: Theme) => {
    const newDataTheme = () => {
      if (theme === "auto") {
        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        return mql.matches ? "dark" : "light"
      }
      return theme
    }

    const root = window.document.documentElement
    root.setAttribute("data-theme", newDataTheme())
  }

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (theme === newTheme) return

      loggerInfo(`theme changed: from ${theme} to ${newTheme}`)

      _setTheme(newTheme)
      saveThemeToLocalStorage(newTheme)
      setThemeToRootHTML(newTheme)
    },
    [theme]
  )

  const context = useMemo<ThemeContextType>(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  )

  return { context, getThemeFromLocalStorage, setTheme: _setTheme }
}
