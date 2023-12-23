import { SidebarStateContext } from "@/providers/sidebar-state"
import { useContext } from "react"

export function useSidebarState() {
  const useSidebarStateReturn = useContext(SidebarStateContext)
  return { useSidebarStateReturn }
}
