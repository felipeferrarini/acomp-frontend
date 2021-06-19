import { api } from '../apiClient';
// import { api } from '../apiClient';
import { PatientPayload, PatientProps } from './types';

export const patientServices = {
  getAll: async (search = ''): Promise<PatientProps[]> => {
    try {
      const { data } = await api.get<PatientProps[]>(
        `/patients?search=${search}`
      );

      return data;
    } catch (error) {
      // throw new Error('error on fetching patients list');
      return [];
    }
  },
  getOne: async (id: string): Promise<PatientProps> => {
    try {
      const { data } = await api.get<PatientProps>(`/patients/${id}`);

      return data;
    } catch (error) {
      throw new Error('error on fetching patients list');
    }
  },
  create: async (form: PatientPayload): Promise<PatientProps> => {
    try {
      const { data } = await api.post<PatientProps>('/patients', form);

      return data;
    } catch (error) {
      throw new Error('error on create a new patient');
    }
  },
};
