import { Box, Button, Icon, Text } from '@chakra-ui/react';

import { FiPlus } from 'react-icons/fi';
import { Pacient } from '../../components/Pacient';
import { FollowUpList } from '../../components/FollowUp';
import { BaseTemplate } from '../../components/Templates/BaseLayout';

export default function FollowUp() {
  return (
    <BaseTemplate>
      <Box background="white" borderRadius={10} overflow="hidden">
        <Pacient />
        <Button
          maxW="60%"
          w="100%"
          margin="0 auto"
          align="center"
          background="blue.700"
          marginBottom={4}
          height={20}
          justifyContent="center"
          borderRadius={10}
          color="white"
          fontWeight="bold"
          display="flex"
        >
          <Icon as={FiPlus} fontSize="2xl" />
          <Text fontSize="lg" marginLeft={2}>
            Novo Atendimento
          </Text>
        </Button>
        <FollowUpList />
      </Box>
    </BaseTemplate>
  );
}
