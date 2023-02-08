import Navbar from './navbar'
import Footer from './footer'
import styles from '../styles/container.module.css'

export default function Layout({ children }) {
    return (
        <>
            <div>
                <Navbar />
                <main className={styles.line}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}