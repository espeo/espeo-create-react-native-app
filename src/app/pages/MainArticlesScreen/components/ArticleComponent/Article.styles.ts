import { styled } from '@styles/themes/defaultTheme';
import { Text } from '@styles/components';

export const ArticleWrapper = styled.View`
  width: 100%;
  padding: 0 ${props => props.theme.padding.large};
  margin: ${props => props.theme.margin.large} 0;
`;

export const ArticleMetaDataWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${props => props.theme.margin.medium} 0
    ${props => props.theme.margin.small} 0;
`;

export const ArticleImage = styled.Image`
  width: 100%;
  height: 200;
`;

export const ArticleMetaTitle = styled(Text)`
  font-size: ${props => props.theme.font.size.small};
  color: ${props => props.theme.colors.grey};
`;

export const ArticleTitle = styled(Text)`
  color: ${props => props.theme.colors.secondary};
  margin: ${props => props.theme.margin.small} 0
    ${props => props.theme.margin.medium} 0;
`;

export const ArticleDescription = styled(Text)`
  font-size: ${props => props.theme.font.size.small};
  margin: ${props => props.theme.margin.small} 0
    ${props => props.theme.margin.medium} 0;
`;
