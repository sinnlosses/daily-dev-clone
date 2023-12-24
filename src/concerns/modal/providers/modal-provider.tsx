import { ModalContext } from "@/concerns/modal/contexts/modal-context"
import { useModalProvider } from "@/concerns/modal/hooks/use-modal-provider"
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
