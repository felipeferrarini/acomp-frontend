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
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FaUser } from 'react-icons/fa';
import { doctorSchema } from '../../../utils/validations';
import { Loading } from '../../Loading';
import { InputAvatar } from './components/InputAvatar';
import { InputForm } from '../../Form';
import { ModalActions } from './components/ModalActions';
import { useDoctorsContext } from '../../../contexts/DoctorsContext';

const DoctorsForm = () => {
  const {
    modalIsOpen,
    form,
    loadingDoctor,
    isEditMode,
    toogleModal,
    createDoctor,
  } = useDoctorsContext();

  const onClose = () => {
    toogleModal();
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
          <Icon as={FaUser} mr="2" />
          {isEditMode ? 'Editar médico' : 'Novo médico'}
        </ModalHeader>
        <ModalCloseButton colorScheme="blue" color="blue.900" />

        {loadingDoctor ? (
          <Loading />
        ) : (
          <Formik
            initialValues={form}
            onSubmit={createDoctor}
            validationSchema={doctorSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <HStack>
                    <InputAvatar />
                    <VStack w="80%">
                      <InputForm name="name" label="Nome" />
                      <InputForm name="crm" label="CRM" type="number" />
                      <InputForm name="phone" label="Telefone" type="number" />
                    </VStack>
                  </HStack>
                </ModalBody>

                <ModalActions isSubmitting={isSubmitting} onClose={onClose} />
              </Form>
            )}
          </Formik>
        )}
      </ModalContent>
    </Modal>
  );
};

export { DoctorsForm };
