import { Stack } from "@/components/ui/stack"
import { StackProps } from "@/components/ui/stack/stack"
import { PropsWithChildren } from "react"

type VStackProps = PropsWithChildren<Omit<StackProps, "direction">>

export function VStack(props: VStackProps) {
  return (
    <Stack direction="column" {...props}>
      {props.children}
    </Stack>
  )
}
