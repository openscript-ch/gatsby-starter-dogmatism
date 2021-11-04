import { GatsbyNode } from 'gatsby';
import { CreateWikiPages } from './src/gatsby/createPages/createWikiPages';

const node: GatsbyNode = {
  createPages: async args => {
    await CreateWikiPages(args);
  },
  onCreateNode: async args => {},
};

export default node;
