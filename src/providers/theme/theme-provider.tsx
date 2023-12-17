"use client"
import { Theme, ThemeContext } from "@/providers/theme/theme-context"
import { useThemeProvider } from "@/providers/theme/use-theme-provider"
import { PropsWithChildren, useEffect } from "react"

export function ThemeProvider(props: PropsWithChildren) {
  const { context, getThemeFromLocalStorage, setTheme } = useThemeProvider()

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.getAttribute("data-theme")
    const maybeSavedTheme = getThemeFromLocalStorage()
    if (maybeSavedTheme && maybeSavedTheme === "auto") {
      setTheme("auto")
    } else {
      setTheme(initialColorValue as Theme)
    }
  }, [getThemeFromLocalStorage, setTheme])

  return (
    <ThemeContext.Provider value={context}>
      <script
        // body のレンダリング前にテーマを設定しておくことで表示直後のちらつきを防ぐ
        // ref: https://zenn.dev/minguu42/articles/20220113-nextjs-darkmode
        dangerouslySetInnerHTML={{
          __html: `!function(){
              let theme;
              const storageTheme = window.localStorage.getItem("theme");
              if (storageTheme !== null && storageTheme !== "auto") {
                theme = storageTheme;
              } else {
                const mql = window.matchMedia("(prefers-color-scheme: dark)");
                theme = mql.matches ? "dark" : "light";
              }
              const root = document.documentElement;
              root.setAttribute("data-theme", theme);
          }();`,
        }}
      />
      {props.children}
    </ThemeContext.Provider>
  )
}
