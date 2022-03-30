import type { AppProps } from 'next/app'
import '../stylesheet/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
