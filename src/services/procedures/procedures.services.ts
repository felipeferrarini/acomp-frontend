import { api } from '../apiClient';
import { ProcedureProps } from './types';

export const procedureService = {
  getAll: async (search = ''): Promise<ProcedureProps[]> => {
    try {
      const { data } = await api.get<ProcedureProps[]>(`/procedures`);

      return data;
    } catch (error) {
      throw new Error('error on fetching procedures list');
    }
  },
};
