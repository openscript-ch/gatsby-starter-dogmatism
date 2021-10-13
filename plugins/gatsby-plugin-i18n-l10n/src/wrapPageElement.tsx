import { GatsbyBrowser, GatsbySSR, PluginOptions } from 'gatsby';
import { IntlProvider } from 'react-intl';

type Params1 = Parameters<GatsbyBrowser['wrapPageElement']>
type Params2 = Parameters<GatsbySSR['wrapPageElement']>
type Return1 = ReturnType<GatsbyBrowser['wrapPageElement']>
type Return2 = ReturnType<GatsbySSR['wrapPageElement']>
type WrapPageElement = (args: Params1[0] | Params2[0], options: Params1[1] | Params2[1]) => Return1 | Return2;

export const wrapPageElement: WrapPageElement = ({ element }, options) => {
  console.log(options);
  return (
    <IntlProvider defaultLocale="" locale="en-us">
      {element}
    </IntlProvider>
  );
};
