import React from "react";
import NavbarComponent from "../components/Router/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import { SessionProvider } from "next-auth/react";

const AppComponent = ({
  Component,
  pageProps: { session: session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <NavbarComponent />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default AppComponent;
