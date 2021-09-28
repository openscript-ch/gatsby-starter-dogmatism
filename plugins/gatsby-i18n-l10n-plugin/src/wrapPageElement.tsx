import React from "react";
import { GatsbyBrowser, GatsbySSR } from "gatsby";

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

export const wrapPageElement: WrapPageElement = ({ element, props }: any) => {
  return <div {...props}>{element}</div>;
};
