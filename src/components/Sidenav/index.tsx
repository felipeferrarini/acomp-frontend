import { Heading, Stack, Box, useDisclosure } from '@chakra-ui/react';
import { FaHome, FaStethoscope, FaUserFriends } from 'react-icons/fa';
import { ChoosePatientToFollowUp } from './ChoosePatientToFollowUp/ChoosePatientToFollowUp';
import { NavLink } from './NavLink';

export function Sidenav() {
  const disclosure = useDisclosure();
  return (
    <>
      <Box paddingY={30} backgroundColor="white">
        <Heading
          textAlign="center"
          mb={12}
          color="blue.900"
          fontWeight="medium"
        >
          ACOMP
        </Heading>
        <Stack spacing={3}>
          <NavLink icon={FaHome} href="/dashboard">
            Início
          </NavLink>
          <NavLink icon={FaStethoscope} href="#" onClick={disclosure.onOpen}>
            Acompanhamentos
          </NavLink>
          <NavLink icon={FaUserFriends} href="/patients">
            Pacientes
          </NavLink>
        </Stack>
      </Box>
      <ChoosePatientToFollowUp useDisclosure={disclosure} />
    </>
  );
}
