import { UseDeviceReturnType, useDevice } from "@/concerns/device/hooks/use-device"
import {
  UseSidebarStateReturnType,
  useSidebarState,
} from "@/concerns/sidebar-state/hooks/use-sidebar-state"

type UseAppLayoutReturnType = UseSidebarStateReturnType & UseDeviceReturnType

export function useAppLayout(): UseAppLayoutReturnType {
  const useDeviceReturn = useDevice()
  const useSidebarStateReturn = useSidebarState()
  return { ...useDeviceReturn, ...useSidebarStateReturn }
}
