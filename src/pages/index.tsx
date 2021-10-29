import { graphql } from 'gatsby';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';

type IndexPageProps = {
  data: IndexPageQuery;
};

export default function IndexPage({ data }: IndexPageProps) {
  return <DefaultLayout>{data.slogans?.html}</DefaultLayout>;
}

export const query = graphql`
  query IndexPage($locale: String) {
    slogans: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*slogan*" } }) {
      html
    }
  }
`;
