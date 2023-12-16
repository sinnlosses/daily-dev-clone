import { Dialog } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/dialog/dialog-content"
import { DialogHeader } from "@/components/ui/dialog/dialog-header"
import { FC, Ref, forwardRef } from "react"

type PresentationalCustomizeModalProps = {
  ref: Ref<HTMLDialogElement>
  onClose: () => void
}

export const PresentationalCustomizeModal: FC<PresentationalCustomizeModalProps> = forwardRef<
  HTMLDialogElement,
  PresentationalCustomizeModalProps
>(({ onClose }, ref) => {
  return (
    <Dialog ref={ref} onClose={onClose}>
      <DialogHeader title="Customize" onClose={onClose} />
      <DialogContent>
        <p>Hello</p>
      </DialogContent>
    </Dialog>
  )
})

PresentationalCustomizeModal.displayName = "PresentationalCustomizeModal"
