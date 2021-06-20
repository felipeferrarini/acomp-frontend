import { FiFile } from 'react-icons/fi';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { withSSRAuth } from '../hocs/withSSRAuth';
import {
  ProceduresProvider,
  useProcedureContext,
} from '../contexts/Procedures';
import { ProcedureItem } from '../components/Procedures/ProcedureItem';

export default function Procedures() {
  const { loading, procedures } = useProcedureContext();
  console.log(procedures);
  return (
    <ProceduresProvider>
      <BaseTemplate
        icon={FiFile}
        title="Procedimentos"
        // eslint-disable-next-line prettier/prettier
        buttonAction={() => { }}
        buttonTitle="Novo Procedimento"
      >
        <Box background="white" borderRadius={10} overflow="hidden">
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
          ) : procedures.length > 0 ? (
            procedures.map(procedure => <ProcedureItem key={procedure.id} />)
          ) : (
            <Center minH="200px" borderRadius={10} bg="white">
              <Text>
                Parece que você ainda não possui procedimentos cadastrados,
                <br /> clique em <strong>Novo procedimento</strong> para
                cadastrar
              </Text>
            </Center>
          )}
        </Box>
      </BaseTemplate>
    </ProceduresProvider>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
