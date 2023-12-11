import { HStack } from "@/components/ui/hstack"
import { GearIcon } from "@/components/ui/icons"
import { VStack } from "@/components/ui/vstack"
import Link from "next/link"
import styles from "./sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <VStack gap="l">
        {Array.from(Array(15)).map((i) => {
          return (
            <VStack key={i} gap="s">
              <p className={styles.category}>Manage</p>
              <HStack alignItems="center" paddingLeft="s" gap="s" className={styles.item}>
                <GearIcon />
                <Link href="/" className={styles.itemLink}>
                  Customize
                </Link>
              </HStack>
            </VStack>
          )
        })}
      </VStack>
    </aside>
  )
}
