import { Heading, Stack, Box } from '@chakra-ui/react';
import { FiArchive, FiHome, FiUsers } from 'react-icons/fi';
import { NavLink } from './NavLink';

export function Sidenav() {
  return (
    <Box flexBasis="20%" paddingY={30} backgroundColor="white">
      <Heading textAlign="center" mb={12} color="blue.900" fontWeight="medium">
        ACOMP
      </Heading>
      <Stack spacing={3}>
        <NavLink icon={FiHome} href="/dashboard">
          Início
        </NavLink>
        <NavLink icon={FiHome} href="/atendiments">
          Atendimentos
        </NavLink>
        <NavLink icon={FiUsers} href="/patients">
          Pacientes
        </NavLink>
        <NavLink icon={FiArchive} href="/procediements">
          Procedimentos
        </NavLink>
      </Stack>
    </Box>
  );
}
