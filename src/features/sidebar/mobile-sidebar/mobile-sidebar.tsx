import { useMobileSidebar } from "@/features/sidebar/mobile-sidebar/hooks/use-mobile-sidebar"
import { PresentationalMobileSidebar } from "@/features/sidebar/mobile-sidebar/presentational-mobile-sidebar"

export const MobileSidebar = () => {
  const useSidebarReturnType = useMobileSidebar()
  return <PresentationalMobileSidebar {...useSidebarReturnType} />
}
