import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/components/domain/modal/customize-modal/hooks/use-customize-modal"
import { useSidebarState } from "@/concerns/sidebar-state/hooks/use-sidebar-state"
import { Dispatch, SetStateAction } from "react"

export type UseSidebarReturnType = UseCustomizeModalReturnType & {
  isExpandedForDesktop: boolean
  setIsExpandedForDesktop: Dispatch<SetStateAction<boolean>>
}

export function useSidebar(): UseSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const {
    desktopSidebarIsExpanded: isExpandedForDesktop,
    setDesktopSideberIsExpanded: setIsExpandedForDesktop,
  } = useSidebarState()

  return { ...useCustomizeModalReturnType, isExpandedForDesktop, setIsExpandedForDesktop }
}
