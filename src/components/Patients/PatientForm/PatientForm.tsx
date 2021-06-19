import {
  Button,
  Box,
  Avatar,
  FormControl,
  FormLabel,
  Input,
  Icon,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FaUser } from 'react-icons/fa';
import { usePatientsContext } from '../../../contexts/PatientsContext';

const PatientForm = () => {
  const { patientModalIsOpen, patientForm, tooglePatientModal } =
    usePatientsContext();

  const onClose = () => {
    tooglePatientModal();
  };

  return (
    <Modal size="4xl" isOpen={patientModalIsOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="3xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="blue.900"
        >
          <Icon as={FaUser} mr="2" />
          Novo paciente
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={patientForm}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ModalBody pb={6}>
                <HStack>
                  <Box w="64">
                    <VStack>
                      <Avatar h="24" w="24" borderRadius={10} src="" />
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        outlineColor="blue.700"
                      >
                        Inserir foto
                      </Button>
                    </VStack>
                  </Box>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>
                </HStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="blue"
                  mr={3}
                  bg="blue.900"
                >
                  Criar
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export { PatientForm };
