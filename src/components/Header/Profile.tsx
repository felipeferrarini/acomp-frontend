import {
  Flex,
  Box,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useAuthContext } from '../../contexts/AuthContex';

export function Profile() {
  const { user, signOut } = useAuthContext();

  return (
    <Flex align="center" position="relative">
      <Box mr="4" textAlign="right">
        <Text>Hi, {user?.name}</Text>
      </Box>

      <Avatar size="md" name={user?.name} />

      {/* <Icon as={FaChevronDown}  /> */}
      <Menu>
        <MenuButton
          ml="2"
          as={IconButton}
          icon={<Icon as={FaChevronDown} />}
          variant="outline"
          borderColor="transparent"
          background="transparent"
        />
        <MenuList right="0">
          <MenuItem>Meus Dados</MenuItem>
          <MenuItem onClick={() => signOut()}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
