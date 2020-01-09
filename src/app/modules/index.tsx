import { MainScreenModule } from './MainScreen';
import { ProfileScreenModule } from './ProfileScreen';
import { NavigationStructureProps } from '../common/types/navigation';

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
