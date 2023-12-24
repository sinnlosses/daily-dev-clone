import { useSidebar } from "@/components/domain/sidebar/hooks/use-sidebar"
import { PresentationalSidebar } from "@/components/domain/sidebar/presentational-sidebar"

export const MobileSidebar = () => {
  const useSidebarReturnType = useSidebar()
  return <PresentationalSidebar {...useSidebarReturnType} />
}
