import { styled } from '@styles/themes/defaultTheme';
import { Text } from '@styles/components';

export const NavigationWrapper = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  height: 60;
  justify-content: center;
  align-items: center;
`;

export const NavigationTitle = styled(Text)`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.font.size.large};
`;
