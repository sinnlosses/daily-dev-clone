"use client"
import { HamburgerIcon } from "@/components/ui/icons"
import { useMediaContext } from "@/providers/media"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export function Header() {
  const { isMobile } = useMediaContext()
  return (
    <header className={styles.header}>
      {isMobile && (
        <button className={styles.button}>
          <HamburgerIcon />
        </button>
      )}
      <Link href={"/"} className={styles.link}>
        <Image src={"/dolphin.png"} width={100} height={30} alt="logo" priority />
      </Link>
    </header>
  )
}
