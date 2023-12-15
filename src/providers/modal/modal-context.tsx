import { createContext } from "react"

export type ShowModal = (options: { render: () => React.ReactNode }) => void

export type CloseModal = () => void

export type ModalContextType = {
  showModal: ShowModal
  closeModal: CloseModal
}

export const ModalContext = createContext<ModalContextType>({
  showModal: () => undefined,
  closeModal: () => undefined,
})
