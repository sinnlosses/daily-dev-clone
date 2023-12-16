import { loggerInfo } from "@/lib"
import { Theme, ThemeContextType } from "@/providers/theme/theme-context"
import { useCallback, useMemo, useState } from "react"

export type UseThemeProviderReturnType = {
  context: ThemeContextType
  setTheme: (value: Theme) => void
}

export function useThemeProvider(): UseThemeProviderReturnType {
  const [theme, _setTheme] = useState<Theme>("auto")
  const setTheme = useCallback(
    (newTheme: Theme) => {
      loggerInfo(`provider:: theme: ${theme}, newTheme: ${newTheme}`)
      if (theme === newTheme) return

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

  return { context, setTheme }
}
