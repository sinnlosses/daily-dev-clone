import { Dispatch, SetStateAction, createContext } from "react"

export type SidebarStateContextType = {
  isExpandedForDesktop: boolean
  setIsExpandedForDesktop: Dispatch<SetStateAction<boolean>>
  isExpandedForMobile: boolean
  setIsExpandedForMobile: Dispatch<SetStateAction<boolean>>
}

export const SidebarStateContext = createContext<SidebarStateContextType>({
  isExpandedForDesktop: false,
  setIsExpandedForDesktop: () => undefined,
  isExpandedForMobile: false,
  setIsExpandedForMobile: () => undefined,
})
