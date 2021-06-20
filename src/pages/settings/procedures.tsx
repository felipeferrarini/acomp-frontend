import { FiFile } from 'react-icons/fi';
import { VStack, Center, Text } from '@chakra-ui/react';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import { withSSRAuth } from '../../hocs/withSSRAuth';
import {
  ProceduresProvider,
  useProcedureContext,
} from '../../contexts/Procedures';
import { ProcedureItem } from '../../components/Procedures/ProcedureItem';
import { Loading } from '../../components/Loading';
import { ProcedureModal } from '../../components/Procedures/ProcedureModal';

const ProceduresPage = () => {
  const { loading, procedures, toogleProcedureModal } = useProcedureContext();
  return (
    <BaseTemplate
      icon={FiFile}
      title="Procedimentos"
      buttonAction={() => toogleProcedureModal()}
      buttonTitle="Novo Procedimento"
    >
      <VStack
        background="white"
        borderRadius={10}
        overflow="hidden"
        spacing="2"
        p="8"
      >
        {loading ? (
          <Loading />
        ) : procedures.length > 0 ? (
          procedures.map(procedure => (
            <ProcedureItem procedure={procedure} key={procedure.id} />
          ))
        ) : (
          <Center minH="200px" borderRadius={10} bg="white">
            <Text>
              Parece que você ainda não possui procedimentos cadastrados,
              <br /> clique em <strong>Novo procedimento</strong> para cadastrar
            </Text>
          </Center>
        )}
      </VStack>
      <ProcedureModal />
    </BaseTemplate>
  );
};

export default function Procedures() {
  return (
    <ProceduresProvider>
      <ProceduresPage />
    </ProceduresProvider>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
