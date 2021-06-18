import {
  Flex,
  Avatar,
  Box,
  Heading,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

export function Pacient() {
  return (
    <Flex justifyContent="space-between" mb={5}>
      <Flex flexBasis="50%">
        <Avatar
          size="2xl"
          borderRadius="0"
          name="Elizangela Gonçalvez"
          src="https://avatars.githubusercontent.com/u/22601978?v=4"
        />
        <Box marginLeft={2}>
          <Heading marginBottom={5} marginTop={2}>
            Elizangela Gonçalvez
          </Heading>
          <Text>54 anos</Text>
          <Text>Rua x, nº 43, Bairro y, Cidade</Text>
        </Box>
      </Flex>
      <Button href="#" marginRight={6} marginTop={2}>
        <Icon as={FiEdit} marginRight={2} />
        Editar Paciente
      </Button>
    </Flex>
  );
}
