import { Header } from "@/components/layouts/components/header"
import { useSidebar } from "@/components/layouts/components/sidebar/hooks/use-sidebar"
import { PresentationalSidebar } from "@/components/layouts/components/sidebar/presentational-sidebar"
import { HStack } from "@/components/ui/hstack"
import { WhenVisible } from "@/components/ui/when-visible"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-content.module.css"

export const AppContent = ({ children }: PropsWithChildren) => {
  const { isExpanded, ...useSidebarReturn } = useSidebar()
  return (
    <>
      <Header />
      <HStack
        className={clsx(
          styles.mainContainer,
          isExpanded ? styles.mainContainerNarrow : styles.mainContainerWide
        )}
      >
        <WhenVisible desktop>
          <PresentationalSidebar isExpanded={isExpanded} {...useSidebarReturn} />
        </WhenVisible>
        <main className={styles.main}>{children}</main>
      </HStack>
    </>
  )
}
