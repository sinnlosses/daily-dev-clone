import { UseDeviceReturnType, useDevice } from "@/concerns/device/hooks/use-device"
import {
  UseSidebarStateReturnType,
  useSidebarState,
} from "@/concerns/sidebar-state/hooks/use-sidebar-state"

type UseAppContentReturnType = UseSidebarStateReturnType & UseDeviceReturnType

export function useAppContent(): UseAppContentReturnType {
  const useDeviceReturn = useDevice()
  const useSidebarStateReturn = useSidebarState()
  return { ...useDeviceReturn, ...useSidebarStateReturn }
}
