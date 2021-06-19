import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { Patient } from '../../components/Patient';
import { FollowUpList } from '../../components/FollowUp';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import { withSSRAuth } from '../../hocs/withSSRAuth';
import { patientServices } from '../../services/patient/patient.services';
import { PatientProps } from '../../services/patient/types';

interface FollowUpProps {
  patient: PatientProps;
}

export default function FollowUp({ patient }: FollowUpProps) {
  return (
    <BaseTemplate>
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
    </BaseTemplate>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const { id } = ctx.params;
  const patient = await patientServices.getOne(id as string);
  return {
    props: { patient },
  };
});
