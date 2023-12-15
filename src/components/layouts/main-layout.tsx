"use client"
import { Header } from "@/components/layouts/components/header"
import { Sidebar } from "@/components/layouts/components/sidebar"
import { HStack } from "@/components/ui/hstack"
import { WhenVisible } from "@/components/ui/when-visible"
import { AppProvider } from "@/providers"
import clsx from "clsx"
import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import styles from "./main-layout.module.css"

const inter = Inter({ subsets: ["latin"] })

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, styles.body)}>
        <AppProvider>
          <Header />
          <HStack>
            <WhenVisible desktop>
              <Sidebar />
            </WhenVisible>
            <main className={styles.main}>{children}</main>
          </HStack>
        </AppProvider>
      </body>
    </html>
  )
}
