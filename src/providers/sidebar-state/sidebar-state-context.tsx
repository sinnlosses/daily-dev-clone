import { createContext } from "react"

export type SidebarStateContextType = {
  isExpandedForDesktop: boolean
  setIsExpandedForDesktop: (value: boolean) => void
  isExpandedForMobile: boolean
  setIsExpandedForMobile: (value: boolean) => void
}

export const SidebarStateContext = createContext<SidebarStateContextType>({
  isExpandedForDesktop: false,
  setIsExpandedForDesktop: () => undefined,
  isExpandedForMobile: false,
  setIsExpandedForMobile: () => undefined,
})
