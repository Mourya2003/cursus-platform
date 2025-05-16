import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Implement your password reset logic here
    alert("Password reset link sent to " + email);
    setEmail("");
  };

  return (
    <div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-12">
            <div className="main_logo25" id="logo">
              <Link to="/"><img src="/images/logo.svg" alt="Cursus Logo" /></Link>
              <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="Cursus Logo" /></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <h2>Request a Password Reset</h2>
              <form onSubmit={handleSubmit}>
                <div className="ui search focus mt-50">
                  <div className="ui left icon input swdh95">
                    <input
                      className="prompt srch_explore"
                      type="email"
                      name="emailaddress"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      id="id_email"
                      required
                      maxLength="64"
                      placeholder="Email Address"
                    />
                    <i className="uil uil-envelope icon icon2"></i>
                  </div>
                </div>
                <button className="login-btn" type="submit">Reset Password</button>
              </form>
              <p className="mb-0 mt-30">
                Go Back <Link to="/sign_up">Sign In</Link>
              </p>
            </div>
            <div className="sign_footer">
              <img src="/images/sign_logo.png" alt="Cursus" />© 2020 <strong>Cursus</strong>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

