import React from 'react';
import { styled } from '@styles/themes/defaultTheme';

interface StyledButtonProps {
  onPress(): void;
  title: string;
}

const StyledButton = ({ onPress, title }: StyledButtonProps): JSX.Element => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  min-height: 35;
  background-color: ${props => props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.margin.medium} 0;
  padding: ${props => props.theme.padding.small} 0;
`;

const ButtonText = styled.Text`
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.colors.light};
  text-transform: uppercase;
`;

export default StyledButton;
