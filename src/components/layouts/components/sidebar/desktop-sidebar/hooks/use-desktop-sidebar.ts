import { useSidebarState } from "@/concerns/sidebar-state/hooks/use-sidebar-state"
import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/features/modal/customize-modal/hooks/use-customize-modal"
import { Dispatch, SetStateAction } from "react"

export type UseDesktopSidebarReturnType = UseCustomizeModalReturnType & {
  desktopSidebarIsExpanded: boolean
  setDesktopSideberIsExpanded: Dispatch<SetStateAction<boolean>>
}

export function useDesktopSidebar(): UseDesktopSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const { desktopSidebarIsExpanded, setDesktopSideberIsExpanded } = useSidebarState()

  return { ...useCustomizeModalReturnType, desktopSidebarIsExpanded, setDesktopSideberIsExpanded }
}
