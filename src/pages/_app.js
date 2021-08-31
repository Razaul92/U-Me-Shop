import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import { useState, useEffect } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const setOnline = () => {
      setStatus(true);
    };
    const setOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

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
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
