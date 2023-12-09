"use client"
import { PropsWithChildren, createContext, useContext, useEffect } from "react"
import { Theme, UseThemeReturn, useTheme } from "./use-theme"

const ThemeContext = createContext<UseThemeReturn | undefined>(undefined)

export function useThemeContext(): UseThemeReturn {
  return useContext(ThemeContext)!
}

export function ThemeProvider(props: PropsWithChildren) {
  const { isDarkMode, toggleTheme, setTheme } = useTheme()

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.getAttribute("data-theme")
    setTheme(initialColorValue as Theme)
  }, [setTheme])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      <script
        // body のレンダリング前にテーマを設定しておくことで表示直後のちらつきを防ぐ
        // ref: https://zenn.dev/minguu42/articles/20220113-nextjs-darkmode
        dangerouslySetInnerHTML={{
          __html: `!function(){
              let theme;
              const storageTheme = window.localStorage.getItem("theme");
              if (storageTheme !== null) {
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
