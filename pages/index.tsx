import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>FUDY</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <h1>hello</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;