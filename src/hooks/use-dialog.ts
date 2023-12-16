import { useCallback, useEffect, useRef, useState } from "react"

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const showModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return { ref, showModal, closeModal }
}
