import { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const IndexPage: NextPage = () => (
  <div className="login-page">
    <Head>
      <title>Login - Readable</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Login />
  </div>
);

export default IndexPage;
