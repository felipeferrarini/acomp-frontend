import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { routes } from '../utils/routes';

export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies['@user.token'];

    if (!token) {
      return {
        redirect: {
          destination: routes.login,
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (error) {
      destroyCookie(ctx, '@user.token');

      return {
        redirect: {
          destination: routes.login,
          permanent: false,
        },
      };
    }
  };
}
