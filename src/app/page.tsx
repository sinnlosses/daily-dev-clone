import { Top } from "@/components/pages/top"
import { useTopPage } from "@/stores/top/use-top-page"

export default function TopPage() {
  const useTopPageReturn = useTopPage()
  return <Top {...useTopPageReturn} />
}
