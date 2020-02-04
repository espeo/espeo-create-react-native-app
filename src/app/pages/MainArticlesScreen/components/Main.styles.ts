import { styled } from '@styles/themes';
import { FlatList } from 'react-native';

export const MainWrapper = styled.View``;

export const ArticlesWrapper = styled.View`
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ArticlesFlatList = styled(FlatList)`
  background-color: ${props => props.theme.colors.primary};
`;
