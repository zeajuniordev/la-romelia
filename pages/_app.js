import { Nunito } from '@next/font/google'
import '../styles/globals.css'

const nunito = Nunito({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
