import { NavigationParams } from 'react-navigation';
import ProfileScreen from './ProfileScreen';

export default {
  module: ProfileScreen,
  name: 'ProfileScreen',
  options: ({ navigation }: NavigationParams) => ({
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
  }),
};
