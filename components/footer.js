import Image from "next/image";
import styles from '../styles/Footer.module.css'

export default function Footer({ children }) {
    return (
      <>
        <div className={styles.container}>
          <Image
             src="/images/Logo-Trasparente.png"
             height={180} // Desired size with correct aspect ratio
             width={820} // Desired size with correct aspect ratio
             alt=""
          />
        </div>
      </>
    )
}