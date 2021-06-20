import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../Header';
import { Sidenav } from '../Sidenav';
import { PageHeader } from '../PageHeader';
import { IPageHeader } from '../PageHeader/types';

interface Props extends IPageHeader {
  children: ReactNode;
}

export function BaseTemplate({ children, ...rest }: Props) {
  return (
    <>
      <Head>
        <title>{rest.title || 'Início'} | Acomp</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflowY="hidden">
        <Sidenav />

        <Box
          background="blue.50"
          h="100%"
          flexGrow={1}
          overflowX="hidden"
          overflowY="auto"
        >
          <Header />
          <PageHeader {...rest} />
          <Box px={8}>{children}</Box>
        </Box>
      </Flex>
    </>
  );
}
