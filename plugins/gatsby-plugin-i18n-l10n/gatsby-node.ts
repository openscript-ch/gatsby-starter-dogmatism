import { PluginOptionsSchemaArgs } from "gatsby";

export function pluginOptionsSchema({Joi}: PluginOptionsSchemaArgs) {
  return Joi.object({
    defaultLocale: Joi.string().description('Sets the default locale')
  })
}