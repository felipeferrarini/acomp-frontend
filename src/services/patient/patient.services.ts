import axios from 'axios';
// import { api } from '../apiClient';
import { PatientProps } from './types';

export const patientServices = {
  getAll: async (search = ''): Promise<PatientProps[]> => {
    try {
      const { data } = await axios.get<PatientProps[]>(
        // `/patients?search=${search}`
        `http://localhost:3002/patients?search=${search}`
      );

      return data;
    } catch (error) {
      throw new Error('error on fetching patients list');
    }
  },
  getOne: async (id: string): Promise<PatientProps> => {
    try {
      const { data } = await axios.get<PatientProps>(
        // `/patients/${id}`
        `http://localhost:3002/patients/${id}`
      );

      return data;
    } catch (error) {
      throw new Error('error on fetching patients list');
    }
  },
};
