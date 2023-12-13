"use client"
import { Dialog } from "@/components/ui/dialog"
import { HStack } from "@/components/ui/hstack"
import { GearIcon } from "@/components/ui/icons"
import { VStack } from "@/components/ui/vstack"
import { useDialog } from "@/hooks/useDialog"
import styles from "./sidebar.module.css"

export function Sidebar() {
  const { ref: dialogRef, showModal, closeModal } = useDialog()
  const handleClick = () => {
    console.log("ダイアログオープン")
    showModal()
  }

  const handleCloseClick = () => {
    console.log("ダイアログクローズ")
    closeModal()
  }

  return (
    <aside className={styles.aside}>
      <VStack gap="l">
        {Array.from(Array(5)).map((i) => {
          return (
            <VStack key={i} gap="s">
              <p className={styles.category}>Manage</p>
              <HStack alignItems="center" paddingLeft="s" gap="s" className={styles.item}>
                <GearIcon />
                <button onClick={handleClick} className={styles.itemButton}>
                  Customize
                </button>
              </HStack>
            </VStack>
          )
        })}
        <p className={styles.category}>Manage</p>
        <HStack alignItems="center" paddingLeft="s" gap="s" className={styles.item}>
          <GearIcon />
          <button onClick={handleCloseClick} className={styles.itemButton}>
            Close
          </button>
        </HStack>
      </VStack>
      <Dialog title="Customize" ref={dialogRef} onClose={closeModal}>
        <p>Hello</p>
      </Dialog>
    </aside>
  )
}
