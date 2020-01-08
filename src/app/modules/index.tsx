import { MainScreenModule } from './MainScreen';
import { ProfileScreenModule } from './ProfileScreen';

export const navigationStructure = {
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
