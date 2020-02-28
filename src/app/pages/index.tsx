import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from '@common/types/navigation';
import MainScreen from '@pages/MainArticlesScreen';
import ArticleScreen from '@pages/ArticleScreen';
import ProfileScreen from '@pages/ProfileScreen';
import { ArticleData } from '@core/pages/MainArticlesScreen/namespace';
import { NavigationTitle } from '@common/components';

export type RootStackParamList = {
  [RouteNames.MainScreen]: undefined;
  [RouteNames.ArticleScreen]: { article: ArticleData };
  [RouteNames.ProfileScreen]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStructure = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.MainScreen}
      screenOptions={{
        header: () => <NavigationTitle title="mainArticles.header" />,
        headerStyle: { height: 60 },
      }}
    >
      <Stack.Screen name={RouteNames.MainScreen} component={MainScreen} />
      <Stack.Screen name={RouteNames.ArticleScreen} component={ArticleScreen} />
      <Stack.Screen name={RouteNames.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
