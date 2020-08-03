import { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => (
  <div className="login-page">
    <Head>
      <title>Login - Readable</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="login-container">
      <div className="row no-gutters">
        <div className="col">
          <div
            className="login-bg"
            style={{ backgroundImage: `url(images/login-bg-XkKCui44iM0.jpg)` }}
          ></div>
        </div>
        <div className="col-auto">
          <form className="login-form">
            <input type="email" placeholder="You email address" name="email" />
            <input type="password" name="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
