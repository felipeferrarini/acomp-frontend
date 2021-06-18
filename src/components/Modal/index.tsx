import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseDisclosureProps,
  Icon,
  Text,
  Flex,
  Center,
  VStack,
  Select,
} from '@chakra-ui/react';
import { ReactElement, ElementType } from 'react';

interface props {
  useDisclosure: UseDisclosureProps;
  icon: ElementType;
  title: string;
  button: string;
  children: ReactElement<any, any>;
}

export function ModalComponent({
  useDisclosure,
  icon,
  title,
  button,
  children,
}: // children,
props) {
  const { isOpen, onClose } = useDisclosure;
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Flex>
                <Icon as={icon} fontSize={20} color="blue.700" />
                <Text fontWeight="medium" ml={3} color="blue.700">
                  {title}
                </Text>
              </Flex>
            </Center>
          </ModalHeader>
          <ModalCloseButton color="blue.700" />
          <ModalBody>{children}</ModalBody>
          <Center>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                {button}
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
