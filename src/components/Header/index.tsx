import { Flex } from '@chakra-ui/react';
import { SearchBox } from './SearchBox';
import { Profile } from './Profile';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="8"
      align="center"
      justifyContent="space-between"
    >
      <SearchBox />
      <Profile />
    </Flex>
  );
}
