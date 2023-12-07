import { ToasterProvider } from "./toaster-provider"
import { PropsWithChildren } from "react"

type AppProviderProps = PropsWithChildren

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToasterProvider />
      {props.children}
    </>
  )
}
