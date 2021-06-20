import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { SearchBox } from './SearchBox';
import { Profile } from './Profile';

const HeaderComponent = () => {
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
};

const Header = memo(HeaderComponent);

export { Header };
