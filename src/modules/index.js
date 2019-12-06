import MainScreenModule from './MainScreen';
import ProfileModule from './MainScreen';

export const navigationStructure = {
  [MainScreenModule.name]: {
    screen: MainScreenModule.module,
    navigationOptions: MainScreenModule.options,
  },
  [ProfileModule.name]: {
    screen: ProfileModule.module,
    navigationOptions: ProfileModule.options,
  },
};

export default {
  MainScreenModule,
  ProfileModule,
};
