import { UseSidebarReturnType } from "@/components/layouts/components/sidebar/hooks/use-sidebar"
import { HStack } from "@/components/ui/hstack"
import { ChevronLeft, GearIcon } from "@/components/ui/icons"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import styles from "./sidebar.module.css"

type PresentationalSidebarProps = UseSidebarReturnType

export const PresentationalSidebar = ({
  isExpanded,
  setIsExpanded,
  showModal,
}: PresentationalSidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      {isExpanded ? (
        <>
          <button onClick={() => setIsExpanded(false)} className={styles.closeButton}>
            <ChevronLeft />
          </button>
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
        </>
      ) : (
        <>
          <button onClick={() => setIsExpanded(true)} className={styles.closeButton}>
            <ChevronLeft />
          </button>
          <VStack gap="l" className={styles.contents}>
            {Array.from(Array(1)).map((_, index) => {
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
        </>
      )}
    </aside>
  )
}

PresentationalSidebar.displayName = "PresentationalSidebar"
