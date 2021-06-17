import { Box, Image, Flex, Text, Stack } from '@chakra-ui/react';

const PatientCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      shadow="sm"
      bg="white"
      borderRadius={24}
      h="40"
    >
      <Image
        src="https://pbs.twimg.com/profile_images/983018479644303361/UD5uocVf_400x400.jpg"
        h="100%"
        w="40"
        borderTopLeftRadius={24}
        borderBottomLeftRadius={24}
      />
      <Flex
        flexDir="row"
        justifyContent="space-between"
        p="6"
        w="100%"
        fontWeight="medium"
        color="gray.700"
      >
        <Flex flexDir="column" justify="center" h="100%">
          <Text fontSize="2xl" mb="2">
            Elizangela Gonçalves
          </Text>
          <Text mb="auto">1ª visita</Text>
          <Text>Médico responsável: Dr. João Gomes</Text>
        </Flex>
        <Stack spacing="2" justify="center" align="center">
          <Text>Entrada:</Text>
          <Text>15.06.2021</Text>
          <Text>09:00</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export { PatientCard };
