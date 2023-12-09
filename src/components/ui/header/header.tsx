"use client"
import { HamburgerIcon } from "@/components/ui/icons"
import { Text } from "@/components/ui/text"
import Image from "next/image"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <HamburgerIcon />
      </button>
      <div className={styles.imageContainer}>
        <Image src={"/dolphin.png"} width={30} height={30} alt="logo" />
        <Text>Dolphin</Text>
      </div>
    </header>
  )
}
