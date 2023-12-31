import { useTheme } from "@/concerns/theme/hooks/use-theme"
import { PresentationalCustomizeModal } from "@/features/modal/customize-modal/presentational-customize-modal"
import { FC, Ref, forwardRef } from "react"

type CustomizeModalProps = {
  ref: Ref<HTMLDialogElement>
  onClose: () => void
}

export const CustomizeModal: FC<CustomizeModalProps> = forwardRef<
  HTMLDialogElement,
  CustomizeModalProps
>(({ onClose }, ref) => {
  const { theme, setTheme } = useTheme()
  return (
    <PresentationalCustomizeModal ref={ref} theme={theme} setTheme={setTheme} onClose={onClose} />
  )
})

CustomizeModal.displayName = "CustomiseModal"
