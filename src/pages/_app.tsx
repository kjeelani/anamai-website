import '../styles/home.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import ConvexClientProvider from "../ConvexClientProvider";
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/noto-sans';


const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Mono', sans-serif`,
    body: `'Noto Sans', sans-serif`,
  },
  styles: {
    global: {
        body: {
        }, 
        heading: {
            letterSpacing: `.2rem`
        }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
    return (
      <ConvexClientProvider>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
      </ConvexClientProvider>
    );
}
