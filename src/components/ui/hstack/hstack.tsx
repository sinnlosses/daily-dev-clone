import { Stack } from "@/components/ui/stack"
import { StackProps } from "@/components/ui/stack/stack"
import { PropsWithChildren } from "react"

type HStackProps = PropsWithChildren<Omit<StackProps, "direction">>

export function HStack(props: HStackProps) {
  return (
    <Stack direction="row" {...props}>
      {props.children}
    </Stack>
  )
}
