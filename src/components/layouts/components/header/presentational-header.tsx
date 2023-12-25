import { Logo } from "@/components/layouts/components/header/components/logo"
import { MenuButton } from "@/components/layouts/components/header/components/menuButton"
import { MobileSidebar } from "@/components/layouts/components/sidebar"
import { WhenVisible } from "@/components/ui/when-visible"
import styles from "./header.module.css"
import { UseHeaderReturnType } from "./hooks/use-header"

type PresentationalHeaderProps = UseHeaderReturnType

export const PresentationalHeader = ({
  assets,
  setMobileSidebarIsExpanded,
}: PresentationalHeaderProps) => {
  return (
    <header className={styles.header}>
      {/* useMediaQuery を使用するとSSR時の初回HTMLから useEffect によって状態が変化した場合に画面がちらつくため、CSSによる制御を採用している */}
      <WhenVisible mobile>
        <MenuButton onClick={() => setMobileSidebarIsExpanded(true)} />
      </WhenVisible>

      <Logo logoPath={assets.headerLogoPath} />

      <WhenVisible mobile>
        <MobileSidebar />
      </WhenVisible>
    </header>
  )
}
