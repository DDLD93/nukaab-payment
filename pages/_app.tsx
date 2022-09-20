import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemesProvider from '../themes/providers'

function MyApp({ Component, pageProps }: AppProps) {

  return <ThemesProvider>
    <Component {...pageProps} />
  </ThemesProvider> 
}

export default MyApp
