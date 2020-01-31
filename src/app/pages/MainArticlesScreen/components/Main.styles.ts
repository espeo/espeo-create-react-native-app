import { styled } from '@styles/themes';
import { Text } from '@styles/components';

export const MainTitle = styled(Text)`
  margin-bottom: 10;
`;

export const MainWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const MainScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ArticlesWrapper = styled.View`
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
