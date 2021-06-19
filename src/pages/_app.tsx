import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import NextNprogress from 'nextjs-progressbar';
import { theme } from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContex';
import { PatientsProvider } from '../contexts/PatientsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <PatientsProvider>
          <NextNprogress
            color="#2C73D2"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </PatientsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
