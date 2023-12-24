import React, { createContext } from "react"

export type SetRenderer = (options: { render: () => React.ReactNode }) => void

export type ModalContextType = {
  setRenderer: SetRenderer
}
export const ModalContext = createContext<ModalContextType>({
  setRenderer: () => undefined,
})
