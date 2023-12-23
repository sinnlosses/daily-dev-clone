import { SidebarStateContextType } from "@/providers/sidebar-state"
import { useCallback, useMemo, useState } from "react"

export type UseSidebarStateReturnType = {
  context: SidebarStateContextType
}

export function useSidebarStateProvider(): UseSidebarStateReturnType {
  const [isExpandedForDesktop, _setIsExpandedForDesktop] = useState(false)
  const [isExpandedForMobile, _setIsExpandedForMobile] = useState(false)

  const setIsExpandedForDesktop = useCallback(
    (value: boolean) => _setIsExpandedForDesktop(value),
    []
  )
  const setIsExpandedForMobile = useCallback((value: boolean) => _setIsExpandedForMobile(value), [])

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
