import { PresentationalCustomizeModal } from "@/features/modal/customize-modal"
import { useDialog } from "@/hooks/use-dialog"
import { ModalContext } from "@/providers/modal/modal-context"
import { useContext } from "react"

export type UseCustomizeModalReturnType = {
  showModal: () => void
}

export function useCustomizeModal(): UseCustomizeModalReturnType {
  const { ref, showModal: _showModal, closeModal } = useDialog()
  const { setRenderer } = useContext(ModalContext)

  const showModal = () => {
    setRenderer({ render: () => <PresentationalCustomizeModal ref={ref} onClose={closeModal} /> })
    _showModal()
  }

  return { showModal }
}
