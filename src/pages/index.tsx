import { graphql, PageProps } from 'gatsby';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function IndexPage({ children }: PageProps<IndexPageQuery, SitePageContext>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export const query = graphql`
  query IndexPage($locale: String) {
    slogans: mdx(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*slogan*" } }) {
      id
    }
  }
`;
