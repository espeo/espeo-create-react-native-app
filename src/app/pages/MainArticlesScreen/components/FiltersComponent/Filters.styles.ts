import { styled } from '@styles/themes';

export const PickersWrapper = styled.View`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  align-items: center;
  padding: ${props => props.theme.padding.large};
`;

export const PickerWrapper = styled.View`
  width: 100%;
  border: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.light};
  border-radius: 20;
  margin: ${props => props.theme.margin.small} 0;
`;

export const StyledPicker = styled.Picker`
  height: 40;
  padding: ${props => props.theme.padding.small};
`;
