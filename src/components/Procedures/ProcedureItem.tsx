import { Center, Flex, Text, VStack, Button } from '@chakra-ui/react';
import { useProcedureContext } from '../../contexts/Procedures';
import { ProcedureProps } from '../../services/procedures/types';

interface ProcedureItemProps {
  procedure: ProcedureProps;
}

export function ProcedureItem({ procedure }: ProcedureItemProps) {
  const { toogleProcedureModal } = useProcedureContext();

  return (
    <Flex h="28" borderRadius={10}>
      <Center bg="blue.700" w="20%" shadow="sm">
        <Text color="white" fontWeight="medium">
          {procedure.type}
        </Text>
      </Center>
      <Center bg="blue.200" w="60%" shadow="sm">
        <Text color="gray.700">{procedure.description}</Text>
      </Center>
      <VStack w="20%" spacing={0} shadow="sm">
        <Button
          w="100%"
          h="100%"
          variant="outline"
          colorScheme="blue"
          borderColor="blue.700"
          borderRadius="0px 10px 0px 0px"
          onClick={() => toogleProcedureModal(procedure.id)}
        >
          Editar
        </Button>
        <Button
          w="100%"
          h="100%"
          variant="outline"
          colorScheme="blue"
          borderColor="blue.700"
          borderRadius="0px 0px 10px 0px"
        >
          Remover
        </Button>
      </VStack>
    </Flex>
  );
}
