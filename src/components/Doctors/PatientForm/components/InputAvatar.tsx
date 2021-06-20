import { Box, VStack, Avatar, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const InputAvatar = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [avatarImage, setAvatarImage] = useState('');

  return (
    <Box mr="8">
      <VStack>
        <Avatar h="36" w="32" borderRadius={10} src={avatarImage} mb="2" />
        <Button
          colorScheme="blue"
          variant="outline"
          borderColor="blue.700"
          color="blue.700"
          w="32"
          onClick={() => inputFileRef.current.click()}
        >
          Inserir foto
        </Button>
        <input
          ref={inputFileRef}
          type="file"
          hidden
          onChange={e => setAvatarImage(URL.createObjectURL(e.target.files[0]))}
        />
      </VStack>
    </Box>
  );
};

export { InputAvatar };
