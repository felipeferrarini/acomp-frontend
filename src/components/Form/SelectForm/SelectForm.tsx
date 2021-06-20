import {
  FormControl,
  HStack,
  FormLabel,
  VStack,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

interface InputFormProps {
  name: string;
  label: string;
  placeholder: string;
  options: Array<{ id: string; name: string }>;
}

export function SelectForm({
  name,
  label,
  options,
  placeholder,
}: InputFormProps) {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <HStack align="baseline">
            <FormLabel mr="auto">{label}</FormLabel>
            <VStack w="80%" align="flex-start">
              <Select
                {...field}
                variant="filled"
                size="sm"
                borderRadius={5}
                w="50%"
                placeholder={placeholder}
              >
                {options.map(op => (
                  <option value={op.id}>{op.name}</option>
                ))}
              </Select>

              <FormErrorMessage fontSize="small" margin={0}>
                {form.errors[name]}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
      )}
    </Field>
  );
}
