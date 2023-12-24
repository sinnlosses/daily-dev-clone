import { useHeader } from "@/components/domain/header/hooks/use-header"
import { PresentationalHeader } from "@/components/domain/header/presentational-header"

export const Header = () => {
  const useHeaderReturnType = useHeader()

  return <PresentationalHeader {...useHeaderReturnType} />
}
