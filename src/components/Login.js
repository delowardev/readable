import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleOnEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="row no-gutters">
        <div className="col">
          <div
            className="login-bg"
            style={{ backgroundImage: `url(images/login-bg-XkKCui44iM0.jpg)` }}
          ></div>
        </div>
        <div className="col-auto">
          <div className="login-form">
            <div className="login-form-header">
              <h3>Join over 10 million readers from around the world!</h3>
            </div>
            <form>
              <div className="input-wrap">
                <input
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  onChange={_handleOnEmail}
                />
              </div>
              <div className="input-wrap">
                <input type="password" name="password" placeholder="********" />
              </div>
              <button className="button is-primary is-block" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
