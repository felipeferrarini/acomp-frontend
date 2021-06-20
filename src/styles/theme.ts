import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#2C73D2',
      '700': '#57AAFF',
      '200': '#C3E0FF',
      '100': '#DFEEFE',
      '50': '#E6F4F1',
    },
    gray: {
      '700': '#333333',
      '500': '#666666',
      '50': '#EDEDED',
    },
  },
  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu',
  },
  styles: {
    global: {
      body: {
        bg: 'blue.50',
        color: 'gray.500',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: '5px',
        },

        '&::-webkit-scrollbar-thumb': {
          bg: 'blue.900',
          borderRadius: '5px',
        },

        '&::-webkit-scrollbar-track': {
          backgroundColor: 'blue.50',
          borderRadius: 0,
        },
      },
    },
  },
});
