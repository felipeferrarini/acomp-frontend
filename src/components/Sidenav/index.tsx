import { Heading, Stack, Box, useDisclosure, Flex } from '@chakra-ui/react';
import {
  FaHome,
  FaStethoscope,
  FaUserFriends,
  FaCogs,
  FaUserMd,
} from 'react-icons/fa';
import Link from 'next/link';
import { memo } from 'react';
import { ChoosePatientToFollowUp } from './ChoosePatientToFollowUp/ChoosePatientToFollowUp';
import { NavLink } from './NavLink';
import { routes } from '../../utils/routes';

const SidenavComponent = () => {
  const disclosure = useDisclosure();
  return (
    <>
      <Flex
        paddingY={30}
        backgroundColor="white"
        pos="relative"
        direction="column"
      >
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
          <NavLink icon={FaUserMd} href={routes.doctors}>
            Médicos
          </NavLink>
        </Stack>
        <Box marginTop="auto">
          <NavLink icon={FaCogs} href={routes.settings}>
            Configurações
          </NavLink>
        </Box>
      </Flex>
      <ChoosePatientToFollowUp useDisclosure={disclosure} />
    </>
  );
};

const Sidenav = memo(SidenavComponent);

export { Sidenav };
