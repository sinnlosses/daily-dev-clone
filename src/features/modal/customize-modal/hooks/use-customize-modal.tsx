import { PresentationalCustomizeModal } from "@/features/modal/customize-modal"
import { useDialog } from "@/hooks/use-dialog"
import { useTheme } from "@/hooks/use-theme"
import { Theme } from "@/providers/theme/theme-context"

export type UseCustomizeModalReturnType = {
  theme: Theme
  setTheme: (value: Theme) => void
  showModal: () => void
}

export function useCustomizeModal(): UseCustomizeModalReturnType {
  const { theme, setTheme } = useTheme()
  const { ref, showModal: _showModal, closeModal } = useDialog()

  const showModal = () =>
    _showModal(() => (
      <PresentationalCustomizeModal
        ref={ref}
        theme={theme}
        setTheme={setTheme}
        onClose={closeModal}
      />
    ))

  return { theme, setTheme, showModal }
}
