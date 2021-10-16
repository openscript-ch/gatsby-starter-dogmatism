import { GatsbyNode } from "gatsby";
import { PluginOptions } from "../../gatsby-node";
import { translatePagePaths } from "../utils/path";

type onCreatePageParameters = Parameters<GatsbyNode['onCreatePage']>;
type onCreatePage = (args: onCreatePageParameters[0], options?: PluginOptions) => ReturnType<GatsbyNode['onCreatePage']>;

export const translatePage: onCreatePage = async ({page, actions}, options) => {
  const { createPage, deletePage } = actions;
  const paths = translatePagePaths(page.path, options);

  deletePage(page);

  paths.forEach((path) => {
    const alternativeLanguagePaths = paths.filter((p) => p.locale !== path.locale);
    const context = { ...page.context, locale: path.locale, alternativeLanguagePaths };
    createPage({ ...page, path: path.path, context });
  });
}
