import { HStack } from "@/components/ui/hstack"
import { ChevronLeft, ChevronRight, GearIcon } from "@/components/ui/icons"
import { StackItem } from "@/components/ui/stack-item"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { UseDesktopSidebarReturnType } from "@/features/sidebar/desktop-sidebar/hooks/use-desktop-sidebar"
import clsx from "clsx"
import styles from "./desktop-sidebar.module.css"

type PresentationalDesktopSidebarProps = UseDesktopSidebarReturnType

export const PresentationalDesktopSidebar = ({
  desktopSidebarIsExpanded,
  setDesktopSideberIsExpanded,
  showCustomizeModal: showModal,
}: PresentationalDesktopSidebarProps) => {
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

PresentationalDesktopSidebar.displayName = "PresentationalSidebar"
