import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/themes/defaultTheme';
import { AppWrapper } from '@styles/components/containers';

import Config from 'react-native-config';

import { navigationStructure } from '@pages/index';

import { rootStore } from './app/store';

const AppNavigator = createStackNavigator(navigationStructure);

const AppContainer = createAppContainer(AppNavigator);

const translationsEn = require('@assets/i18n/en');

interface Translations {
  en: any;
}

const locale = 'en';

const translations: Translations = {
  en: translationsEn,
};

alert(JSON.stringify(Config));

const App = () => {
  return (
    <Provider store={rootStore}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <ThemeProvider theme={defaultTheme}>
          <AppWrapper>
            <AppContainer />
          </AppWrapper>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
