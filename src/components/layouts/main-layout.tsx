"use client"
import { AppContent } from "@/components/layouts/components/app-content"
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
          <AppContent>{children}</AppContent>
        </AppProvider>
      </body>
    </html>
  )
}
