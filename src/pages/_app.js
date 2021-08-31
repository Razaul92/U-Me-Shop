import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const NetStatus = dynamic(() => import("../components/NetStatus"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }) => {
  const [status, setStatus] = useState();

  const myStatus = (val) => {
    setStatus(val);
  };

  console.log("myStatus", status);
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          {status ? (
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          ) : (
            <link rel="shortcut icon" href="favicon2.ico" type="image/x-icon" />
          )}
        </Head>
        <NetStatus onStatus={myStatus} />
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
