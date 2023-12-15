import { PropsWithChildren } from "react"
import styles from "./dialog-content.module.css"

type DialogContentProps = PropsWithChildren<{}>

export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className={styles.dialogContent}>{children}</div>
}
