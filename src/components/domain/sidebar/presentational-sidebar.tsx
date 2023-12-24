import { UseSidebarReturnType } from "@/components/domain/sidebar/hooks/use-sidebar"
import { HStack } from "@/components/ui/hstack"
import { ChevronLeft, ChevronRight, GearIcon } from "@/components/ui/icons"
import { StackItem } from "@/components/ui/stack-item"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import clsx from "clsx"
import styles from "./desktop-sidebar.module.css"

type PresentationalSidebarProps = UseSidebarReturnType

export const PresentationalSidebar = ({
  desktopSidebarIsExpanded,
  setDesktopSideberIsExpanded,
  showCustomizeModal: showModal,
}: PresentationalSidebarProps) => {
  return (
    <aside className={clsx(styles.sidebar)}>
      <button
        onClick={() => setDesktopSideberIsExpanded((prev) => !prev)}
        className={styles.closeButton}
      >
        {desktopSidebarIsExpanded ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <VStack gap="l" className={styles.contents}>
        {Array.from(Array(10)).map((_, index) => {
          return (
            <VStack key={index} gap="s">
              <p className={clsx(styles.category, !desktopSidebarIsExpanded && styles.hidden)}>
                Manage
              </p>
              <button className={styles.item} onClick={showModal}>
                <HStack alignItems="center" paddingLeft="s" gap="s">
                  <StackItem noShrink>
                    <GearIcon />
                  </StackItem>
                  <Text className={clsx(!desktopSidebarIsExpanded && styles.hidden)}>
                    Customize
                  </Text>
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
