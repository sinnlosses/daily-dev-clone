import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./stack-item.module.css"

type StackItemProps = PropsWithChildren<{
  flexGrow?: boolean
  noShrink?: boolean
  className?: string
}>

export function StackItem({ flexGrow, noShrink, className, children }: StackItemProps) {
  return (
    <div className={clsx(flexGrow && styles.grow, noShrink && styles.noShrink, className)}>
      {children}
    </div>
  )
}
