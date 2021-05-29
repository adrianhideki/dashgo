import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "../styles/theme";
import SidebarDrawerProvider from "../contexts/SidebarDrawerContent";
import { makeServer } from "../services/mirage";
import { QueryClientProvider, QueryClient } from "react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // o resetCSS remove as estilizações padrão do html element
    // ex: margin no body
    // resetCSS={false} volta as configurações padrão do html
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
