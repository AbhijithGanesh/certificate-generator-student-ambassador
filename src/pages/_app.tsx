import '@studentambassador/styles/globals.css'
import { Inter_Tight } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter_Tight({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} style={inter.style}/>
}
