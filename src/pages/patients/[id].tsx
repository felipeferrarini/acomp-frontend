import { Box, Button, Icon, Text, useToast } from '@chakra-ui/react';
import { FaPlus, FaStethoscope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Patient } from '../../components/Patient';
import { FollowUpList } from '../../components/FollowUp';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import { withSSRAuth } from '../../hocs/withSSRAuth';
import { patientServices } from '../../services/patient/patient.services';
import { PatientProps } from '../../services/patient/types';
import { PatientsProvider } from '../../contexts/PatientsContext';
import { PatientForm } from '../../components/Patients';
import { Loading } from '../../components/Loading';

interface FollowUpProps {
  id: string;
}

const FollowUpComponent = ({ id }: FollowUpProps) => {
  const toast = useToast();
  const [patient, setPatient] = useState<PatientProps | null>();
  const [loading, setLoading] = useState(false);

  const getPatientData = async (patientId: string) => {
    setLoading(true);
    try {
      const data = await patientServices.getOne(patientId);
      if (data) setPatient(data);
    } catch (err) {
      toast({
        title: 'Erro ao criar paciente',
        description:
          'Não foi possivel criar o paciente, verifique se ele já não está cadastrado!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatientData(id);
  }, []);

  return (
    <BaseTemplate title="Acompanhamento" icon={FaStethoscope}>
      {loading ? (
        <Loading />
      ) : (
        <Box background="white" borderRadius={10} overflow="hidden">
          <Patient patient={patient} />
          <Button
            maxW="60%"
            w="100%"
            margin="0 auto"
            align="center"
            background="blue.700"
            colorScheme="blue"
            marginBottom={6}
            height={20}
            justifyContent="center"
            borderRadius={10}
            color="white"
            fontWeight="bold"
            display="flex"
            shadow="md"
          >
            <Icon as={FaPlus} fontSize="xl" />
            <Text fontSize="xl" marginLeft={2}>
              Novo Atendimento
            </Text>
          </Button>
          <FollowUpList />
        </Box>
      )}
      <PatientForm />
    </BaseTemplate>
  );
};

export default function FollowUp({ id }: FollowUpProps) {
  return (
    <PatientsProvider>
      <FollowUpComponent id={id} />
    </PatientsProvider>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const { id } = ctx.params;
  return {
    props: { id },
  };
});
