"use client"
import { PropsWithChildren, createContext, useContext } from "react"
import type { UseMediaReturn } from "./use-media"
import { useMedia } from "./use-media"

const MediaContext = createContext<UseMediaReturn | undefined>(undefined)

export function useMediaContext(): UseMediaReturn {
  return useContext(MediaContext)!
}

type MediaProviderProps = PropsWithChildren<{
  breakpoint: number
}>
export function MediaProvider(props: MediaProviderProps) {
  const media = useMedia(props.breakpoint)

  return <MediaContext.Provider value={media}>{props.children}</MediaContext.Provider>
}
