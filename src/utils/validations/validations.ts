import * as yup from 'yup';

export const validatios = {
  requiredString: yup.string().required('Campo obrigatório'),
  requiredNumber: yup.number().required('Campo obrigatório'),
};
