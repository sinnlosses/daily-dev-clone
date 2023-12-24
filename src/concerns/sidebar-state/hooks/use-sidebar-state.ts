import { SidebarStateContext, SidebarStateContextType } from "@/concerns/sidebar-state"
import { useContext } from "react"

export type UseSidebarStateReturnType = SidebarStateContextType

export function useSidebarState() {
  const useSidebarStateReturn = useContext(SidebarStateContext)
  return { ...useSidebarStateReturn }
}
