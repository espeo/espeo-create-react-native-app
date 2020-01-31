import { NavigationStructureProps } from '@core/common/types/navigation';
import { MainScreenModule } from './MainArticlesScreen';
import { ProfileScreenModule } from './ProfileScreen';

export const navigationStructure: NavigationStructureProps = {
  [MainScreenModule.name]: {
    screen: MainScreenModule.module,
    navigationOptions: MainScreenModule.options,
  },
  [ProfileScreenModule.name]: {
    screen: ProfileScreenModule.module,
    navigationOptions: ProfileScreenModule.options,
  },
};

export default {
  MainScreenModule,
  ProfileScreenModule,
};
