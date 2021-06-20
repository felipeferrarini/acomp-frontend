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
import { usePatientsContext } from '../../../contexts/PatientsContext';
import { patientFormSchema } from '../../../utils/validations/patientForm';
import { Loading } from '../../Loading';
import { InputAvatar } from './components/InputAvatar';
import { InputForm } from './components/InputForm';
import { ModalActions } from './components/ModalActions';

const PatientForm = () => {
  const {
    patientModalIsOpen,
    patientForm,
    loadingPatient,
    tooglePatientModal,
    createPatient,
  } = usePatientsContext();

  const onClose = () => {
    tooglePatientModal();
  };

  return (
    <Modal size="4xl" isOpen={patientModalIsOpen} onClose={onClose}>
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
          Novo paciente
        </ModalHeader>
        <ModalCloseButton colorScheme="blue" color="blue.900" />

        {loadingPatient ? (
          <Loading />
        ) : (
          <Formik
            initialValues={patientForm}
            onSubmit={createPatient}
            validationSchema={patientFormSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <HStack>
                    <InputAvatar />
                    <VStack w="80%">
                      <InputForm name="name" label="Nome" />
                      <InputForm
                        name="birth_date"
                        label="Nascimento"
                        type="date"
                      />
                      <InputForm name="cpf" label="CPF" type="number" />
                      <InputForm name="address" label="Endereço" />
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

export { PatientForm };
