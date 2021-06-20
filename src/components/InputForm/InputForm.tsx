import {
  FormControl,
  HStack,
  FormLabel,
  VStack,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import { Field } from 'formik';

interface InputFormProps {
  name: string;
  label: string;
  type?: 'number' | 'string' | 'date';
  isTextArea?: boolean;
}

export function InputForm({
  name,
  label,
  type = 'string',
  isTextArea = false,
}: InputFormProps) {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <HStack align="baseline">
            <FormLabel mr="auto">{label}</FormLabel>
            <VStack w="80%" align="flex-start">
              {isTextArea ? (
                <Textarea
                  {...field}
                  variant="filled"
                  placeholder={label}
                  size="sm"
                  type={type}
                  borderRadius={5}
                  w={type === 'date' ? '50%' : '100%'}
                />
              ) : (
                <Input
                  {...field}
                  variant="filled"
                  placeholder={label}
                  size="sm"
                  type={type}
                  borderRadius={5}
                  w={type === 'date' ? '50%' : '100%'}
                />
              )}
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
