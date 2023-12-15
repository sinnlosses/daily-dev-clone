import { useMediaQuery } from "usehooks-ts"

export type UseDeviceReturn = {
  isDesktop: boolean
  isMobile: boolean
}
export function useDevice(breakpoint: number): UseDeviceReturn {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint}px)`)
  const isMobile = !isDesktop
  return { isDesktop, isMobile }
}
