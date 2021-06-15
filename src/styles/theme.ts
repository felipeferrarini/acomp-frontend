import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#2C73D2',
      '700': '#57AAFF',
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
    },
  },
});
