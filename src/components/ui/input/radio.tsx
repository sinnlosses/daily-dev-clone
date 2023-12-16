import { HStack } from "@/components/ui/hstack"
import { Stack } from "@/components/ui/stack"
import clsx from "clsx"
import styles from "./radio.module.css"

export type RadioItem<T> = {
  label: string
  value: T
}

type RadioProps<T> = {
  variant: "vertical" | "horizontal"
  options: RadioItem<T>[]
  current: T
  radioClassName?: string
  labelClassName?: string
  onChange: (value: T) => void
}

export const Radio = <T,>({
  variant,
  options,
  current,
  radioClassName,
  labelClassName,
  onChange,
}: RadioProps<T>) =>
  Array.from(options).map((option, _) => (
    <Stack direction={variant === "horizontal" ? "row" : "column"} key={option.value as string}>
      <HStack justify="start" alignItems="center" gap="s" className={styles.radioItem}>
        <input
          id={option.value as string}
          type="radio"
          value={option.value as string}
          className={clsx(styles.radioInput, radioClassName)}
          onChange={(e) => onChange(e.target.value as T)}
          checked={option.value === current}
        />
        <label htmlFor={option.value as string} className={clsx(styles.radioLabel, labelClassName)}>
          {option.label}
        </label>
      </HStack>
    </Stack>
  ))
