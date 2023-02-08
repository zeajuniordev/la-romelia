import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

export default function Navbar({ children }) {
    const router = useRouter()
    console.log('router', router.pathname)

    return (
        <>
            <div className={styles.conteiner}>
                <div>
                    <Link href='/'>
                        <Image
                            src="/images/LaRomeliaLogoSinFondo.png"
                            height={55} // Desired size with correct aspect ratio
                            width={65} // Desired size with correct aspect ratio
                            alt=""
                        
                        />
                    </Link>
                </div>
                <div className={styles.options}>
                    <Link className={router.pathname === '/' ? styles.textSelect : styles.text} href='/'>
                        Inicio
                    </Link>
                    <Link className={router.pathname === '/service' ? styles.textSelect : styles.text} href='/service'>
                        Servicio
                    </Link>
                    <Link className={router.pathname === '/products' ? styles.textSelect : styles.text} href='/products'>
                        Productos
                    </Link>
                    <Link className={router.pathname === '/contact' ? styles.textSelect : styles.text} href='/contact'>
                        Contacto
                    </Link>
                </div>
            </div>

        </>
    )
}