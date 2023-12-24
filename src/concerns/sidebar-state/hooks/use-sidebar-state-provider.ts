import { SidebarStateContextType } from "@/concerns/sidebar-state"
import { useMemo, useState } from "react"

export type UseSidebarStateReturnType = {
  context: SidebarStateContextType
}

export function useSidebarStateProvider(): UseSidebarStateReturnType {
  const [desktopSidebarIsExpanded, setDesktopSideberIsExpanded] = useState(true)
  const [mobileSidebarIsExpanded, setmobileSidebarIsExpanded] = useState(false)

  const context = useMemo<SidebarStateContextType>(
    () => ({
      desktopSidebarIsExpanded,
      setDesktopSideberIsExpanded,
      mobileSidebarIsExpanded,
      setmobileSidebarIsExpanded,
    }),
    [desktopSidebarIsExpanded, mobileSidebarIsExpanded]
  )

  return { context }
}
