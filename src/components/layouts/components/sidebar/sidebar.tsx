import { useCustomizeModal } from "@/features/modal/customize-modal/hooks/use-customize-modal"
import { PresentationalSidebar } from "./presentational-sidebar"

export const Sidebar = () => {
  const useCustomizeModalReturnType = useCustomizeModal()
  return <PresentationalSidebar {...useCustomizeModalReturnType} />
}
