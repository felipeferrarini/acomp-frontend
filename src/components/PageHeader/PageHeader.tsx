import { Flex, Icon, Button, Text } from '@chakra-ui/react';
import { IPageHeader } from './types';

const PageHeader = (props: IPageHeader) => {
  const { icon, title, buttonTitle, buttonAction } = props;

  if (!icon && !title) {
    return null;
  }

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="8"
      align="center"
      justifyContent="space-between"
    >
      <Text
        color="blue.900"
        fontWeight="medium"
        fontSize="2xl"
        display="flex"
        alignItems="center"
      >
        <Icon as={icon} mr="4" />
        {title}
      </Text>

      {buttonTitle && buttonAction && (
        <Button
          onClick={buttonAction}
          type="button"
          colorScheme="blue"
          bg="blue.900"
          size="md"
          borderRadius={10}
          maxWidth={230}
          w="100%"
        >
          {buttonTitle}
        </Button>
      )}
    </Flex>
  );
};

export { PageHeader };
