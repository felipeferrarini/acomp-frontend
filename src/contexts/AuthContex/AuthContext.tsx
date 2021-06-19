import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import jwtDecode from 'jwt-decode';
import { useToast } from '@chakra-ui/react';
import { api } from '../../services/apiClient';
import { SignCredentials, UserProps } from './types';
import { WithChildren } from '../../@types/withChildren';

interface AuthContextData {
  // eslint-disable-next-line no-unused-vars
  signIn: (credentials: SignCredentials) => Promise<void>;
  signOut: () => void;
  user: UserProps;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextData);

function signOut() {
  destroyCookie(undefined, '@user.token');

  Router.push('/');
}

const AuthProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;
  const toast = useToast();

  useEffect(() => {
    const { '@user.token': token } = parseCookies();

    if (token) {
      api
        .get('/profile/me')
        .then(res =>
          setUser({
            name: res.data.name,
            email: res.data.email,
            id: res.data.id,
          })
        )
        .catch(() => signOut());
    }
  }, []);

  async function signIn({ email, password }: SignCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, userApi } = response.data;

      const { exp } = jwtDecode<{ exp: number }>(token);

      setCookie(undefined, '@user.token', token, {
        maxAge: exp,
        path: '/',
      });

      setUser(userApi);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      Router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'Erro no login',
        description: 'Opa! email ou senha incorretos',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('The auth context must be provider!');

  return context;
};

export { useAuthContext, AuthProvider, signOut };
