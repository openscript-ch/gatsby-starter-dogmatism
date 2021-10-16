import { IntlProvider } from 'react-intl';
import { WrapPageElement } from '../types';
import I18nHead from './I18nHead';

export const wrapPageElement: WrapPageElement = ({ element, props }, options) => {
  const context = props.pageContext;
  const currentLocale = (context['locale'] as string) ?? options.defaultLocale;
  const currentMessages = options.locales.find((l) => l.locale === currentLocale).messages;
  return (
    <IntlProvider defaultLocale={options.defaultLocale} locale={currentLocale} messages={currentMessages}>
      <I18nHead currentLocale={currentLocale} />
      {element}
    </IntlProvider>
  );
};
