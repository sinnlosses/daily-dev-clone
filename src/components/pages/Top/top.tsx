import { useTopPage } from "@/features/top/hooks/use-top-page"
import { TopPage } from "./top.page"

export const Top = () => {
  const useTopPageReturn = useTopPage()
  return <TopPage {...useTopPageReturn} />
}
