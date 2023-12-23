import {
  UseCustomizeModalReturnType,
  useCustomizeModal,
} from "@/features/modal/customize-modal/hooks/use-customize-modal"
import { Dispatch, SetStateAction, useState } from "react"

type UseSidebarProps = {
  initIsExpanded?: boolean
}

export type UseSidebarReturnType = UseCustomizeModalReturnType & {
  isExpanded: boolean
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}

export function useSidebar({ initIsExpanded }: UseSidebarProps): UseSidebarReturnType {
  const useCustomizeModalReturnType = useCustomizeModal()
  const [isExpanded, setIsExpanded] = useState(true)
  return { ...useCustomizeModalReturnType, isExpanded, setIsExpanded }
}
