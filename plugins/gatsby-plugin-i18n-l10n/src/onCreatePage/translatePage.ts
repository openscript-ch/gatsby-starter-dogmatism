import { CreatePageArgs } from "gatsby";
import { translatePagePaths } from "../utils/path";

export async function translatePage<TContext = Record<string, unknown>>(args: CreatePageArgs<TContext>) {
  const { page, actions } = args;
  const { createPage, deletePage } = actions;
  const paths = translatePagePaths(page.path);

  deletePage(page);

  paths.forEach((path) => {
    const alternativeLanguagePaths = paths.filter((p) => p.language !== path.language);
    const context = { ...page.context, language: path.language, alternativeLanguagePaths };
    createPage({ ...page, path: path.path, context });
  });
}
