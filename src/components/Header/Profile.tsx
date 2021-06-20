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
import Router from 'next/router';
import { useAuthContext } from '../../contexts/AuthContex';
import { routes } from '../../utils/routes';

export function Profile() {
  const { user, signOut } = useAuthContext();
  function handleRedirect() {
    Router.push(routes.profile);
  }
  return (
    <Flex align="center" position="relative" mr="20px">
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
        <MenuList>
          <MenuItem onClick={() => handleRedirect()}>Meus Dados</MenuItem>
          <MenuItem onClick={() => signOut()}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
