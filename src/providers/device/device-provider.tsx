"use client"
import { PropsWithChildren, createContext, useContext } from "react"
import type { UseDeviceReturn } from "./use-device"
import { useDevice } from "./use-device"

const DeviceContext = createContext<UseDeviceReturn | undefined>(undefined)

export function useDeviceContext(): UseDeviceReturn {
  return useContext(DeviceContext)!
}

type DeviceProviderProps = PropsWithChildren<{
  breakpoint: number
}>
export function MediaProvider(props: DeviceProviderProps) {
  const device = useDevice(props.breakpoint)

  return <DeviceContext.Provider value={device}>{props.children}</DeviceContext.Provider>
}
