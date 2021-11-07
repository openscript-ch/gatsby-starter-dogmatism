import { css, Theme } from '@emotion/react';
import LanguageSelector from './LanguageSelector';
import MainNavigation from './MainNavigation';

const headerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: ${theme.secondaryColor};
`;

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header css={headerStyle}>
      {title}
      <MainNavigation />
      <LanguageSelector />
    </header>
  );
}
