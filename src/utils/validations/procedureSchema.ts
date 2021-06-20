import * as yup from 'yup';
import { validatios } from './validations';

export const procedureSchema = yup.object().shape({
  type: validatios.requiredString,
  description: validatios.requiredString,
});
