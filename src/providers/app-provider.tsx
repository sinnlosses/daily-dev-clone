import { DeviceProvider } from "@/concerns/device"
import { ModalProvider } from "@/concerns/modal/providers/modal-provider"
import { SidebarStateProvider } from "@/concerns/sidebar-state"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "../concerns/theme/providers/theme-provider"
import { ToasterProvider } from "./toaster/toaster-provider"

type AppProviderProps = PropsWithChildren

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToasterProvider />
      <ThemeProvider>
        <ModalProvider>
          <DeviceProvider>
            <SidebarStateProvider>{props.children}</SidebarStateProvider>
          </DeviceProvider>
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}
