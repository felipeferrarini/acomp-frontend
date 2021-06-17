import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="3"
      px="8"
      maxWidth={400}
      alignSelf="center"
      color="gray.600"
      position="relative"
      bg="blue.100"
      borderRadius="full"
      shadow="xs"
      alignItems="center"
    >
      <Input
        color="gray.600"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Pesquisar pacientes, procedimentos..."
        _placeholder={{ color: 'gray.500' }}
      />
      <Icon as={RiSearchLine} />
    </Flex>
  );
}
