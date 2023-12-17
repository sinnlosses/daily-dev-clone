import { useHeader } from "@/components/layouts/components/header/hooks/use-header"
import { PresentationalHeader } from "@/components/layouts/components/header/presentational-header"

export const Header = () => {
  const useHeaderReturnType = useHeader()

  return <PresentationalHeader {...useHeaderReturnType} />
}
