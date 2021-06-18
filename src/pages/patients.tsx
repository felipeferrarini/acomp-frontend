import { Stack } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { PatientCard } from '../components/Patients';
import { Pagination } from '../components/Pagination';
import { withSSRAuth } from '../hocs/withSSRAuth';

export default function Patients() {
  const [page, setPage] = useState(1);
  return (
    <BaseTemplate
      icon={FaUserFriends}
      title="Pacientes"
      buttonAction={() => {}}
      buttonTitle="Novo Paciente"
    >
      <Stack h="" flexDir="column" spacing="4" mt="2">
        {[...Array(100)].slice((page - 1) * 10, (page - 1) * 10 + 10).map(a => (
          <PatientCard key={a} />
        ))}
      </Stack>

      <Pagination
        totalRegisters={100}
        currentPage={page}
        onPageChange={setPage}
      />
    </BaseTemplate>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
