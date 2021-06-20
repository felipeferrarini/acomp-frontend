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
