import { CustomizeModal } from "@/features/modal/customize-modal"
import { useDialog } from "@/hooks/modal/use-dialog"

export type UseCustomizeModalReturnType = {
  showCustomizeModal: () => void
}

export function useCustomizeModal(): UseCustomizeModalReturnType {
  const { ref, showModal, closeModal } = useDialog()

  const showCustomizeModal = () => {
    showModal(() => <CustomizeModal ref={ref} onClose={closeModal} />)
  }

  return { showCustomizeModal }
}
