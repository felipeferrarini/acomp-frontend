export interface DoctorPayload {
  id?: string;
  name: string;
  crm: string;
  phone: string;
  user_id: string;
}
export interface DoctorProps extends DoctorPayload {
  id: string;
  created_at: string;
  updated_at: string;
}
