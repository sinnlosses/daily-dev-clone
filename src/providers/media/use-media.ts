import { useMediaQuery } from "usehooks-ts"

export type UseMediaReturn = {
  isDesktop: boolean
}
export function useMedia(breakpoint: number): UseMediaReturn {
  const isDesktop = useMediaQuery(`min-width: ${breakpoint}px`)
  return { isDesktop }
}
