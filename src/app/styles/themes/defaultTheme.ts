import baseStyled, {
  ReactNativeStyledInterface,
} from 'styled-components/native';

export const defaultTheme = {
  colors: {
    dark: '#222222',
    grey: '#a8a9bc',
    light: '#fefefe',
    primary: '#e8ebf2',
    secondary: '#502a37',
  },
  margin: {
    small: '5px',
    medium: '10px',
    large: '15px',
  },
  font: {
    size: {
      small: '10px',
      medium: '14px',
      large: '18px',
      xlarge: '26px',
    },
    weight: {
      bold: 'bold',
    },
  },
  padding: {
    small: '5px',
    medium: '10px',
    large: '15px',
    xlarge: '20px',
  },
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ReactNativeStyledInterface<Theme>;
