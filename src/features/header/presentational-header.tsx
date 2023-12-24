import { WhenVisible } from "@/components/ui/when-visible"
import { Logo } from "@/features/header/components/logo"
import { MenuButton } from "@/features/header/components/menuButton"
import { MobileSidebar } from "@/features/sidebar"
import styles from "./header.module.css"
import { UseHeaderReturnType } from "./hooks/use-header"

type PresentationalHeaderProps = UseHeaderReturnType

export const PresentationalHeader = ({
  assets,
  mobileSidebarIsExpanded,
  setMobileSidebarIsExpanded,
}: PresentationalHeaderProps) => {
  return (
    <header className={styles.header}>
      {/* useMediaQuery を使用するとSSR時の初回HTMLから useEffect によって状態が変化した場合に画面がちらつくため、CSSによる制御を採用している */}
      <WhenVisible mobile>
        <MenuButton onClick={() => setMobileSidebarIsExpanded(true)} />
      </WhenVisible>
      <Logo logoPath={assets.headerLogoPath} />
      {mobileSidebarIsExpanded && (
        <>
          <MobileSidebar />
          <div className={styles.backdrop} onClick={() => setMobileSidebarIsExpanded(false)} />
        </>
      )}
    </header>
  )
}
