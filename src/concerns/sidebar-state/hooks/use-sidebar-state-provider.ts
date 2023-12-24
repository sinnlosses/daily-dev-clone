import { SidebarStateContextType } from "@/concerns/sidebar-state"
import { useMemo, useState } from "react"

export type UseSidebarStateProviderReturnType = {
  context: SidebarStateContextType
}

export function useSidebarStateProvider(): UseSidebarStateProviderReturnType {
  const [desktopSidebarIsExpanded, setDesktopSideberIsExpanded] = useState(true)
  const [mobileSidebarIsExpanded, setmobileSidebarIsExpanded] = useState(false)

  const context = useMemo<SidebarStateContextType>(
    () => ({
      desktopSidebarIsExpanded,
      setDesktopSideberIsExpanded,
      mobileSidebarIsExpanded,
      setMobileSidebarIsExpanded: setmobileSidebarIsExpanded,
    }),
    [desktopSidebarIsExpanded, mobileSidebarIsExpanded]
  )

  return { context }
}
