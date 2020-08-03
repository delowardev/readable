import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    // auth.createUserWithEmailAndPassword(email, password)
    
    auth.signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response);
    }).catch((error) => {
      console.log(error.message);
    })
  }

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
            <div className="form">
              <div className="input-wrap">
                <input
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  onChange={_handleEmail}
                />
              </div>
              <div className="input-wrap">
                <input 
                  type="password" 
                  name="password" 
                  placeholder="********" 
                  onChange={_handlePassword} 
                />
              </div>
              <button 
                className="button is-primary is-block" 
                type="submit"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
