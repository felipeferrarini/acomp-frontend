import * as yup from 'yup';
import { validatios } from './validations';

export const doctorSchema = yup.object().shape({
  name: validatios.requiredString,
  crm: validatios.requiredString,
  phone: validatios.requiredString,
});
