import { css, Theme } from '@emotion/react';

const footerStyle = (theme: Theme) => css`
  height: 2rem;
  background-color: ${theme.secondaryColor};
`;

export function Footer() {
  return <footer css={footerStyle}>Footer</footer>;
}
