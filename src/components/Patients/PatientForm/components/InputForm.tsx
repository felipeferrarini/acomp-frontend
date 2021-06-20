import {
  FormControl,
  HStack,
  FormLabel,
  VStack,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import { PatientPayload } from '../../../../services/patient/types';

interface InputFormProps {
  name: string;
  label: string;
  type?: 'number' | 'string' | 'date';
}

const InputForm = ({ name, label, type = 'string' }: InputFormProps) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps<string, PatientPayload>) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <HStack align="baseline">
            <FormLabel mr="auto">{label}</FormLabel>
            <VStack w="80%" align="flex-start">
              <Input
                {...field}
                variant="filled"
                placeholder={label}
                size="sm"
                type={type}
                borderRadius={5}
                w={type === 'date' ? '50%' : '100%'}
              />
              <FormErrorMessage fontSize="small" margin={0}>
                {form.errors[name]}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
      )}
    </Field>
  );
};

export { InputForm };
