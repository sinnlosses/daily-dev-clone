"use client"

import { DeviceContext } from "@/providers/device"
import { useDeviceProvider } from "@/providers/device/hooks/use-device-provider"
import { PropsWithChildren } from "react"

export function DeviceProvider({ children }: PropsWithChildren) {
  const { context } = useDeviceProvider()

  return <DeviceContext.Provider value={context}>{children}</DeviceContext.Provider>
}
