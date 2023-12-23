import { ModalContext } from "@/providers/modal/modal-context"
import { useCallback, useContext, useEffect, useRef, useState } from "react"

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { setRenderer } = useContext(ModalContext)

  // FIXME: useEffect を使用しない方法が見つかれば修正する
  useEffect(() => {
    const dialogElement = ref.current
    if (!dialogElement) return

    if (isOpen) {
      if (dialogElement.hasAttribute("open")) return
      ref.current.showModal()
    } else {
      if (!dialogElement.hasAttribute("open")) return
      ref.current.close()
    }
  }, [isOpen])

  const showModal = useCallback(
    (render: () => React.ReactNode) => {
      setRenderer({ render })
      setIsOpen(true)
    },
    [setRenderer]
  )

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return { ref, showModal, closeModal }
}
