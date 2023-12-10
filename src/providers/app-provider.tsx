import { MediaProvider } from "@/providers/media"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "./theme/theme-provider"
import { ToasterProvider } from "./toaster-provider"

type AppProviderProps = PropsWithChildren

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToasterProvider />
      <ThemeProvider>
        <MediaProvider breakpoint={1020}>{props.children}</MediaProvider>
      </ThemeProvider>
    </>
  )
}
