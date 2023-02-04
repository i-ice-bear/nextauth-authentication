import React from "react";
import NavbarComponent from "../components/Router/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
};

export default AppComponent;
