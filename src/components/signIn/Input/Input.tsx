import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input as ChakraInput,
  IconButton,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputProps } from './types';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const {
    name,
    label,
    error = null,
    leftIcon,
    isPassword = false,
    type,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup
        borderLeftWidth={5}
        borderLeftColor={error ? 'red' : 'gray.500'}
        _hover={{
          color: 'blue.900',
          borderLeftColor: 'blue.900',
        }}
        _focusWithin={{
          color: 'blue.900',
          borderLeftColor: 'blue.900',
        }}
        transition="all 0.2s"
        bgGradient="linear(to-r, blue.100 1%, #F8F9F9 90%)"
        shadow="sm"
      >
        {leftIcon && <InputLeftElement h="100%">{leftIcon}</InputLeftElement>}
        <ChakraInput
          placeholder={label}
          id={name}
          name={name}
          focusBorderColor="transparent"
          bgColor="gray.50"
          variant="filled"
          size="lg"
          borderRadius={0}
          ref={ref}
          _placeholder={{
            color: 'gray.500',
          }}
          _hover={{
            bgColor: 'transparent',
          }}
          type={showPassword ? 'text' : type}
          {...rest}
        />
        <InputRightElement h="100%">
          {isPassword && (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Mostrar senha"
              variant="ghost"
              icon={showPassword ? <FaEye /> : <FaEyeSlash />}
            />
          )}
        </InputRightElement>
      </InputGroup>

      {!!error && <FormErrorMessage mb="-4">{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
