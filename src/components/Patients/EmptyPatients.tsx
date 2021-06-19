import { Center, Text } from '@chakra-ui/react';

const EmptyPatients = () => {
  return (
    <Center minH="200px" borderRadius={10} bg="white">
      <Text>
        Parece que você ainda não possui pacientes cadastrados,
        <br /> clique em <b>Novo paciente</b> para cadastrar
      </Text>
    </Center>
  );
};

export { EmptyPatients };
