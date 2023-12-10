"use client"
import { HamburgerIcon } from "@/components/ui/icons"
import { WhenVisible } from "@/components/ui/when-visible"
import { useConfig } from "@/hooks"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export function Header() {
  const { assets } = useConfig()
  return (
    <header className={styles.header}>
      {/* useMediaQuery を使用するとSSR時の初回HTMLから useEffect によって状態が変化した場合に画面がちらつくため、CSSによる制御を採用している */}
      <WhenVisible mobile>
        <button className={styles.button}>
          <HamburgerIcon />
        </button>
      </WhenVisible>
      <Link href={"/"} className={styles.link}>
        <Image src={assets.headerLogoPath} width={100} height={30} alt="logo" priority />
      </Link>
    </header>
  )
}
