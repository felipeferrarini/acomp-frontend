import {
  FollowUpPayload,
  FollowUpProps,
  PatientPayload,
  PatientProps,
} from '../../services/patient/types';

export interface PatientsContextData {
  patients: PatientProps[];
  loading: boolean;
  loadingPatient: boolean;
  patientModalIsOpen: boolean;
  patientForm: PatientPayload;
  followups: FollowUpProps[];
  loadingFollowUp: boolean;
  followUpModalIsOpen: boolean;
  isEditMode: boolean;
  defaultFollowUpForm: FollowUpPayload;
  fecthPatientsData: (search?: string) => Promise<void>;
  createPatient: (form: PatientPayload) => Promise<void>;
  tooglePatientModal: (id?: string) => void;
  getPatientInfo: (id: string) => Promise<void>;
  toogleFollowUpModal: () => void;
  createFollowup: (form: FollowUpPayload) => Promise<void>;
}
