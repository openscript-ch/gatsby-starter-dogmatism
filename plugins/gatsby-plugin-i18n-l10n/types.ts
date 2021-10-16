import { GatsbyBrowser, GatsbyNode, GatsbySSR, PluginOptions as GatsbyPluginOptions } from "gatsby";

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

type GatsbyBrowserWrapPageElementParams = Parameters<GatsbyBrowser['wrapPageElement']>
type GatsbySSRWrapPageElementParams = Parameters<GatsbySSR['wrapPageElement']>
type GatsbyBrowserWrapPageElementReturnType = ReturnType<GatsbyBrowser['wrapPageElement']>
type GatsbySSRWrapPageElementReturnType = ReturnType<GatsbySSR['wrapPageElement']>
export type WrapPageElement = (args: GatsbyBrowserWrapPageElementParams[0] | GatsbySSRWrapPageElementParams[0], options: PluginOptions) => GatsbyBrowserWrapPageElementReturnType | GatsbySSRWrapPageElementReturnType;