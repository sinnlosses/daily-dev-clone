import type { PropsWithChildren } from "react"
import styles from "./when-visible.module.css"

type WhenVisibleProps = {
  mobile?: boolean
  tablet?: boolean
  desktop?: boolean
}

/**
 * ref: https://havelog.aho.mu/develop/css/e789-display-contents-utility-component.html
 */
export function WhenVisible({
  mobile = false,
  tablet = false,
  desktop = false,
  children,
}: PropsWithChildren<WhenVisibleProps>) {
  const classNames = [
    styles.container,
    mobile ? styles.mobile : "",
    tablet ? styles.tablet : "",
    desktop ? styles.desktop : "",
  ].join(" ")

  return <div className={classNames}>{children}</div>
}
