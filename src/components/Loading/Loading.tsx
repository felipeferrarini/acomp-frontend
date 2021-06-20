import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center minH="200px" borderRadius={10} bg="white">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.50"
        color="blue.900"
        size="xl"
      />
    </Center>
  );
};

export { Loading };
