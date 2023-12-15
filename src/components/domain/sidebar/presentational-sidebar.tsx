import { HStack } from "@/components/ui/hstack"
import { GearIcon } from "@/components/ui/icons"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { forwardRef } from "react"
import styles from "./sidebar.module.css"

type SidebarProps = {
  showModal: () => void
  closeModal: () => void
}

export const PresentationalSidebar = forwardRef<HTMLDialogElement, SidebarProps>(
  ({ showModal, closeModal }, dialogRef) => {
    return (
      <aside className={styles.aside}>
        <VStack gap="l">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <VStack key={index} gap="s">
                <p className={styles.category}>Manage</p>
                <button className={styles.item} onClick={showModal}>
                  <HStack alignItems="center" paddingLeft="s" gap="s" className={styles.item}>
                    <GearIcon />
                    <Text>Customize</Text>
                  </HStack>
                </button>
              </VStack>
            )
          })}
        </VStack>
      </aside>
    )
  }
)

PresentationalSidebar.displayName = "PresentationalSidebar"
