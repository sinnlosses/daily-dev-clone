import { CustomizeModal } from "@/features/modal/customize-modal"
import { useDialog } from "@/hooks/modal/use-dialog"

export type UseCustomizeModalReturnType = {
  showModal: () => void
}

export function useCustomizeModal(): UseCustomizeModalReturnType {
  const { ref, showModal: _showModal, closeModal } = useDialog()

  const showModal = () => {
    _showModal(() => <CustomizeModal ref={ref} onClose={closeModal} />)
  }

  return { showModal }
}
