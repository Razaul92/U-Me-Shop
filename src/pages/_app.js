import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <title>Amazon</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
