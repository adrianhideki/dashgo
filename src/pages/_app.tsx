import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import SidebarDrawerProvider from "../contexts/SidebarDrawerContent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // o resetCSS remove as estilizações padrão do html element
    // ex: margin no body
    // resetCSS={false} volta as configurações padrão do html
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
