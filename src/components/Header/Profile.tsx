import { Flex, Box, Text, Avatar, Icon } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hi, Lucas Flaquer</Text>
      </Box>

      <Avatar size="md" name="Lucas Flaquer" />

      <Icon as={FaChevronDown} ml="2" />
    </Flex>
  );
}
