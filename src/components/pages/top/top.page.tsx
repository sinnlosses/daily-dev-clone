import { UseTopPageReturnType } from "./hooks/use-top-page"
import styles from "./top.module.css"

type TopProps = UseTopPageReturnType
export const TopPage: React.FC<TopProps> = ({}: UseTopPageReturnType) => {
  return (
    <div className={styles.home}>
      <p>12456789124567891245678912456789124567891245678912456789</p>
      {Array.from(Array(50)).map((_, index) => {
        return <p key={index}>{1}</p>
      })}
    </div>
  )
}
