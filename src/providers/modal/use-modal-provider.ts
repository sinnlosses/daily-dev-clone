import { ModalContextType, ShowModal } from "@/providers/modal/modal-context"
import { useCallback, useMemo, useState } from "react"

export type UseModalProviderReturnType = {
  context: ModalContextType
  renderModal: () => React.ReactNode
}

export function useModalProvider(): UseModalProviderReturnType {
  const [renderer, setRenderer] = useState<{ fn: () => React.ReactNode }>({
    fn: () => null,
  })

  const [visible, setVisible] = useState(false)

  const showModal = useCallback<ShowModal>(
    ({ render }) => {
      setRenderer({ fn: render })
      setVisible(true)
    },
    [setVisible]
  )

  const closeModal = useCallback(() => setVisible(false), [])

  const context = useMemo<ModalContextType>(
    () => ({
      showModal,
      closeModal,
    }),
    [showModal, closeModal]
  )

  const renderModal = useCallback(() => (visible ? renderer.fn() : null), [visible, renderer])

  return { context, renderModal }
}
