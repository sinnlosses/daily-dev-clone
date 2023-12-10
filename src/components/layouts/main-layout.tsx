import { Header } from "@/components/ui/header"
import { HStack } from "@/components/ui/hstack"
import { Sidebar } from "@/components/ui/sidebar"
import { WhenVisible } from "@/components/ui/when-visible"
import { AppProvider } from "@/providers"
import clsx from "clsx"
import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import styles from "./main-layout.module.css"

const inter = Inter({ subsets: ["latin"] })

type MainLayoutProps = PropsWithChildren

export function MainLayout(props: MainLayoutProps) {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, styles.body)}>
        <AppProvider>
          <Header />
          <HStack>
            <WhenVisible desktop>
              <Sidebar />
            </WhenVisible>
            <main className={styles.main}>{props.children}</main>
          </HStack>
        </AppProvider>
      </body>
    </html>
  )
}
