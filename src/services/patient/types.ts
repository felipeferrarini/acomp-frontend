export interface PatientPayload {
  id?: string;
  name: string;
  cpf: string;
  phone: string;
  address: string;
  birth_date: string;
}

export interface PatientProps extends PatientPayload {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface FollowUpPayload {
  date: string;
  time: string;
  type: string;
  patient_id: string;
  doctor_id: string;
  procedure_id: string;
  description: string;
}

export interface FollowUpProps extends FollowUpPayload {
  id: string;
  created_at: string;
  updated_at: string;
}
