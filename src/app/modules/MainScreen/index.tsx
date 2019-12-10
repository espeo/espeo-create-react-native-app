import { NavigationParams } from 'react-navigation';
import MainScreen from './MainScreen';

export default {
  module: MainScreen,
  name: 'MainScreen',
  options: ({ navigation }: NavigationParams) => ({
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
  }),
};
