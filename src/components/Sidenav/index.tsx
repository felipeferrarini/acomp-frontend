import { Heading, Stack, Box, useDisclosure } from '@chakra-ui/react';
import { FaHome, FaStethoscope, FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';
import { ChoosePatientToFollowUp } from './ChoosePatientToFollowUp/ChoosePatientToFollowUp';
import { NavLink } from './NavLink';
import { routes } from '../../utils/routes';

export function Sidenav() {
  const disclosure = useDisclosure();
  return (
    <>
      <Box paddingY={30} backgroundColor="white">
        <Link href={routes.home}>
          <Heading
            textAlign="center"
            mb={12}
            color="blue.900"
            fontWeight="medium"
            _hover={{
              cursor: 'pointer',
            }}
          >
            ACOMP
          </Heading>
        </Link>

        <Stack spacing={3}>
          <NavLink icon={FaHome} href={routes.home}>
            Início
          </NavLink>
          <NavLink icon={FaStethoscope} href="#" onClick={disclosure.onOpen}>
            Acompanhamentos
          </NavLink>
          <NavLink icon={FaUserFriends} href={routes.patients}>
            Pacientes
          </NavLink>
        </Stack>
      </Box>
      <ChoosePatientToFollowUp useDisclosure={disclosure} />
    </>
  );
}
