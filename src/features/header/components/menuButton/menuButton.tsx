import { HamburgerIcon } from "@/components/ui/icons"
import styles from "./menuButton.module.css"

export const MenuButton = () => {
  return (
    <button className={styles.menuButton}>
      <HamburgerIcon />
    </button>
  )
}
