import { useDialog } from "@/hooks/use-dialog"
import { PresentationalSidebar } from "./presentational-sidebar"

export const Sidebar = () => {
  const useDialogReturn = useDialog()
  return <PresentationalSidebar {...useDialogReturn} />
}
