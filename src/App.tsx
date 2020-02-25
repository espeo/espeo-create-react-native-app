import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@styles/themes/defaultTheme';
import { AppWrapper } from '@styles/components/containers';
import { NavigationStructure } from '@pages/index';
import { rootStore } from './app/store';

const translationsEn = require('@assets/i18n/en.json');

interface Translations {
  en: any;
}

const locale = 'en';

const translations: Translations = {
  en: translationsEn,
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={rootStore}>
        <IntlProvider locale={locale} messages={translations[locale]}>
          <ThemeProvider theme={defaultTheme}>
            <AppWrapper>
              <NavigationStructure />
            </AppWrapper>
          </ThemeProvider>
        </IntlProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
