import { useHeader } from "@/features/header/hooks/use-header"
import { PresentationalHeader } from "@/features/header/presentational-header"

export const Header = () => {
  const useHeaderReturnType = useHeader()

  return <PresentationalHeader {...useHeaderReturnType} />
}
