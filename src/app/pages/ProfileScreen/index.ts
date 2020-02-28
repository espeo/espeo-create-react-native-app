import { injectIntl } from 'react-intl';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@core/pages';
import { RouteNames } from '@core/common/types/navigation';
import { ProfileScreen } from './ProfileScreen';

export interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.ProfileScreen>;
}

export default injectIntl(ProfileScreen);
