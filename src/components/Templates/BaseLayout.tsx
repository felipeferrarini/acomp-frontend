import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from '../Header';
import { Sidenav } from '../Sidenav';

interface Props {
  children: ReactNode;
}

export function BaseTemplate({ children }: Props) {
  return (
    <Flex h="100vh" flexDir="row">
      <Sidenav />

      <Box background="gray.100" h="100%" flexGrow={1}>
        <Header />
        <Box px={8}>{children}</Box>
      </Box>
    </Flex>
  );
}
