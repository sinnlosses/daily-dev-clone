import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/features/modal/customize-modal/hooks/use-customize-modal"
import { useSidebarState } from "@/hooks/sidebar-state/use-sidebar-state"
import { Dispatch, SetStateAction } from "react"

export type UseSidebarReturnType = UseCustomizeModalReturnType & {
  isExpandedForDesktop: boolean
  setIsExpandedForDesktop: Dispatch<SetStateAction<boolean>>
}

export function useSidebar(): UseSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const { isExpandedForDesktop, setIsExpandedForDesktop } = useSidebarState()
  console.log(`isExpanded: ${isExpandedForDesktop}`)
  return { ...useCustomizeModalReturnType, isExpandedForDesktop, setIsExpandedForDesktop }
}
