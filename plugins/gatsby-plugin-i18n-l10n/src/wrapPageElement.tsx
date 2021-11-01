import { IntlProvider } from 'react-intl';
import { WrapPageElement } from '../types';
import I18nHead from './components/I18nHead';

export const wrapPageElement: WrapPageElement = ({ element, props }, options) => {
  const context = props.pageContext;
  const currentLocale = (context['locale'] as string) ?? options.defaultLocale;
  const currentMessages = options.locales.find(l => l.locale === currentLocale)?.messages;

  if (currentMessages) {
    // Inject language names of all available languages into current messages
    options.locales.forEach(l => (currentMessages[`languages.${l.locale}`] = l.messages['language']));
  }

  return (
    <IntlProvider defaultLocale={options.defaultLocale} locale={currentLocale} messages={currentMessages}>
      <I18nHead currentLocale={currentLocale} />
      {element}
    </IntlProvider>
  );
};
