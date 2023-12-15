import { Dialog } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/dialog/dialog-content"
import { DialogHeader } from "@/components/ui/dialog/dialog-header"
import { forwardRef, type ForwardedRef } from "react"

type PresentationalCustomizeModalProps = {
  ref: ForwardedRef<HTMLDialogElement>
  onClose: () => void
}

export const PresentationalCustomizeModal = forwardRef<
  HTMLDialogElement,
  PresentationalCustomizeModalProps
>(({ onClose }: PresentationalCustomizeModalProps, ref) => {
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
