"use client"
import { Fragment } from "react";
import "../styles/globals.css"
import { ContextAuthProvider } from "../context/AuthContext";



function MyApp({ Component, pageProps, data }) {
  return (
    <Fragment>
      <ContextAuthProvider>
        <Component {...pageProps} />
      </ContextAuthProvider>
    </Fragment>
  );
}

export default MyApp;
