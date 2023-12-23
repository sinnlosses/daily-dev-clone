import { useAppContent } from "@/components/layouts/components/app-content/hooks/use-app-content"
import { Header } from "@/components/layouts/components/header"
import { PresentationalSidebar } from "@/components/layouts/components/sidebar/presentational-sidebar"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-content.module.css"

export const AppContent = ({ children }: PropsWithChildren) => {
  const { isExpanded, isDesktop, setIsExpanded, showCustomizeModal: showModal } = useAppContent()
  return (
    <>
      <Header />
      <HStack>
        {isDesktop && (
          <PresentationalSidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            showCustomizeModal={showModal}
          />
        )}
        <StackItem flexGrow className={clsx(isExpanded ? styles.narrow : styles.wide)}>
          {children}
        </StackItem>
      </HStack>
    </>
  )
}
