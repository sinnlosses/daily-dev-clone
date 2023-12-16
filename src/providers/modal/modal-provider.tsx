import { ModalContext } from "@/providers/modal/modal-context"
import { useModalProvider } from "@/providers/modal/use-modal-provider"
import { PropsWithChildren } from "react"

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { context, renderModal } = useModalProvider()

  return (
    <ModalContext.Provider value={context}>
      {children}
      {renderModal()}
    </ModalContext.Provider>
  )
}
