import { styled } from '@styles/themes';
import ModalSelector from 'react-native-modal-selector';

export const StyledModalSelector = styled(ModalSelector)`
  width: 100%;
  border: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.light};
  border-radius: 20;
  margin: ${props => props.theme.margin.small} 0;
`;
