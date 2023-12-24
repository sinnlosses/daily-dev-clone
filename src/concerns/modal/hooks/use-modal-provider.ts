import { type ModalContextType, type SetRenderer } from "@/concerns/modal/contexts/modal-context"
import { useCallback, useMemo, useState } from "react"

export type UseModalProviderReturnType = {
  context: ModalContextType
  renderModal: () => React.ReactNode
}

export function useModalProvider(): UseModalProviderReturnType {
  const [renderer, _setRenderer] = useState<{ fn: () => React.ReactNode | null }>({
    fn: () => null,
  })

  const setRenderer = useCallback<SetRenderer>(({ render }) => {
    _setRenderer({ fn: render })
  }, [])

  const context = useMemo<ModalContextType>(
    () => ({
      setRenderer,
    }),
    [setRenderer]
  )

  const renderModal = useCallback(() => {
    return renderer.fn()
  }, [renderer])

  return { context, renderModal }
}
