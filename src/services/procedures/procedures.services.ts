import { api } from '../apiClient';
import { ProcedurePayload, ProcedureProps } from './types';

export const procedureService = {
  getAll: async (search = ''): Promise<ProcedureProps[]> => {
    try {
      const { data } = await api.get<ProcedureProps[]>(`/procedures`);

      return data;
    } catch (error) {
      throw new Error('error on fetching procedures list');
    }
  },
  getOne: async (id: string): Promise<ProcedureProps> => {
    try {
      const { data } = await api.get<ProcedureProps>(`/procedures/${id}`);

      return data;
    } catch (error) {
      throw new Error('error on fetching procedure details');
    }
  },
  create: async (form: ProcedurePayload): Promise<ProcedureProps> => {
    try {
      const { data } = await api.post<ProcedureProps>('/procedures', form);

      return data;
    } catch (error) {
      throw new Error('error on create procedure');
    }
  },
  update: async (form: ProcedurePayload): Promise<ProcedureProps> => {
    try {
      const { data } = await api.put<ProcedureProps>(
        `/procedures/${form.id}`,
        form
      );

      return data;
    } catch (error) {
      throw new Error('error on update procedure');
    }
  },
};
