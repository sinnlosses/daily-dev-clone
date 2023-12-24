import { useAppLayout } from "@/components/layouts/components/app-layout/hooks/use-app-layout"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import { Header } from "@/features/header"
import { DesktopSidebar, MobileSidebar } from "@/features/sidebar"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-layout.module.css"

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { isDesktop, desktopSidebarIsExpanded } = useAppLayout()

  return (
    <>
      <Header />
      <HStack>
        {isDesktop ? (
          <div
            className={clsx(
              styles.desktopSidebar,
              desktopSidebarIsExpanded
                ? styles.desktopSidebarExpanded
                : styles.desktopSidebarCollapsed
            )}
          >
            <DesktopSidebar />
          </div>
        ) : (
          <div className={styles.mobideSidebar}>
            <MobileSidebar />
          </div>
        )}
        <StackItem flexGrow>{children}</StackItem>
      </HStack>
    </>
  )
}
