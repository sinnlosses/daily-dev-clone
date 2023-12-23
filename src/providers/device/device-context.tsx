import { createContext } from "react"

export type DeviceContextType = {
  isDesktop: boolean
  isMobile: boolean
}

export const DeviceContext = createContext<DeviceContextType>({
  isDesktop: false,
  isMobile: false,
})
