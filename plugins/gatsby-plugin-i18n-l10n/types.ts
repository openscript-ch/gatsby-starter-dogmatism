import { GatsbyNode, PluginOptions as GatsbyPluginOptions } from "gatsby";

type onCreatePageParameters = Parameters<GatsbyNode['onCreatePage']>;
export type onCreatePage = (args: onCreatePageParameters[0], options?: PluginOptions) => ReturnType<GatsbyNode['onCreatePage']>;

export type PluginOptions = {
  defaultLocale: string;
  locales: {
    locale: string;
    prefix: string;
    slugs: Record<string, string>;
    messages: Record<string, string>;
  }[]
} & GatsbyPluginOptions;