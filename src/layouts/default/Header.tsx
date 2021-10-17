import { css, Theme } from '@emotion/react';

const headerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 6rem;
  font-size: 2rem;
  background-color: ${theme.secondaryColor};
`;

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return <header css={headerStyle}>{title}</header>;
}
