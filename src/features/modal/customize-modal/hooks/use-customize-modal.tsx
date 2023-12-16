import { PresentationalCustomizeModal } from "@/features/modal/customize-modal"
import { useDialog } from "@/hooks/use-dialog"
import { Theme, useTheme } from "@/hooks/use-theme"
import { ModalContext } from "@/providers/modal/modal-context"
import { useContext } from "react"

export type UseCustomizeModalReturnType = {
  theme: Theme
  setTheme: (value: Theme) => void
  showModal: () => void
}

export function useCustomizeModal(): UseCustomizeModalReturnType {
  const { theme, setTheme } = useTheme()

  const { ref, showModal: _showModal, closeModal } = useDialog()
  const { setRenderer } = useContext(ModalContext)
  const showModal = () => {
    setRenderer({
      render: () => (
        <PresentationalCustomizeModal
          ref={ref}
          theme={theme}
          setTheme={setTheme}
          onClose={closeModal}
        />
      ),
    })
    _showModal()
  }

  return { theme, setTheme, showModal }
}
