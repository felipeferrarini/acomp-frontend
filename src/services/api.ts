import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { signOut } from '../contexts/AuthContext';

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['@user.token']}`,
    },
  });

  api.interceptors.response.use(
    res => res,
    (error: AxiosError) => {
      if (error.response.status === 401 || error.response.status === 404) {
        signOut();
      }
    }
  );

  return api;
}
