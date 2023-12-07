import { capitalize } from "@/utils/string"
import clsx from "clsx"
import styles from "./input.module.css"

type InputProps = {
  variant?: "primary"
  value: string
  width?: "normal" | "full" | "auto"
  className?: string
  inputMode?: "numeric"
  pattern?: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      value={props.value}
      className={clsx(
        styles.text,
        styles[`${props.variant ?? "primary"}`],
        styles[`width${capitalize(props.width ?? "auto")}`],
        props.className
      )}
      inputMode={props.inputMode}
      pattern={props.pattern}
      onChange={(e) => props.onChange(e.target.value)}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}
