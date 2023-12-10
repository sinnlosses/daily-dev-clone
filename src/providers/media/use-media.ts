import { useMediaQuery } from "usehooks-ts"

export type UseMediaReturn = {
  isDesktop: boolean
  isMobile: boolean
}
export function useMedia(breakpoint: number): UseMediaReturn {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint}px)`)
  const isMobile = !isDesktop
  return { isDesktop, isMobile }
}
