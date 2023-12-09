"use client"
import { HamburgerIcon } from "@/components/ui/icons"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <HamburgerIcon />
      </button>
    </header>
  )
}
