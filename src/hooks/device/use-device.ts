import { DeviceContext } from "@/providers/device"
import { useContext } from "react"

export type UseDeviceReturn = {
  isDesktop: boolean
  isMobile: boolean
}
export function useDevice(): UseDeviceReturn {
  const useDeviceReturn = useContext(DeviceContext)
  return { ...useDeviceReturn }
}
