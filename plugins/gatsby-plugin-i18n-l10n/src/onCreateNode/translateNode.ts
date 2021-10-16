import { FileSystemNode } from 'gatsby-source-filesystem';
import { onCreateNode } from '../../types';

export const translateNode: onCreateNode = async ({ getNode, node, actions }, options) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' && node.parent) {
    const fileSystemNode = getNode(node.parent);
    const { name } = fileSystemNode as FileSystemNode;
    const nameMatch = name.match(/^(\w+)(.+)?\.(\w+)$/);
    const filename = nameMatch && (nameMatch[1] ?? name);
    const locale = nameMatch && (nameMatch[3] ?? options.defaultLocale);
    console.log(locale);

    createNodeField({ node, name: 'locale', value: locale });
    createNodeField({ node, name: 'filename', value: filename });
  }
};
