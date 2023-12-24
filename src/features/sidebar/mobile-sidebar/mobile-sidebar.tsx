import { useDesktopSidebar } from "@/features/sidebar/desktop-sidebar/hooks/use-desktop-sidebar"
import { PresentationalDesktopSidebar } from "@/features/sidebar/desktop-sidebar/presentational-desktop-sidebar"

export const MobileSidebar = () => {
  const useSidebarReturnType = useDesktopSidebar()
  return <PresentationalDesktopSidebar {...useSidebarReturnType} />
}
