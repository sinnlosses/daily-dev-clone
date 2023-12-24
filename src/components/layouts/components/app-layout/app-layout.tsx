import { Header } from "@/components/domain/header"
import { DesktopSidebar } from "@/components/domain/sidebar"
import { useAppContent } from "@/components/layouts/components/app-layout/hooks/use-app-layout"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-layout.module.css"

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { isDesktop, desktopSidebarIsExpanded } = useAppContent()

  return (
    <>
      <Header />
      <HStack>
        {isDesktop && (
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
        )}
        <StackItem flexGrow>{children}</StackItem>
      </HStack>
    </>
  )
}
