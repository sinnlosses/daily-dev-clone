"use client"
import { VStack } from "@/components/ui/vstack"
import { FC, forwardRef, PropsWithChildren, Ref } from "react"
import styles from "./dialog.module.css"

type DialogProps = PropsWithChildren<{
  ref: Ref<HTMLDialogElement>
  onClose: () => void
}>

export const Dialog: FC<DialogProps> = forwardRef<HTMLDialogElement, DialogProps>(
  ({ onClose, children }, ref) => {
    return (
      <dialog className={styles.dialog} ref={ref} onClick={onClose}>
        <div className={styles.dialogInner} onClick={(e) => e.stopPropagation()}>
          <VStack>{children}</VStack>
        </div>
      </dialog>
    )
  }
)

Dialog.displayName = "Dialog"
