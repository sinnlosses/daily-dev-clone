import { UseDeviceReturnType, useDevice } from "@/hooks/device/use-device"
import { UseSidebarStateReturnType, useSidebarState } from "@/hooks/sidebar-state/use-sidebar-state"

type UseAppContentReturnType = UseSidebarStateReturnType & UseDeviceReturnType

export function useAppContent(): UseAppContentReturnType {
  const useDeviceReturn = useDevice()
  const useSidebarStateReturn = useSidebarState()
  return { ...useDeviceReturn, ...useSidebarStateReturn }
}
