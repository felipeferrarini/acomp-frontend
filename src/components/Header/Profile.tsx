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
import Link from 'next/link';
import { useAuthContext } from '../../contexts/AuthContex';
import { routes } from '../../utils/routes';

export function Profile() {
  const { user, signOut } = useAuthContext();
  console.log(user);

  return (
    <Flex align="center" position="relative" mr="20px">
      <Box mr="4" textAlign="right">
        <Text>Hi, {user?.name}</Text>
      </Box>

      <Avatar size="md" name={user?.name} />

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
          <Link href={routes.profile}>
            <MenuItem> Meus Dados</MenuItem>
          </Link>
          <MenuItem onClick={() => signOut()}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
