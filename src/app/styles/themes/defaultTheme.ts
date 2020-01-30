import baseStyled, {
  ReactNativeStyledInterface,
} from 'styled-components/native';

export const defaultTheme = {
  font: {
    size: {
      medium: '15px',
    },
    weight: {
      bold: 'bold',
    },
  },
  colors: {
    dark: '#222',
    light: '#fefefe',
    primary: '#e8ebf2',
    secondary: '#502a37',
  },
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ReactNativeStyledInterface<Theme>;
