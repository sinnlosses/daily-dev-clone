import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./stack-item.module.css"

type StackItemProps = PropsWithChildren<{
  flexGrow?: boolean
  noShrink?: boolean
}>

export function StackItem(props: StackItemProps) {
  return (
    <div className={clsx(props.flexGrow && styles.grow, props.noShrink && styles.noShrink)}>
      {props.children}
    </div>
  )
}
