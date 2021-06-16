import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hi, Lucas Flaquer</Text>
      </Box>

      <Avatar size="md" name="Lucas Flaquer" />
    </Flex>
  );
}
