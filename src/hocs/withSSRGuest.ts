import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';
import { routes } from '../utils/routes';

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies['@user.token']) {
      return {
        redirect: {
          destination: routes.home,
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
