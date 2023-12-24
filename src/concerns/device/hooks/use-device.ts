import { DeviceContext, DeviceContextType } from "@/concerns/device"
import { useContext } from "react"

export type UseDeviceReturnType = DeviceContextType

export function useDevice(): UseDeviceReturnType {
  const useDeviceReturn = useContext(DeviceContext)
  return { ...useDeviceReturn }
}
