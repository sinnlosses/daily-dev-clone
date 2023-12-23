import { UseSidebarReturnType } from "@/components/layouts/components/sidebar/hooks/use-sidebar"
import { HStack } from "@/components/ui/hstack"
import { ChevronLeft, ChevronRight, GearIcon } from "@/components/ui/icons"
import { StackItem } from "@/components/ui/stack-item"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import clsx from "clsx"
import styles from "./sidebar.module.css"

type PresentationalSidebarProps = UseSidebarReturnType

export const PresentationalSidebar = ({
  isExpanded,
  setIsExpanded,
  showCustomizeModal: showModal,
}: PresentationalSidebarProps) => {
  return (
    <aside className={clsx(styles.sidebar, isExpanded ? styles.sidebarWide : styles.sidebarNarrow)}>
      <button onClick={() => setIsExpanded((prev) => !prev)} className={styles.closeButton}>
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <VStack gap="l" className={styles.contents}>
        {Array.from(Array(10)).map((_, index) => {
          return (
            <VStack key={index} gap="s">
              <p className={clsx(styles.category, !isExpanded && styles.hidden)}>Manage</p>
              <button className={styles.item} onClick={showModal}>
                <HStack alignItems="center" paddingLeft="s" gap="s">
                  <StackItem noShrink>
                    <GearIcon />
                  </StackItem>
                  <Text className={clsx(!isExpanded && styles.hidden)}>Customize</Text>
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
