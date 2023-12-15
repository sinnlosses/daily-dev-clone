import { PresentationalHeader } from "@/features/generic/header/presentational-header"
import { useConfig } from "@/hooks"

export const Header = () => {
  const { assets } = useConfig()

  return <PresentationalHeader logoPath={assets.headerLogoPath} />
}
