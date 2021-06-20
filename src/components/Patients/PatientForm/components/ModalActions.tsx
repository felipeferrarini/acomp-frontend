import { ModalFooter, Button } from '@chakra-ui/react';

interface Props {
  isSubmitting: boolean;
  onClose: () => void;
}

const ModalActions = ({ isSubmitting, onClose }: Props) => {
  return (
    <ModalFooter>
      <Button
        type="submit"
        isLoading={isSubmitting}
        colorScheme="blue"
        mr={3}
        bg="blue.900"
        w="32"
      >
        Salvar
      </Button>
      <Button w="32" onClick={onClose}>
        Cancel
      </Button>
    </ModalFooter>
  );
};

export { ModalActions };
