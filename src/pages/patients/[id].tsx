import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FaPlus, FaStethoscope } from 'react-icons/fa';
import { useEffect } from 'react';
import { Patient } from '../../components/Patient';
import { FollowUpList } from '../../components/FollowUp';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import { withSSRAuth } from '../../hocs/withSSRAuth';
import {
  PatientsProvider,
  usePatientsContext,
} from '../../contexts/PatientsContext';
import { PatientForm, FollowUpForm } from '../../components/Patients';
import { Loading } from '../../components/Loading';
import { ProceduresProvider } from '../../contexts/Procedures';
import { DoctorsProvider } from '../../contexts/DoctorsContext';

interface FollowUpProps {
  id: string;
}

const FollowUpComponent = ({ id }: FollowUpProps) => {
  const { getPatientInfo, toogleFollowUpModal, loadingPatient, patientForm } =
    usePatientsContext();

  useEffect(() => {
    getPatientInfo(id);
  }, []);

  return (
    <BaseTemplate title="Acompanhamento" icon={FaStethoscope}>
      {loadingPatient ? (
        <Loading />
      ) : (
        <Flex
          background="white"
          borderRadius={10}
          align="center"
          direction="column"
        >
          <Patient patient={patientForm} />
          <Button
            maxW="40%"
            w="100%"
            background="blue.700"
            colorScheme="blue"
            marginBottom={6}
            height="16"
            borderRadius={10}
            color="white"
            fontWeight="bold"
            shadow="md"
            onClick={toogleFollowUpModal}
          >
            <Icon as={FaPlus} fontSize="xl" />
            <Text fontSize="xl" marginLeft={2}>
              Novo Atendimento
            </Text>
          </Button>

          <FollowUpList />
        </Flex>
      )}
      <PatientForm />
    </BaseTemplate>
  );
};

export default function FollowUp({ id }: FollowUpProps) {
  return (
    <PatientsProvider>
      <FollowUpComponent id={id} />
      <ProceduresProvider>
        <DoctorsProvider>
          <FollowUpForm />
        </DoctorsProvider>
      </ProceduresProvider>
    </PatientsProvider>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const { id } = ctx.params;
  return {
    props: { id },
  };
});
