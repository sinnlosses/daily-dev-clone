import { useModalProvider } from "@/providers/modal/hooks/use-modal-provider"
import { ModalContext } from "@/providers/modal/modal-context"
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
