import { SidebarStateContext } from "@/providers/sidebar-state"
import { useSidebarStateProvider } from "@/providers/sidebar-state/hooks/use-sidebar-state-provider"
import { PropsWithChildren } from "react"

export const SidebarStateProvider = ({ children }: PropsWithChildren) => {
  const { context } = useSidebarStateProvider()
  return <SidebarStateContext.Provider value={context}>{children}</SidebarStateContext.Provider>
}
