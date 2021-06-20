import { Stack, Center, Spinner, Text } from '@chakra-ui/react';
import { FaUserMd } from 'react-icons/fa';
import { useState } from 'react';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { Pagination } from '../components/Pagination';
import { withSSRAuth } from '../hocs/withSSRAuth';
import { DoctorsProvider, useDoctorsContext } from '../contexts/DoctorsContext';
import { DoctorsCard, DoctorsForm } from '../components/Doctors';

const DoctorsComponent = () => {
  const [page, setPage] = useState(1);
  const { doctors, loading, toogleModal } = useDoctorsContext();

  return (
    <BaseTemplate
      icon={FaUserMd}
      title="Médicos"
      buttonAction={() => toogleModal()}
      buttonTitle="Novo Médico"
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
      ) : doctors?.length > 0 ? (
        <Stack h="" flexDir="column" spacing="4" mt="2">
          {doctors.slice((page - 1) * 10, (page - 1) * 10 + 10).map(doctor => (
            <DoctorsCard key={doctor.id} doctor={doctor} />
          ))}
          <Pagination
            totalRegisters={doctors.length}
            currentPage={page}
            onPageChange={setPage}
          />
        </Stack>
      ) : (
        <Center minH="200px" borderRadius={10} bg="white">
          <Text>
            Parece que você ainda não possui médicos cadastrados,
            <br /> clique em <b>Novo médico</b> para cadastrar
          </Text>
        </Center>
      )}
      <DoctorsForm />
    </BaseTemplate>
  );
};

export default function Patients() {
  return (
    <DoctorsProvider>
      <DoctorsComponent />
    </DoctorsProvider>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
