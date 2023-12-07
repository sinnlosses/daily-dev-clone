import ReactSelect from "react-select"
import styles from "./select.module.css"

export type SelectOptionProps<T> = {
  value: T
  label: string
}

type SelectProps<T> = {
  variant?: "primary"
  instanceId: string
  placeholder?: string
  options: SelectOptionProps<T>[]
  onChange: (value?: T) => void
}

export function Select<T>(props: SelectProps<T>) {
  return (
    <ReactSelect
      instanceId={props.instanceId}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          boxShadow: state.isFocused ? "none" : baseStyles.boxShadow,
        }),
      }}
      className={styles[props.variant ?? "primary"]}
      classNamePrefix="react-select"
      placeholder={props.placeholder || ""}
      options={props.options}
      onChange={(e) => props.onChange(e?.value)}
    />
  )
}
