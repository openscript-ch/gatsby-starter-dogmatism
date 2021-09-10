import React from "react";
import { PropsWithChildren } from "react"
import { Footer } from "./default/Footer";
import { Header } from "./default/Header";

type DefaultLayoutProps = PropsWithChildren<{}>;

export function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <div id="wrapper">
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}