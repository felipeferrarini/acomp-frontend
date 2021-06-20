import { api } from '../apiClient';
import { DoctorPayload, DoctorProps } from './types';

export const doctorServices = {
  getAll: async (search = ''): Promise<DoctorProps[]> => {
    try {
      const { data } = await api.get<DoctorProps[]>(
        `/doctors?search=${search}`
      );

      return data;
    } catch (error) {
      throw new Error('error on fetching doctors list');
    }
  },
  getOne: async (id: string): Promise<DoctorProps> => {
    try {
      const { data } = await api.get<DoctorProps>(`/doctors/${id}`);

      return data;
    } catch (error) {
      throw new Error('error on fetching doctor datails');
    }
  },
  create: async (form: DoctorPayload): Promise<DoctorProps> => {
    try {
      const { data } = await api.post<DoctorProps>('/doctors', form);

      return data;
    } catch (error) {
      throw new Error('error on create a new doctor');
    }
  },
  update: async (form: DoctorPayload): Promise<DoctorProps> => {
    try {
      const { data } = await api.put<DoctorProps>(`/doctors/${form.id}`, form);

      return data;
    } catch (error) {
      throw new Error('error on update the doctor');
    }
  },
};
