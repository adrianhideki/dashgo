import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // o resetCSS remove as estilizações padrão do html element
    // ex: margin no body
    // resetCSS={false} volta as configurações padrão do html
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
