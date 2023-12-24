import { WhenVisible } from "@/components/ui/when-visible"
import { Logo } from "@/features/header/components/logo"
import { MenuButton } from "@/features/header/components/menuButton"
import styles from "./header.module.css"
import { UseHeaderReturnType } from "./hooks/use-header"

type PresentationalHeaderProps = UseHeaderReturnType

export const PresentationalHeader = ({ headerLogoPath }: PresentationalHeaderProps) => {
  return (
    <header className={styles.header}>
      {/* useMediaQuery を使用するとSSR時の初回HTMLから useEffect によって状態が変化した場合に画面がちらつくため、CSSによる制御を採用している */}
      <WhenVisible mobile>
        <MenuButton />
      </WhenVisible>
      <Logo logoPath={headerLogoPath} />
    </header>
  )
}
