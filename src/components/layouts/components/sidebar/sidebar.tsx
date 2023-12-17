import { useSidebar } from "@/components/layouts/components/sidebar/hooks/use-sidebar"
import { PresentationalSidebar } from "./presentational-sidebar"

export const Sidebar = () => {
  const useSidebarReturnType = useSidebar()
  return <PresentationalSidebar {...useSidebarReturnType} />
}
