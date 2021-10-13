import React, { Fragment, PropsWithChildren } from "react";
import { Footer } from "./default/Footer";
import { Header } from "./default/Header";

type DefaultLayoutProps = PropsWithChildren<{}>;

export function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <Fragment>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </Fragment>
  )
}