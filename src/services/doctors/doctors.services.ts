import { api } from '../apiClient';
import { PatientPayload, PatientProps } from './types';

export const patientServices = {
  getAll: async (search = ''): Promise<PatientProps[]> => {
    try {
      const { data } = await api.get<PatientProps[]>(
        `/doctors?search=${search}`
      );

      return data;
    } catch (error) {
      throw new Error('error on fetching doctors list');
    }
  },
  getOne: async (id: string): Promise<PatientProps> => {
    try {
      const { data } = await api.get<PatientProps>(`/doctors/${id}`);

      return data;
    } catch (error) {
      throw new Error('error on fetching doctor datails');
    }
  },
  create: async (form: PatientPayload): Promise<PatientProps> => {
    try {
      const { data } = await api.post<PatientProps>('/doctors', form);

      return data;
    } catch (error) {
      throw new Error('error on create a new doctor');
    }
  },
  update: async (form: PatientPayload): Promise<PatientProps> => {
    try {
      const { data } = await api.put<PatientProps>(`/doctors/${form.id}`, form);

      return data;
    } catch (error) {
      throw new Error('error on update the doctor');
    }
  },
};
