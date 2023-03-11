import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        className="min-w-full min-h-screen space-y-10 py-10
        flex flex-col items-center"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
