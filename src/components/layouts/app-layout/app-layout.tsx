import { useAppLayout } from "@/components/layouts/app-layout/hooks/use-app-layout"
import { Header } from "@/components/layouts/components/header"
import { DesktopSidebar } from "@/components/layouts/components/sidebar"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-layout.module.css"

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { isDesktop, desktopSidebarIsExpanded } = useAppLayout()

  return (
    <>
      <Header />
      <HStack>
        <div
          className={clsx(
            styles.desktopSidebar,
            isDesktop ? styles.desktopSidebarVisible : styles.desktopSidebarHidden,
            desktopSidebarIsExpanded
              ? styles.desktopSidebarExpanded
              : styles.desktopSidebarCollapsed
          )}
        >
          <DesktopSidebar />
        </div>
        <StackItem flexGrow>{children}</StackItem>
      </HStack>
    </>
  )
}
