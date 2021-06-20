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
import { usePatientsContext } from '../../contexts/PatientsContext';
import { PatientPayload } from '../../services/patient/types';

interface PatientComponentProps {
  patient: PatientPayload | null;
}

const Patient = ({ patient }: PatientComponentProps) => {
  const { tooglePatientModal } = usePatientsContext();

  if (patient) {
    return (
      <Flex justifyContent="space-between" mb={5} w="100%">
        <Flex flexBasis="50%">
          <Avatar
            size="2xl"
            borderRadius="0"
            name={patient.name}
            src="https://avatars.githubusercontent.com/u/22601978?v=4"
          />
          <Box marginLeft={5}>
            <Heading size="lg" marginBottom={5} marginTop={2}>
              {patient.name}
            </Heading>
            <Text>54 anos</Text>
            <Text>{patient.address}</Text>
          </Box>
        </Flex>
        <Button
          marginRight={6}
          marginTop={2}
          onClick={() => {
            tooglePatientModal(patient.id);
          }}
        >
          <Icon as={FiEdit} marginRight={2} />
          Editar Paciente
        </Button>
      </Flex>
    );
  }

  return null;
};

export { Patient };
