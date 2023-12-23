import { SidebarStateContextType } from "@/providers/sidebar-state"
import { useMemo, useState } from "react"

export type UseSidebarStateReturnType = {
  context: SidebarStateContextType
}

export function useSidebarStateProvider(): UseSidebarStateReturnType {
  const [isExpandedForDesktop, setIsExpandedForDesktop] = useState(true)
  const [isExpandedForMobile, setIsExpandedForMobile] = useState(false)

  const context = useMemo<SidebarStateContextType>(
    () => ({
      isExpandedForDesktop,
      setIsExpandedForDesktop,
      isExpandedForMobile,
      setIsExpandedForMobile,
    }),
    [isExpandedForDesktop, isExpandedForMobile, setIsExpandedForDesktop, setIsExpandedForMobile]
  )

  return { context }
}
