import React from 'react';
import { SitePageContext } from '../graphql-types';
import { WrapPageElement } from './types';

export const PageContext = React.createContext<SitePageContext>({});

export const wrapPageElement: WrapPageElement = ({ element, props }) => {
  return <PageContext.Provider value={props.pageContext}>{element}</PageContext.Provider>;
};
