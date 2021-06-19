import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { signOut } from '../contexts/AuthContext';

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.BACK_END_URL || 'https://acomp-med.herokuapp.com',
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
