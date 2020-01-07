import MainScreenModule from './MainScreen';
import ProfileScreenModule from './ProfileScreen';

import { NavigationStructureTypes } from '../shared/types/navigation';

export const navigationStructure: NavigationStructureTypes = {
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
