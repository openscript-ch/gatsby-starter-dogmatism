import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GenericPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function GenericPage({ data }: PageProps<GenericPageQuery>) {
  return (
    <DefaultLayout>
      <MDXRenderer>{data.mdx?.body || ''}</MDXRenderer>
    </DefaultLayout>
  );
}

export const query = graphql`
  query GenericPage($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`;
