import React from "react";

const SignUp = () => (
  <div className="sign_in_up_bg">
    <div className="container">
      <div className="row justify-content-lg-center justify-content-md-center">
        <div className="col-lg-12">
          <div className="main_logo25" id="logo">
            <a href="/"><img src="/images/logo.svg" alt="" /></a>
            <a href="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-8">
          <div className="sign_form">
            <h2>Welcome!</h2>
            <p>Sign Up and Start Learning!</p>
            <button className="social_lnk_btn color_btn_fb"><i className="uil uil-facebook-f"></i>Continue with Facebook</button>
            <button className="social_lnk_btn mt-15 color_btn_tw"><i className="uil uil-twitter"></i>Continue with Twitter</button>
            <button className="social_lnk_btn mt-15 color_btn_go"><i className="uil uil-google"></i>Continue with Google</button>
            <form>
              <div className="ui search focus mt-15">
                <div className="ui left icon input swdh95">
                  <input className="prompt srch_explore" type="text" name="fullname" id="id_fullname" required maxLength="64" placeholder="Full Name" />
                  <i className="uil uil-user icon icon2"></i>
                </div>
              </div>
              <div className="ui search focus mt-15">
                <div className="ui left icon input swdh95">
                  <input className="prompt srch_explore" type="email" name="emailaddress" id="id_email" required maxLength="64" placeholder="Email Address" />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
              </div>
              <div className="ui search focus mt-15">
                <div className="ui left icon input swdh95">
                  <input className="prompt srch_explore" type="password" name="password" id="id_password" required maxLength="64" placeholder="Password" />
                  <i className="uil uil-key-skeleton-alt icon icon2"></i>
                </div>
              </div>
              <button className="login-btn" type="submit">Sign Up</button>
            </form>
            <p className="sgntrm145">Or <a href="/sign_in">Sign In</a> to your account.</p>
          </div>
          <div className="sign_footer">
            <img src="/images/sign_logo.png" alt="" />© 2020 <strong>Cursus</strong>. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;