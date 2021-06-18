import {
  Flex,
  Stack,
  Button,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { FiUser, FiLock } from 'react-icons/fi';
import { Input } from '../components/signIn';
import { signInFormSchema } from '../utils/validations/signInFormSchema';
import { useAuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from '../hocs/withSSRGuest';

type SignInFormData = {
  email: string;
  password: string;
  loginError?: string;
};

export default function SignIn() {
  const { signIn } = useAuthContext();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSingIn: SubmitHandler<SignInFormData> = async values => {
    signIn(values);
  };
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Text color="blue.900" fontSize="4xl" fontWeight="medium" mb={10}>
        ACOMP
      </Text>
      <Flex
        as="form"
        w={{
          base: 'fit-content',
          sm: '100%',
        }}
        maxW={700}
        h="100%"
        maxH={470}
        bg="white"
        p="8"
        m="4"
        borderRadius={24}
        justify="center"
        align="center"
        onSubmit={handleSubmit(handleSingIn)}
        shadow="sm"
      >
        <Stack maxW={425} w="100%" spacing="6">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            leftIcon={<FiUser />}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            leftIcon={<FiLock />}
            isPassword
            {...register('password')}
          />
          <Link href="/">
            <ChakraLink color="blue.900" textAlign="end">
              Esqueci a senha
            </ChakraLink>
          </Link>

          <Button
            isLoading={formState.isSubmitting}
            type="submit"
            mt="6"
            colorScheme="blue"
            bg="blue.900"
            size="lg"
            borderRadius={10}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
