"use client"

import { DeviceContext } from "@/concerns/device"
import { useDeviceProvider } from "@/concerns/device/hooks/use-device-provider"
import { PropsWithChildren } from "react"

export function DeviceProvider({ children }: PropsWithChildren) {
  const { context } = useDeviceProvider()

  return <DeviceContext.Provider value={context}>{children}</DeviceContext.Provider>
}
