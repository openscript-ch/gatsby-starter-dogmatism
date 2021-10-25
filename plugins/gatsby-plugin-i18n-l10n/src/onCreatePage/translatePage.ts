import { onCreatePage } from '../../types';
import { translatePagePaths } from '../utils/path';

export const translatePage: onCreatePage = async ({ page, actions }, options) => {
  const { createPage, deletePage } = actions;
  if (options) {
    const paths = translatePagePaths(page.path, options);

    deletePage(page);

    paths.forEach(path => {
      const alternativeLanguagePaths = paths.filter(p => p.locale !== path.locale);
      const context = { ...page.context, locale: path.locale, alternativeLanguagePaths };
      createPage({ ...page, path: path.path, context });
    });
  }
};
