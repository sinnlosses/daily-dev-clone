import { Home } from "@/features/home"
import { useThemeContext } from "@/providers/theme/theme-provider"

export function TopPresenter() {
  const { isDarkMode, toggleTheme } = useThemeContext()
  return (
    <>
      <Home />
    </>
  )
}
