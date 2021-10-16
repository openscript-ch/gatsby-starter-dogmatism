import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { IntlProvider } from 'react-intl';
import { PluginOptions } from '../types';

type Params1 = Parameters<GatsbyBrowser['wrapPageElement']>
type Params2 = Parameters<GatsbySSR['wrapPageElement']>
type Return1 = ReturnType<GatsbyBrowser['wrapPageElement']>
type Return2 = ReturnType<GatsbySSR['wrapPageElement']>
type WrapPageElement = (args: Params1[0] | Params2[0], options: PluginOptions) => Return1 | Return2;

export const wrapPageElement: WrapPageElement = ({ element, props }, options) => {
  const context = props.pageContext;
  const currentLocale = (context['locale'] as string) ?? options.defaultLocale;
  const currentMessages = options.locales.find((l) => l.locale === currentLocale).messages;
  return (
    <IntlProvider defaultLocale={options.defaultLocale} locale={currentLocale} messages={currentMessages}>
      {element}
    </IntlProvider>
  );
};
