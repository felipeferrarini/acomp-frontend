export interface ProcedurePayload {
  id?: string;
  type: string;
}

export interface ProcedureProps extends ProcedurePayload {
  id: string;
  created_at: string;
  updated_at: string;
}
