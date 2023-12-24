import { useDesktopSidebar } from "@/features/sidebar/desktop-sidebar/hooks/use-desktop-sidebar"
import { PresentationalDesktopSidebar } from "./presentational-desktop-sidebar"

export const DesktopSidebar = () => {
  const useSidebarReturnType = useDesktopSidebar()

  return <PresentationalDesktopSidebar {...useSidebarReturnType} />
}
