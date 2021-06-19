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
import { PatientProps } from '../../services/patient/types';

interface PatientComponentProps {
  patient: PatientProps;
}

export function Patient({ patient }: PatientComponentProps) {
  const { name, address } = patient;

  return (
    <Flex justifyContent="space-between" mb={5}>
      <Flex flexBasis="50%">
        <Avatar
          size="2xl"
          borderRadius="0"
          name={name}
          src="https://avatars.githubusercontent.com/u/22601978?v=4"
        />
        <Box marginLeft={2}>
          <Heading marginBottom={5} marginTop={2}>
            {name}
          </Heading>
          <Text>54 anos</Text>
          <Text>{address}</Text>
        </Box>
      </Flex>
      <Button href="#" marginRight={6} marginTop={2}>
        <Icon as={FiEdit} marginRight={2} />
        Editar Paciente
      </Button>
    </Flex>
  );
}
