import 'styled-components';
import { Theme } from './app/styles/themes/defaultTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
