import { useMobileSidebar } from "@/components/layouts/components/sidebar/mobile-sidebar/hooks/use-mobile-sidebar"
import { PresentationalMobileSidebar } from "@/components/layouts/components/sidebar/mobile-sidebar/presentational-mobile-sidebar"

export const MobileSidebar = () => {
  const useSidebarReturnType = useMobileSidebar()
  return <PresentationalMobileSidebar {...useSidebarReturnType} />
}
