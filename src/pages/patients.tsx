import { Stack } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { PatientCard } from '../components/Patients';
import { Pagination } from '../components/Pagination';
import { withSSRAuth } from '../hocs/withSSRAuth';
import { patientServices } from '../services/patient/patient.services';
import { PatientProps } from '../services/patient/types';

interface PatientsPageProps {
  patients: PatientProps[];
}

export default function Patients({ patients }: PatientsPageProps) {
  const [page, setPage] = useState(1);
  return (
    <BaseTemplate
      icon={FaUserFriends}
      title="Pacientes"
      buttonAction={() => {}}
      buttonTitle="Novo Paciente"
    >
      <Stack h="" flexDir="column" spacing="4" mt="2">
        {patients.slice((page - 1) * 10, (page - 1) * 10 + 10).map(patient => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </Stack>

      <Pagination
        totalRegisters={patients.length}
        currentPage={page}
        onPageChange={setPage}
      />
    </BaseTemplate>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  const patients = await patientServices.getAll();

  return {
    props: { patients },
  };
});
