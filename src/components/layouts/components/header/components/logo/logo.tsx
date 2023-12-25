import Image from "next/image"
import Link from "next/link"
import styles from "./logo.module.css"

export type LogoProps = {
  logoPath: string
}
export const Logo = ({ logoPath }: LogoProps) => {
  return (
    <Link href={"/"} className={styles.logo}>
      <Image src={logoPath} width={100} height={30} alt="logo" priority />
    </Link>
  )
}
