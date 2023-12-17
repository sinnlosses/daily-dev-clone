import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/features/modal/customize-modal/hooks/use-customize-modal"
import { Dispatch, SetStateAction, useState } from "react"

export type UseSidebarReturnType = UseCustomizeModalReturnType & {
  isExpanded: boolean
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}

export function useSidebar(): UseSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const [isExpanded, setIsExpanded] = useState(false)
  return { ...useCustomizeModalReturnType, isExpanded, setIsExpanded }
}
