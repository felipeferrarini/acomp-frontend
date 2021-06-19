import { PatientPayload, PatientProps } from '../../services/patient/types';

export interface PatientsContextData {
  patients: PatientProps[];
  loading: boolean;
  loadingPatient: boolean;
  patientModalIsOpen: boolean;
  patientForm: PatientPayload;
  fecthPatientsData: (search?: string) => Promise<void>;
  createPatient: (form: PatientPayload) => Promise<void>;
  tooglePatientModal: (id?: string) => void;
}
