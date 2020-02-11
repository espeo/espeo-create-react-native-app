import { NavigationStructureProps } from '@common/types/navigation';
import { MainScreenModule } from './MainArticlesScreen';
import { ProfileScreenModule } from './ProfileScreen';
import { ArticleScreenModule } from './ArticleScreen';

export const navigationStructure: NavigationStructureProps = {
  [MainScreenModule.name]: {
    screen: MainScreenModule.module,
    navigationOptions: MainScreenModule.options,
  },
  [ProfileScreenModule.name]: {
    screen: ProfileScreenModule.module,
    navigationOptions: ProfileScreenModule.options,
  },
  [ArticleScreenModule.name]: {
    screen: ArticleScreenModule.module,
    navigationOptions: ArticleScreenModule.options,
  },
};

export default {
  MainScreenModule,
  ProfileScreenModule,
  ArticleScreenModule,
};
