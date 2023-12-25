import { UseMobileSidebarReturnType } from "@/components/layouts/components/sidebar/mobile-sidebar/hooks/use-mobile-sidebar"
import { HStack } from "@/components/ui/hstack"
import { GearIcon } from "@/components/ui/icons"
import { StackItem } from "@/components/ui/stack-item"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import clsx from "clsx"
import styles from "./mobile-sidebar.module.css"

type PresentationalMobileSidebarProps = UseMobileSidebarReturnType

export const PresentationalMobileSidebar = ({
  mobileSidebarIsExpanded,
  setMobileSidebarIsExpanded,
  showCustomizeModal,
}: PresentationalMobileSidebarProps) => {
  return (
    <>
      <aside className={clsx(styles.sidebar, mobileSidebarIsExpanded && styles.sidebarExpanded)}>
        <VStack gap="l" className={styles.contents}>
          {Array.from(Array(10)).map((_, index) => {
            return (
              <VStack key={index} gap="s">
                <button className={styles.item} onClick={showCustomizeModal}>
                  <HStack alignItems="center" paddingLeft="s" gap="s">
                    <StackItem noShrink>
                      <GearIcon />
                    </StackItem>
                    <Text className={clsx(!mobileSidebarIsExpanded && styles.hidden)}>
                      Customize
                    </Text>
                  </HStack>
                </button>
              </VStack>
            )
          })}
        </VStack>
      </aside>
      {mobileSidebarIsExpanded && (
        <div className={styles.backdrop} onClick={() => setMobileSidebarIsExpanded(false)} />
      )}
    </>
  )
}

PresentationalMobileSidebar.displayName = "PresentationalSidebar"
