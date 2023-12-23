import { useAppContent } from "@/components/layouts/components/app-content/hooks/use-app-content"
import { Header } from "@/components/layouts/components/header"
import { Sidebar } from "@/components/layouts/components/sidebar"
import { HStack } from "@/components/ui/hstack"
import { StackItem } from "@/components/ui/stack-item"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./app-content.module.css"

export const AppContent = ({ children }: PropsWithChildren) => {
  const { isDesktop, isExpandedForDesktop } = useAppContent()

  return (
    <>
      <Header />
      <HStack>
        {isDesktop && <Sidebar />}
        <StackItem flexGrow className={clsx(isExpandedForDesktop ? styles.narrow : styles.wide)}>
          {children}
        </StackItem>
      </HStack>
    </>
  )
}
