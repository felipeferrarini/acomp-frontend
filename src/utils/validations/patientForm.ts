import * as yup from 'yup';
import { validatios } from './validations';

export const patientFormSchema = yup.object().shape({
  name: validatios.requiredString,
  address: validatios.requiredString,
  birth_date: yup.date().required('Campo obrigatório'),
  cpf: validatios.requiredNumber,
  phone: yup.string(),
});
