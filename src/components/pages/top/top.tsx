import { useTopPage } from "./hooks/use-top-page"
import { TopPage } from "./top.page"

export const Top = () => {
  const useTopPageReturn = useTopPage()
  return <TopPage {...useTopPageReturn} />
}
