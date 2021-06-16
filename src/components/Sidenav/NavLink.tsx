import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ElementType } from 'react';

interface Props extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: Props) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === href) isActive = true;
  if (asPath.startsWith(String(href))) isActive = true;

  if (isActive)
    return (
      <Link href={href} passHref {...rest}>
        <ChakraLink
          display="flex"
          align="flex-start"
          paddingX={30}
          paddingY={2}
          borderLeft="4px"
          borderColor="blue.900"
          color="blue.700"
          bgGradient="linear(to-r, blue.50, transparent 50%)"
        >
          <Icon as={icon} fontSize={20} />
          <Text ml={3}>{children}</Text>
        </ChakraLink>
      </Link>
    );
  return (
    <Link href={href} passHref {...rest}>
      <ChakraLink
        display="flex"
        align="flex-start"
        paddingX={30}
        paddingY={2}
        borderLeft="4px"
        borderColor="transparent"
      >
        <Icon as={icon} fontSize={20} />
        <Text ml={3}>{children}</Text>
      </ChakraLink>
    </Link>
  );
}

// <Flex
//   align="flex-start"
//   paddingX={30}
//   paddingY={2}
//   borderLeft="4px"
//   borderColor="blue.900"
//   color="blue.700"
//   bgGradient="linear(to-r, blue.50, transparent 50%)"
// >
//   <Icon as={FiHome} fontSize={20} />
//   <Text ml={3}>Início</Text>
// </Flex>
