import { HStack } from "@/components/ui/hstack"
import { GearIcon } from "@/components/ui/icons"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { UseCustomizeModalReturnType } from "@/features/modal/customize-modal/hooks/use-customize-modal"
import styles from "./sidebar.module.css"

type SidebarProps = UseCustomizeModalReturnType

export const PresentationalSidebar = ({ showModal }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <button onClick={() => console.log("OK")} className={styles.closeButton}></button>
      <VStack gap="l" className={styles.contents}>
        {Array.from(Array(10)).map((_, index) => {
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

PresentationalSidebar.displayName = "PresentationalSidebar"
