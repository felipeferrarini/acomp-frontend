import { UseDisclosureProps, Text, Select, VStack } from '@chakra-ui/react';
import { FaStethoscope } from 'react-icons/fa';
import Router from 'next/router';
import { useState } from 'react';
import { usePatientsContext } from '../../../contexts/PatientsContext';
import { ModalComponent } from '../../Modal';

interface props {
  useDisclosure: UseDisclosureProps;
}

export function ChoosePatientToFollowUp({ useDisclosure }: props) {
  const { patients } = usePatientsContext();
  const [patientId, setPatientId] = useState('');

  const handleViewPatient = () => {
    if (patientId !== '') Router.push(`/patients/${patientId}`);
    useDisclosure.onClose();
  };

  return (
    <>
      <ModalComponent
        useDisclosure={useDisclosure}
        icon={FaStethoscope}
        title="Acompanhamento"
        button="Visualizar"
        onClick={handleViewPatient}
      >
        <VStack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            Selecione o paciente para realizar o acompanhamento
          </Text>
          <Select
            placeholder="Encontre o paciente"
            onChange={e => {
              setPatientId(e.target.value);
            }}
          >
            {patients.map(patient => (
              <option value={patient.id}>{patient.name}</option>
            ))}
          </Select>
        </VStack>
      </ModalComponent>
    </>
  );
}
