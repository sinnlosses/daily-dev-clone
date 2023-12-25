import { HamburgerIcon } from "@/components/ui/icons"
import styles from "./menuButton.module.css"

export type MenuButtonProps = {
  onClick: () => void
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button className={styles.menuButton} onClick={onClick}>
      <HamburgerIcon />
    </button>
  )
}
