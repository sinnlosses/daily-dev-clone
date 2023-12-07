import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import { AppProvider } from "@/providers"
import styles from "./main-layout.module.css"

const inter = Inter({ subsets: ["latin"] })

type MainLayoutProps = PropsWithChildren

export function MainLayout(props: MainLayoutProps) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppProvider>
          <main className={styles.container}>{props.children}</main>
        </AppProvider>
      </body>
    </html>
  )
}
