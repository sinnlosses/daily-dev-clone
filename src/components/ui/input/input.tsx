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

export const Input = ({
  variant,
  value,
  width,
  className,
  inputMode,
  pattern,
  onChange,
  onFocus,
  onBlur,
}: InputProps) => (
  <input
    type="text"
    value={value}
    className={clsx(
      styles.text,
      styles[`${variant ?? "primary"}`],
      styles[`width${capitalize(width ?? "auto")}`],
      className
    )}
    inputMode={inputMode}
    pattern={pattern}
    onChange={(e) => onChange(e.target.value)}
    onFocus={onFocus}
    onBlur={onBlur}
  />
)
