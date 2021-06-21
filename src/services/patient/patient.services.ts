import { api } from '../apiClient';
import {
  FollowUpPayload,
  FollowUpProps,
  PatientPayload,
  PatientProps,
} from './types';

export const patientServices = {
  getAll: async (search = ''): Promise<PatientProps[]> => {
    try {
      const { data } = await api.get<PatientProps[]>(
        `/patients?search=${search}`
      );

      return data;
    } catch (error) {
      throw new Error('error on fetching patients list');
    }
  },
  getOne: async (id: string): Promise<PatientProps> => {
    try {
      const { data } = await api.get<PatientProps>(`/patients/${id}`);

      return data;
    } catch (error) {
      throw new Error('error on fetching patient datails');
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
  update: async (form: PatientPayload): Promise<PatientProps> => {
    try {
      const { data } = await api.put<PatientProps>(
        `/patients/${form.id}`,
        form
      );

      return data;
    } catch (error) {
      throw new Error('error on create a new patient');
    }
  },
  getAllMedicalCare: async (patientId: string): Promise<FollowUpProps[]> => {
    try {
      const { data } = await api.put<FollowUpProps[]>(
        `/medical-care?pacient_id=${patientId}`
      );
      console.log('data', data);

      return data;
    } catch (error) {
      throw new Error('error on get followup list');
    }
  },
  newMedicalCare: async (form: FollowUpPayload): Promise<FollowUpProps> => {
    try {
      const { data } = await api.put<FollowUpProps>(`/medical-care`, form);

      return data;
    } catch (error) {
      throw new Error('error on create a new followup');
    }
  },
};
