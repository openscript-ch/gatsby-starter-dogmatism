jest.mock('fs/promises');

import { PluginOptions } from '../../types';
import { translateNode } from './translateNode';
import fs from 'fs/promises';

describe('translateNode', () => {
  it('should create nodes with translation information', async () => {
    const createNodeField = jest.fn();
    fs.readdir = jest.fn().mockReturnValue(['page.en.md', 'page.zh-CN.md']);

    const node = {
      parent: '1',
      internal: {
        type: 'MarkdownRemark',
      },
      frontmatter: {
        title: '',
      },
    };

    const parentNode = {
      name: 'page.de.md',
      relativeDirectory: '/content/pages',
      absolutePath: '/tmp/project/content/pages',
    };

    const args: any = {
      getNode: jest.fn().mockReturnValue(parentNode),
      node,
      actions: {
        createNodeField,
      },
    };

    const options: PluginOptions = {
      defaultLocale: `en-US`,
      locales: [
        {
          locale: `en-US`,
          prefix: `en`,
          slugs: {},
          messages: {},
        },
        {
          locale: `de-CH`,
          prefix: `de`,
          slugs: {},
          messages: {},
        },
        {
          locale: `zh-CN`,
          prefix: `zh`,
          slugs: {},
          messages: {},
        },
      ],
      plugins: [],
    };

    await translateNode(args, options);
    expect(createNodeField).toHaveBeenCalledWith({ node, name: 'locale', value: 'de-CH' });
  });
});
