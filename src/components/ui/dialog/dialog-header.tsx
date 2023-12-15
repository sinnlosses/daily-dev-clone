import { HStack } from "@/components/ui/hstack"
import { CrossIcon } from "@/components/ui/icons"
import styles from "./dialog-header.module.css"

type DialogHeaderProps = {
  title: string
  onClose: () => void
}

export const DialogHeader = ({ title, onClose }: DialogHeaderProps) => {
  return (
    <HStack
      justify="spaceBetween"
      alignItems="center"
      paddingTop="s"
      paddingRight="m"
      paddingBottom="s"
      paddingLeft="m"
      className={styles.dialogHeader}
    >
      <p className={styles.dialogTitle}>{title}</p>
      <div className={styles.crossIcon} onClick={onClose}>
        <CrossIcon />
      </div>
    </HStack>
  )
}
