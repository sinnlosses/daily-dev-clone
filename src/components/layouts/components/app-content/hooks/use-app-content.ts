import {
  UseSidebarReturnType,
  useSidebar,
} from "@/components/layouts/components/sidebar/hooks/use-sidebar"
import { UseDeviceReturn, useDevice } from "@/hooks/use-device"

type UseAppContentReturnType = UseSidebarReturnType & UseDeviceReturn

export function useAppContent(): UseAppContentReturnType {
  const useDeviceReturn = useDevice(1020)
  const useSidebarReturn = useSidebar({ initIsExpanded: useDeviceReturn.isDesktop })
  return { ...useSidebarReturn, ...useDeviceReturn }
}
