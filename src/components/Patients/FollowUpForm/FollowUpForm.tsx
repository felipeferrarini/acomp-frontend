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
import { FaStethoscope } from 'react-icons/fa';
import { usePatientsContext } from '../../../contexts/PatientsContext';
import { Loading } from '../../Loading';
import { InputForm } from '../../InputForm';
import { ModalActions } from './components/ModalActions';
import { FollowUpSchema } from '../../../utils/validations/followUpSchema';

const FollowUpForm = () => {
  const {
    followUpModalIsOpen,
    defaultFollowUpForm,
    loadingPatient,
    patientForm,
    toogleFollowUpModal,
    createFollowup,
  } = usePatientsContext();

  return (
    <Modal
      size="4xl"
      isOpen={followUpModalIsOpen}
      onClose={toogleFollowUpModal}
    >
      <ModalOverlay />

      <ModalContent p="8">
        <ModalHeader
          fontSize="3xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="blue.900"
        >
          <Icon as={FaStethoscope} mr="2" />
          Novo atendimento
        </ModalHeader>
        <ModalCloseButton colorScheme="blue" color="blue.900" />

        {loadingPatient ? (
          <Loading />
        ) : (
          <Formik
            initialValues={defaultFollowUpForm}
            onSubmit={values => {
              console.log(values);
            }}
            validationSchema={FollowUpSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <HStack>
                    <VStack w="80%">
                      <InputForm
                        name="patient_id"
                        label="Paciente"
                        readyOnly
                        defaultValue={patientForm.name}
                      />
                      <InputForm name="date" label="Data" type="date" />
                      <InputForm
                        name="description"
                        label="Descrição"
                        isTextArea
                      />
                    </VStack>
                  </HStack>
                </ModalBody>

                <ModalActions
                  isSubmitting={isSubmitting}
                  onClose={toogleFollowUpModal}
                />
              </Form>
            )}
          </Formik>
        )}
      </ModalContent>
    </Modal>
  );
};

export { FollowUpForm };
