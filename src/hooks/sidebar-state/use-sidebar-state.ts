import { SidebarStateContext, SidebarStateContextType } from "@/providers/sidebar-state"
import { useContext } from "react"

export type UseSidebarStateReturnType = SidebarStateContextType

export function useSidebarState() {
  const useSidebarStateReturn = useContext(SidebarStateContext)
  return { ...useSidebarStateReturn }
}
