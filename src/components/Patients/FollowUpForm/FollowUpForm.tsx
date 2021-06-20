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
  Text,
  Flex,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FaStethoscope } from 'react-icons/fa';
import { useEffect } from 'react';
import { usePatientsContext } from '../../../contexts/PatientsContext';
import { Loading } from '../../Loading';
import { InputForm, SelectForm } from '../../Form';
import { ModalActions } from './components/ModalActions';
import { FollowUpSchema } from '../../../utils/validations/followUpSchema';
import { useProcedureContext } from '../../../contexts/Procedures';
import { useDoctorsContext } from '../../../contexts/DoctorsContext';
import { InputFiles } from './components/InputFiles';

const FollowUpForm = () => {
  const {
    followUpModalIsOpen,
    defaultFollowUpForm,
    loadingPatient,
    patientForm,
    toogleFollowUpModal,
    createFollowup,
  } = usePatientsContext();

  const { procedures, fetchProcedures } = useProcedureContext();
  const { doctors } = useDoctorsContext();

  useEffect(() => {
    fetchProcedures();
  }, []);

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
            onSubmit={createFollowup}
            validationSchema={FollowUpSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <HStack>
                    <VStack w="80%">
                      <InputForm
                        name="patientName"
                        label="Paciente:"
                        readyOnly
                        defaultValue={patientForm.name}
                      />
                      <InputForm name="date" label="Data:" type="date" />

                      <SelectForm
                        name="procedure_id"
                        label="Procedimento:"
                        placeholder="Selecione o procedimento"
                        options={procedures.map(p => ({
                          id: p.id,
                          name: p.type,
                        }))}
                      />
                      <SelectForm
                        name="doctor_id"
                        label="Médico:"
                        placeholder="Selecione o médico"
                        options={doctors.map(p => ({
                          id: p.id,
                          name: p.name,
                        }))}
                      />

                      <InputForm
                        name="description"
                        label="Descrição:"
                        isTextArea
                      />

                      <InputFiles />
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
