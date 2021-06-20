import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiEdit, FiUser } from 'react-icons/fi';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { useAuthContext } from '../contexts/AuthContex';

export default function Profile() {
  const { user } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();

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
          <Button
            onClick={onOpen}
            marginRight={6}
            marginTop={2}
            marginLeft="auto"
          >
            <Icon as={FiEdit} marginRight={2} />
            Atualizar meus Dados
          </Button>
        </Flex>
      </Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>FORM DE USUÀRIO</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </BaseTemplate>
  );
}
