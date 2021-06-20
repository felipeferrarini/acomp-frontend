import {
  Flex,
  Text,
  Wrap,
  WrapItem,
  Button,
  HStack,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { FaRegFile, FaTimes } from 'react-icons/fa';

interface AttachmentsProps {
  name: string;
  path: File;
}

const InputFiles = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<AttachmentsProps[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = [...Array.from({ length: e.target.files.length })].map(
      (_, idx) => ({
        name: e.target.files[idx].name,
        path: e.target.files[idx],
      })
    );

    setAttachments(files);
  };

  const handleDelete = (index: number) => {
    setAttachments(
      attachments.reduce((prev, acc, idx) => {
        if (idx !== index) {
          prev.push(acc);
        }
        return prev;
      }, [] as AttachmentsProps[])
    );
  };

  return (
    <Flex direction="column" align="flex-start" w="100%">
      <Text fontWeight="medium">Anexos:</Text>

      {ref.current !== null && (
        <Wrap spacing="2">
          {attachments.map((file, index) => (
            <WrapItem>
              <HStack spacing="2">
                <Icon as={FaRegFile} />
                <Text color="gray.700">{file.name}</Text>
                <IconButton
                  color="blue.900"
                  variant="unstyled"
                  aria-label="Apagar Arquivo"
                  icon={<FaTimes />}
                  onClick={() => handleDelete(index)}
                />
              </HStack>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <input ref={ref} type="file" multiple hidden onChange={handleChange} />
      <Button
        colorScheme="blue"
        variant="outline"
        borderColor="blue.700"
        color="blue.700"
        w="32"
        onClick={() => ref.current.click()}
      >
        Novo anexo
      </Button>
    </Flex>
  );
};

export { InputFiles };
