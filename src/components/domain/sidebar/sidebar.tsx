import { useDialog } from "@/hooks/useDialog"
import { PresentationalSidebar } from "./presentational-sidebar"

export const Sidebar = () => {
  const useDialogReturn = useDialog()
  return <PresentationalSidebar {...useDialogReturn} />
}
