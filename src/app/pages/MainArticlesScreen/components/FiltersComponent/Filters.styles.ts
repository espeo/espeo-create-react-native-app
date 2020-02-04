import { styled } from '@styles/themes';

export const PickersWrapper = styled.View`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  align-items: center;
  padding: ${props => props.theme.padding.large};
`;
