import React from 'react';
import { IntlProvider } from 'react-intl';
import { SitePageContext, WrapPageElement } from '../types';
import I18nHead from './components/I18nHead';

export const PageContext = React.createContext<SitePageContext>({});

export const wrapPageElement: WrapPageElement = ({ element, props }, options) => {
  const pageContext = props.pageContext;
  const currentLocale = (pageContext['locale'] as string) ?? options.defaultLocale;
  const currentMessages = options.locales.find(l => l.locale === currentLocale)?.messages;

  if (currentMessages) {
    // Inject language names of all available languages into current messages
    options.locales.forEach(l => (currentMessages[`languages.${l.locale}`] = l.messages['language']));
  }

  return (
    <PageContext.Provider value={{ currentLocale }}>
      <IntlProvider defaultLocale={options.defaultLocale} locale={currentLocale} messages={currentMessages}>
        <I18nHead currentLocale={currentLocale} />
        {element}
      </IntlProvider>
    </PageContext.Provider>
  );
};
