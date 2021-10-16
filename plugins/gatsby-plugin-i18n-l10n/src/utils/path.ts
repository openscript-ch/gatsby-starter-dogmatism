import { PluginOptions } from '../../gatsby-node';

export const trimRightSlash = (path: string) => {
  return path === '/' ? path : path.replace(/\/$/, '');
};

export const addLocalePrefix = (path: string, locale: string, defaultLocale: string) => {
  return locale !== defaultLocale ? `/${locale}${path}` : path;
};

export const translatePagePaths = (path: string, options: PluginOptions) => {
  return options.locales.map((locale) => {
    const trimmedPath = trimRightSlash(path);
    const newPath = locale.slugs[trimmedPath] ?? trimmedPath;

    return {locale: locale.locale, path: addLocalePrefix(newPath, locale.locale, options.defaultLocale)}
  })
};
