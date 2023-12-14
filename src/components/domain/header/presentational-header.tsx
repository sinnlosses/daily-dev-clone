import { HamburgerIcon } from "@/components/ui/icons"
import { WhenVisible } from "@/components/ui/when-visible"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

type HeaderProps = {
  logoPath: string
}

export const PresentationalHeader = ({ logoPath }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {/* useMediaQuery を使用するとSSR時の初回HTMLから useEffect によって状態が変化した場合に画面がちらつくため、CSSによる制御を採用している */}
      <WhenVisible mobile>
        <button className={styles.button}>
          <HamburgerIcon />
        </button>
      </WhenVisible>
      <Link href={"/"} className={styles.link}>
        <Image src={logoPath} width={100} height={30} alt="logo" priority />
      </Link>
    </header>
  )
}
