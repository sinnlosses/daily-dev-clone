import { capitalize } from "@/utils/string"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./stack.module.css"

export type StackProps = PropsWithChildren<{
  direction: "row" | "column"
  justify?: "start" | "center" | "end" | "spaceBetween" | "normal"
  alignItems?: "start" | "center" | "end" | "normal"
  paddingLeft?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none"
  paddingRight?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none"
  wrap?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  gap?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none"
  className?: string
}>

export function Stack(props: StackProps) {
  return (
    <div
      className={clsx(
        styles.stack,
        props.className,
        styles[`direction${capitalize(props.direction)}`],
        styles[`justify${capitalize(props.justify ?? "normal")}`],
        styles[`alignItems${capitalize(props.alignItems ?? "normal")}`],
        styles[`paddingLeft${capitalize(props.paddingLeft ?? "none")}`],
        styles[`paddingRight${capitalize(props.paddingRight ?? "none")}`],
        props.wrap && styles.wrap,
        props.fullWidth && styles.fullWidth,
        props.fullHeight && styles.fullHeight,
        styles[`gap${capitalize(props.gap ?? "none")}`]
      )}
    >
      {props.children}
    </div>
  )
}
