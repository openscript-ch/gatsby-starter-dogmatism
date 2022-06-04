import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery, SitePageContext>) {
  return (
    <DefaultLayout>
      <MDXRenderer>{data.slogans?.body || ''}</MDXRenderer>
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($locale: String) {
    slogans: mdx(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*slogan*" } }) {
      body
    }
  }
`;
