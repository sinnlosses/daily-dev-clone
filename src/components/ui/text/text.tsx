import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./text.module.css"

type TextProps = {
  variant?: "primary" | "secondary" | "custom"
  ellipsis?: boolean
  className?: string
}

type TextPropWithBold = TextProps & {
  bold?: boolean
}

export function Text(props: PropsWithChildren<TextPropWithBold>) {
  return (
    <p
      className={clsx(
        styles.text,
        styles[props.variant ?? "primary"],
        props.bold && styles.bold,
        props.ellipsis && styles[`ellipsis`],
        props.className
      )}
    >
      {props.children}
    </p>
  )
}
