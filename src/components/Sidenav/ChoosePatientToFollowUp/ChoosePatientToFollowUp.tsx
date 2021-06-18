import { UseDisclosureProps, Text, Select, VStack } from '@chakra-ui/react';
import { FaStethoscope } from 'react-icons/fa';
import { ModalComponent } from '../../Modal';

interface props {
  useDisclosure: UseDisclosureProps;
}

export function ChoosePatientToFollowUp({ useDisclosure }: props) {
  return (
    <>
      <ModalComponent
        useDisclosure={useDisclosure}
        icon={FaStethoscope}
        title="Acompanhamento"
        button="Visualizar"
      >
        <VStack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            Selecione o paciente para realizar o acompanhamento
          </Text>
          <Select placeholder="Encontre o paciente">
            <option value="option1">Elizangela Gonçalves</option>
            <option value="option2">Cátia Antunes</option>
            <option value="option3">Marcos Antunes</option>
            <option value="option4">Beatriz Diamantino</option>
          </Select>
        </VStack>
      </ModalComponent>
    </>
  );
}
