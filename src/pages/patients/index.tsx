import { Stack, Center, Spinner } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import {
  EmptyPatients,
  PatientCard,
  PatientForm,
} from '../../components/Patients';
import { Pagination } from '../../components/Pagination';
import { withSSRAuth } from '../../hocs/withSSRAuth';
import {
  PatientsProvider,
  usePatientsContext,
} from '../../contexts/PatientsContext';

const PatientsComponent = () => {
  const [page, setPage] = useState(1);
  const { patients, loading, tooglePatientModal } = usePatientsContext();

  return (
    <BaseTemplate
      icon={FaUserFriends}
      title="Pacientes"
      buttonAction={() => tooglePatientModal()}
      buttonTitle="Novo Paciente"
    >
      {loading ? (
        <Center minH="200px" borderRadius={10} bg="white">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.50"
            color="blue.900"
            size="xl"
          />
        </Center>
      ) : patients?.length > 0 ? (
        <Stack h="" flexDir="column" spacing="4" mt="2">
          {patients
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map(patient => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          <Pagination
            totalRegisters={patients.length}
            currentPage={page}
            onPageChange={setPage}
          />
        </Stack>
      ) : (
        <EmptyPatients />
      )}

      <PatientForm />
    </BaseTemplate>
  );
};

export default function Patients() {
  return (
    <PatientsProvider>
      <PatientsComponent />
    </PatientsProvider>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
