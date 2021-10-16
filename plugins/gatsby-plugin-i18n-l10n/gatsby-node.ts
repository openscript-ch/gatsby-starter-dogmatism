import { GatsbyNode } from 'gatsby';
import { translateNode } from './src/onCreateNode/translateNode';
import { translatePage } from './src/onCreatePage/translatePage';
import { PluginOptions } from './types';

const node: GatsbyNode = {
  pluginOptionsSchema: ({ Joi }) => {
    return Joi.object({
      defaultLocale: Joi.string().description('Sets the default locale'),
      locales: Joi.array()
        .required()
        .items(
          Joi.object({
            locale: Joi.string().required().description('Defines the a locale.'),
            prefix: Joi.string().required().description('Defines the corresponding url prefix.'),
            slugs: Joi.object().required().description('Contains the translated slugs.'),
            messages: Joi.object().required().description('Contains the translated messages.'),
          })
        ),
    });
  },

  onCreateNode: async (args, options: PluginOptions) => {
    await translateNode(args, options);
  },

  onCreatePage: async (args, options: PluginOptions) => {
    await translatePage(args, options);
  },
};

export default node;
