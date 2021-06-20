import * as yup from 'yup';
import { validatios } from './validations';

export const FollowUpSchema = yup.object().shape({
  procedure_id: validatios.requiredString,
  doctor_id: validatios.requiredString,
  description: validatios.requiredString,
  date: yup.date().required('Campo obrigatório'),
});
