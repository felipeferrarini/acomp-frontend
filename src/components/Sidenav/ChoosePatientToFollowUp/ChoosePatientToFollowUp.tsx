import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseDisclosureProps,
  Icon,
  Text,
  Flex,
  Center,
  Select,
  VStack,
} from '@chakra-ui/react';
import { FaStethoscope } from 'react-icons/fa';

interface props {
  useDisclosure: UseDisclosureProps;
}

export function ChoosePatientToFollowUp({ useDisclosure }: props) {
  const { isOpen, onClose } = useDisclosure;
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Flex>
                <Icon as={FaStethoscope} fontSize={20} color="blue.700" />
                <Text fontWeight="medium" ml={3} color="blue.700">
                  Acompanhamento
                </Text>
              </Flex>
            </Center>
          </ModalHeader>
          <ModalCloseButton color="blue.700" />
          <ModalBody>
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
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Visualizar
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
