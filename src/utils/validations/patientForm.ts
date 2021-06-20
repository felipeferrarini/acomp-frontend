import * as yup from 'yup';

const validatios = {
  requiredString: yup.string().required('Campo obrigatório'),
  requiredNumber: yup.number().required('Campo obrigatório'),
};

export const patientFormSchema = yup.object().shape({
  name: validatios.requiredString,
  address: validatios.requiredString,
  birth_date: yup.date().required('Campo obrigatório'),
  cpf: validatios.requiredNumber,
  phone: yup.string(),
});
