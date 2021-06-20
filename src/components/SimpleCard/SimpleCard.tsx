import { Flex, Icon, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface SimpleCardProps {
  title: string;
  icon: ElementType;
  href: string;
}

const SimpleCard = (props: SimpleCardProps) => {
  const { title, icon, href } = props;

  return (
    <Link href={href}>
      <Flex
        height="64"
        direction="row"
        justify="space-between"
        align="center"
        p="16"
        bg="white"
        shadow="sm"
        borderRadius={18}
        w="100%"
        _hover={{
          cursor: 'pointer',
        }}
        fontSize="3xl"
        fontWeight="medium"
      >
        <Icon as={icon} fontSize="6xl" />
        <Text>{title}</Text>
      </Flex>
    </Link>
  );
};

export { SimpleCard };
