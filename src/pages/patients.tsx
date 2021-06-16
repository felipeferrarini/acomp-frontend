import { Flex, Icon, Button, Text } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { PatientCard } from '../components/Patients';

export default function Patients() {
  return (
    <BaseTemplate>
      <Flex flexDir="column">
        <Flex flexDir="row" align="center" my="5">
          <Text
            color="blue.900"
            fontWeight="medium"
            fontSize="2xl"
            display="flex"
            alignItems="center"
          >
            <Icon as={FaUserFriends} mr="4" />
            Pacientes
          </Text>

          <Flex flexDir="row" w="100%" justify="flex-end">
            <Button
              type="button"
              colorScheme="blue"
              bg="blue.900"
              size="md"
              borderRadius={10}
              maxWidth={230}
              w="100%"
            >
              Novo Atendimento
            </Button>
            {/* <Button
              type="button"
              colorScheme="blue"
              bg="white"
              size="md"
              borderRadius={10}
              maxWidth={230}
              w="100%"
              color="blue.900"
              borderColor="blue.900"
              variant="outline"
              ml="6"
            >
              Histórico
            </Button> */}
          </Flex>
        </Flex>

        <Flex h="100%" flexDir="column" overflowY="scroll">
          {[...Array(6)].map(a => (
            <PatientCard key={a} />
          ))}
        </Flex>
      </Flex>
    </BaseTemplate>
  );
}
