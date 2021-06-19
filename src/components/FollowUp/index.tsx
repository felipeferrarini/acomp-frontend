import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Collapse,
  Button,
  Link,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiFile } from 'react-icons/fi';

export function FollowUpList() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box paddingX={20} marginBottom={4}>
      <Grid
        templateColumns="1fr 4fr"
        mb={8}
        borderRadius={10}
        overflow="hidden"
        color="gray.900"
      >
        <GridItem
          background="blue.700"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDir="column"
          padding={3}
          color="white"
          fontWeight="bold"
          textAlign="center"
        >
          <Text>16.06.2021</Text>
          <Text>10:00</Text>
        </GridItem>
        <GridItem background="blue.200" padding={5}>
          <Collapse startingHeight={60} in={show}>
            <Heading fontSize="2xl">Consulta</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repellendus assumenda pariatur, est quasi commodi molestias iusto
              delectus sint provident?
            </Text>
            <Box mt={4}>
              <Heading fontSize="smaller">Anexos</Heading>
              <Link href="/algo">
                <Icon as={FiFile} /> Arquivo X{' '}
              </Link>
            </Box>
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Mostrar {show ? 'menos' : 'mais'}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
