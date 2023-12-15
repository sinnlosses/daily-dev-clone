import { PropsWithChildren } from "react"
import { ThemeProvider } from "./theme/theme-provider"
import { ToasterProvider } from "./toaster/toaster-provider"

type AppProviderProps = PropsWithChildren

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToasterProvider />
      <ThemeProvider>{props.children}</ThemeProvider>
    </>
  )
}
