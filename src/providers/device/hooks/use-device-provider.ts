import { useMediaQuery } from "@/hooks"
import { DeviceContextType } from "@/providers/device"
import { useMemo } from "react"

export type UseDeviceReturnType = {
  context: DeviceContextType
}

export function useDeviceProvider(): UseDeviceReturnType {
  const isDesktop = useMediaQuery(`(min-width: 1020px)`)
  const isMobile = !isDesktop

  const context = useMemo<DeviceContextType>(
    () => ({
      isDesktop,
      isMobile,
    }),
    [isDesktop, isMobile]
  )
  return { context }
}
