import { Box, Flex, Text, Avatar, Button, Icon } from '@chakra-ui/react';
import { FiEdit, FiUser } from 'react-icons/fi';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { useAuthContext } from '../contexts/AuthContex';

export default function Profile() {
  const { user } = useAuthContext();
  return (
    <BaseTemplate icon={FiUser} title="Meus Dados">
      <Box
        padding="15px"
        background="white"
        borderRadius={10}
        overflow="hidden"
      >
        <Flex w="100%">
          <Avatar size="2xl" name={user?.name} />
          <Box marginLeft={10} fontSize="lg">
            <Text>
              <strong>Nome:</strong> {user?.name}
            </Text>
            <Text>
              <strong>Email:</strong> {user?.email}
            </Text>
          </Box>
          <Button href="#" marginRight={6} marginTop={2} marginLeft="auto">
            <Icon as={FiEdit} marginRight={2} />
            Atualizar meus Dados
          </Button>
        </Flex>
      </Box>
    </BaseTemplate>
  );
}
