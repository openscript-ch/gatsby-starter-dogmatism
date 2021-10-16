import { css, Theme } from '@emotion/react';

const headerStyle = (theme: Theme) => css`
  height: 2rem;
  background-color: ${theme.secondaryColor};
`;

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  return <header css={headerStyle}>{title}</header>;
}
