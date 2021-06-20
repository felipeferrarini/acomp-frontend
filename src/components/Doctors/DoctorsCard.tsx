import { Box, Image, Flex, Text, Stack, Button } from '@chakra-ui/react';
import { memo } from 'react';
import { useDoctorsContext } from '../../contexts/DoctorsContext';
import { DoctorProps } from '../../services/doctors/types';

interface DoctorCardProps {
  doctor: DoctorProps;
}

const DoctorsCardComponent = ({ doctor }: DoctorCardProps) => {
  const { name, crm, phone, id } = doctor;
  const { toogleModal } = useDoctorsContext();

  return (
    <Box
      display="flex"
      flexDirection="row"
      shadow="sm"
      bg="white"
      borderRadius={24}
      h="40"
      transition="all 0.2s"
      _hover={{
        shadow: 'lg',
      }}
    >
      <Image
        src="https://pbs.twimg.com/profile_images/983018479644303361/UD5uocVf_400x400.jpg"
        h="100%"
        w="40"
        borderTopLeftRadius={24}
        borderBottomLeftRadius={24}
      />
      <Flex
        flexDir="row"
        justifyContent="space-between"
        p="6"
        w="100%"
        color="gray.700"
      >
        <Flex flexDir="column" justify="center" h="100%">
          <Text fontSize="2xl" mb="2">
            <b>{name}</b>
          </Text>
          <Text mb="auto">
            Tefone: <b>{phone}</b>
          </Text>
          <Text>
            CRM: <b>{crm}</b>
          </Text>
        </Flex>
        <Stack spacing="2" justify="center" align="center">
          <Button
            onClick={() => toogleModal(id)}
            colorScheme="blue"
            bg="blue.900"
            w="36"
            borderRadius={10}
          >
            Editar
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

const DoctorsCard = memo(DoctorsCardComponent);

export { DoctorsCard };
