import { DeviceProvider } from "@/providers/device"
import { ModalProvider } from "@/providers/modal/modal-provider"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "./theme/theme-provider"
import { ToasterProvider } from "./toaster/toaster-provider"

type AppProviderProps = PropsWithChildren

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToasterProvider />
      <ThemeProvider>
        <ModalProvider>
          <DeviceProvider>{props.children}</DeviceProvider>
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}
