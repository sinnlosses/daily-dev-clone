import { Header } from "@/components/domain/header"
import { DesktopSidebar, MobileSidebar } from "@/components/domain/sidebar"
import { useAppContent } from "@/components/layouts/components/app-layout/hooks/use-app-layout"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-content.module.css"

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { isDesktop, desktopSidebarIsExpanded } = useAppContent()

  return (
    <>
      <Header />
      <HStack>
        {isDesktop ? <DesktopSidebar /> : <MobileSidebar />}
        <StackItem
          flexGrow
          className={clsx(desktopSidebarIsExpanded ? styles.narrow : styles.wide)}
        >
          {children}
        </StackItem>
      </HStack>
    </>
  )
}
