import { Link } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';

type LocalizedLinkProps = React.PropsWithChildren<{
  className?: string;
  to: string;
}>;

export default function LocalizedLink({ to, children, className }: LocalizedLinkProps) {
  const intl = useIntl();
  const getSlug = () => (intl.messages[to] ? intl.formatMessage({ id: to }) : to);
  const localizedPath = to !== '/' ? getSlug() : '/';
  const prefixedPath = intl.defaultLocale === intl.locale ? localizedPath : `/${intl.locale}${localizedPath}`;
  return (
    <Link to={prefixedPath} className={className} activeClassName="active" partiallyActive={true}>
      {children}
    </Link>
  );
}
