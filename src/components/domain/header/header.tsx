import { PresentationalHeader } from "@/components/domain/header/presentational-header"
import { useConfig } from "@/hooks"

export const Header = () => {
  const { assets } = useConfig()

  return <PresentationalHeader logoPath={assets.headerLogoPath} />
}
