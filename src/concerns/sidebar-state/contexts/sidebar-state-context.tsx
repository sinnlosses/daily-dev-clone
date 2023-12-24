import { Dispatch, SetStateAction, createContext } from "react"

export type SidebarStateContextType = {
  desktopSidebarIsExpanded: boolean
  setDesktopSideberIsExpanded: Dispatch<SetStateAction<boolean>>
  mobileSidebarIsExpanded: boolean
  setMobileSidebarIsExpanded: Dispatch<SetStateAction<boolean>>
}

export const SidebarStateContext = createContext<SidebarStateContextType>({
  desktopSidebarIsExpanded: false,
  setDesktopSideberIsExpanded: () => undefined,
  mobileSidebarIsExpanded: false,
  setMobileSidebarIsExpanded: () => undefined,
})
