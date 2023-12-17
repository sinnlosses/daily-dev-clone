import { useConfig } from "@/hooks"

export type UseHeaderReturnType = { headerLogoPath: string }

export function useHeader(): UseHeaderReturnType {
  const { assets } = useConfig()
  return { ...assets }
}
