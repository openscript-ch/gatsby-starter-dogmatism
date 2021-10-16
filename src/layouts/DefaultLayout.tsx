import { css, Global, Theme, ThemeProvider } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { DefaultLayoutQuery } from '../../graphql-types';
import { defaultTheme } from '../themes/defaultTheme';
import { Footer } from './default/Footer';
import { Header } from './default/Header';

const query = graphql`
  query DefaultLayout {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`;

const globalStyles = css`
  html {
    height: 100%;
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper,
  main {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

type DefaultLayoutProps = PropsWithChildren<{
  theme?: Theme;
}>;

export function DefaultLayout({ children, theme }: DefaultLayoutProps) {
  const data = useStaticQuery<DefaultLayoutQuery>(query);

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <Global styles={globalStyles} />
      <Header title={data.site?.siteMetadata?.title || ''} />
      <main>{children}</main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
