import { DeviceContext, DeviceContextType } from "@/providers/device"
import { useContext } from "react"

export type UseDeviceReturnType = DeviceContextType

export function useDevice(): UseDeviceReturnType {
  const useDeviceReturn = useContext(DeviceContext)
  return { ...useDeviceReturn }
}
