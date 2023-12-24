import { useSidebar } from "@/components/domain/sidebar/hooks/use-sidebar"
import { PresentationalSidebar } from "./presentational-sidebar"

export const DesktopSidebar = () => {
  const useSidebarReturnType = useSidebar()

  return <PresentationalSidebar {...useSidebarReturnType} />
}
