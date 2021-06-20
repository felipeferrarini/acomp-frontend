import {
  Icon,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FaFileAlt } from 'react-icons/fa';
import { procedureSchema } from '../../utils/validations';
import { Loading } from '../Loading';
import { InputForm } from '../Form';
import { useProcedureContext } from '../../contexts/Procedures';

const ProcedureModal = () => {
  const {
    modalIsOpen,
    form,
    loadingProcedure,
    createProcedure,
    toogleProcedureModal,
  } = useProcedureContext();

  const onClose = () => {
    toogleProcedureModal();
  };

  return (
    <Modal size="4xl" isOpen={modalIsOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent p="8">
        <ModalHeader
          fontSize="3xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="blue.900"
        >
          <Icon as={FaFileAlt} mr="2" />
          Novo procedimento
        </ModalHeader>
        <ModalCloseButton colorScheme="blue" color="blue.900" />

        {loadingProcedure ? (
          <Loading />
        ) : (
          <Formik
            initialValues={form}
            onSubmit={createProcedure}
            validationSchema={procedureSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <HStack>
                    <VStack w="80%">
                      <InputForm name="type" label="Nome" />
                      <InputForm
                        name="description"
                        label="Descrição"
                        isTextArea
                      />
                    </VStack>
                  </HStack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="blue"
                    mr={3}
                    bg="blue.900"
                    w="32"
                  >
                    Salvar
                  </Button>
                  <Button w="32" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        )}
      </ModalContent>
    </Modal>
  );
};

export { ProcedureModal };
