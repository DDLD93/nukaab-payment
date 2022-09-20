import Head from "next/head";
import ThemesProvider from "../../themes/providers";

function Layout({ children }: any) {
  return (
    <>
        <Head>
          <title>Nukaab Payment</title>
          <meta name="description" content="Nukaab bill payments" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemesProvider>{children}</ThemesProvider>
    </>
  );
}

export default Layout;
