import { GatsbyNode, PluginOptions as GatsbyPluginOptions } from "gatsby";
import { translatePage } from "./src/onCreatePage/translatePage";

export type PluginOptions = {
  defaultLocale: string;
  locales: {
    locale: string;
    urlSegment: string;
    slugs: Record<string, string>;
    messages: Record<string, string>;
  }[]
} & GatsbyPluginOptions;

const node: GatsbyNode = {
  pluginOptionsSchema: ({Joi}) => {
    return Joi.object({
      defaultLocale: Joi.string().description('Sets the default locale'),
      locales: Joi.array().required().items(Joi.object({
        locale: Joi.string().required().description('Defines the a locale.'),
        prefix: Joi.string().required().description('Defines the corresponding url prefix.'),
        slugs: Joi.object().required().description('Contains the translated slugs.'),
        messages: Joi.object().required().description('Contains the translated messages.')
      })),
    })
  },

  onCreatePage: async (args, options: PluginOptions) => {
    await translatePage(args, options);
  }
}

export default node;