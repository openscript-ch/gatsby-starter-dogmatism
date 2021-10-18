import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function IndexPage() {
  return <DefaultLayout>Index page</DefaultLayout>;
}

export const query = graphql`
  query IndexPage($locale: String) {
    sections: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*welcome*" } }) {
      html
    }
  }
`;
