import { useDialog } from "@/concerns/modal/hooks/use-dialog"
import { CustomizeModal } from "@/features/modal/customize-modal"

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
