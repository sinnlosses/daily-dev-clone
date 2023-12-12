"use client"
import { forwardRef } from "react"
import styles from "./dialog.module.css"

export const Dialog = forwardRef<HTMLDialogElement>((props, ref) => {
  return <dialog ref={ref} className={styles.dialog}></dialog>
})

Dialog.displayName = "dialog"
