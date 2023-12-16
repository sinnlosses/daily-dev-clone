import { Dialog } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/dialog/dialog-content"
import { DialogHeader } from "@/components/ui/dialog/dialog-header"
import { Radio } from "@/components/ui/input"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { Theme } from "@/hooks/use-theme"
import { FC, Ref, forwardRef } from "react"
import styles from "./customize-modal.module.css"

type PresentationalCustomizeModalProps = {
  ref: Ref<HTMLDialogElement>
  theme: Theme
  setTheme: (value: Theme) => void
  onClose: () => void
}

export const PresentationalCustomizeModal: FC<PresentationalCustomizeModalProps> = forwardRef<
  HTMLDialogElement,
  PresentationalCustomizeModalProps
>(({ theme, setTheme, onClose }, ref) => {
  return (
    <Dialog ref={ref} onClose={onClose}>
      <DialogHeader title="Customize" onClose={onClose} />
      <DialogContent>
        <VStack justify="start" gap="s">
          <Text className={styles.category}>Theme</Text>
          <VStack justify="start" gap="s">
            <Radio
              variant="vertical"
              options={[
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
                { value: "auto", label: "Auto" },
              ]}
              value={theme}
              onChange={setTheme}
            ></Radio>
          </VStack>
        </VStack>
      </DialogContent>
    </Dialog>
  )
})

PresentationalCustomizeModal.displayName = "PresentationalCustomizeModal"
