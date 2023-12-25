import {
  UseSidebarStateReturnType,
  useSidebarState,
} from "@/concerns/sidebar-state/hooks/use-sidebar-state"
import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/features/modal/customize-modal/hooks/use-customize-modal"

export type UseMobileSidebarReturnType = UseSidebarStateReturnType & UseCustomizeModalReturnType

export function useMobileSidebar(): UseMobileSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const useSidebarStateReturn = useSidebarState()
  return { ...useSidebarStateReturn, ...useCustomizeModalReturnType }
}
