"use client"
import { HStack } from "@/components/ui/hstack"
import { CrossIcon } from "@/components/ui/icons"
import { VStack } from "@/components/ui/vstack"
import { FC, forwardRef, PropsWithChildren, Ref } from "react"
import styles from "./dialog.module.css"

type DialogProps = PropsWithChildren<{
  title: string
  ref: Ref<HTMLDialogElement>
  onClose: () => void
}>

export const Dialog: FC<DialogProps> = forwardRef<HTMLDialogElement, DialogProps>(
  ({ title, onClose, children }, ref) => {
    return (
      <dialog className={styles.dialog} ref={ref} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <VStack>
            <HStack
              justify="spaceBetween"
              alignItems="center"
              paddingTop="s"
              paddingRight="m"
              paddingBottom="s"
              paddingLeft="m"
              className={styles.contentHeader}
            >
              <p className={styles.dialogTitle}>{title}</p>
              <CrossIcon />
            </HStack>
          </VStack>
        </div>
      </dialog>
    )
  }
)

Dialog.displayName = "Dialog"
