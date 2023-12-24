import {
  UseSidebarStateReturnType,
  useSidebarState,
} from "@/concerns/sidebar-state/hooks/use-sidebar-state"
import { UseConfigReturnType, useConfig } from "@/hooks"

export type UseHeaderReturnType = UseConfigReturnType & UseSidebarStateReturnType

export function useHeader(): UseHeaderReturnType {
  const useConfigReturn = useConfig()
  const useSidebarStateReturn = useSidebarState()
  return { ...useConfigReturn, ...useSidebarStateReturn }
}
