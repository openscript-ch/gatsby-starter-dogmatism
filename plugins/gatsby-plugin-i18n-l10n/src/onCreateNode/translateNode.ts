import { FileSystemNode } from 'gatsby-source-filesystem';
import { onCreateNode } from '../../types';
import convertToSlug from 'limax';
import { addLocalePrefix } from '../utils/path';
import { findClosestLocale } from '../utils/i18n';

export const translateNode: onCreateNode = async ({ getNode, node, actions }, options) => {
  const { createNodeField } = actions;

  if ((node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') && node.parent) {
    const fileSystemNode = getNode(node.parent);
    const { name, relativeDirectory } = fileSystemNode as FileSystemNode;
    const nameMatch = name.match(/^(\w+)(.+)?\.(\w+)$/);
    const filename = nameMatch && nameMatch[1] ? nameMatch[1] : name;
    const estimatedLocale = nameMatch && nameMatch[3] ? nameMatch[3] : options.defaultLocale;
    const locale = findClosestLocale(
      estimatedLocale,
      options.locales.map(l => l.locale)
    );
    const { title } = node['frontmatter'] as { title?: string };
    const slug = title ? convertToSlug(title) : filename;
    const kind = relativeDirectory.split('/')[0] || '';

    const localeOption = options.locales.find(l => l.locale === locale);
    let path = addLocalePrefix(`/${relativeDirectory}/${slug}`, locale, localeOption.prefix, options.defaultLocale);
    if (kind) {
      path = path.replace(`/${kind}`, localeOption.slugs[`/${kind}`] || `/${kind}`);
    }

    createNodeField({ node, name: 'locale', value: locale });
    createNodeField({ node, name: 'filename', value: filename });
    createNodeField({ node, name: 'kind', value: kind });
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'path', value: path });
  }
};
