import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => (
  <div className="coming_soon_style">
    <div className="wrapper coming_soon_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cmtk_group">
              <div className="ct-logo">
                <Link to="/">
                  <img src="/images/ct_logo.svg" alt="Cursus Logo" />
                </Link>
              </div>
              <div className="cmtk_dt">
                <h1 className="title_404">404</h1>
                <h4 className="thnk_title1">
                  The page you were looking for could not be found.
                </h4>
                <Link to="/" className="bk_btn">
                  Go To Homepage
                </Link>
              </div>
              <div className="tc_footer_main">
                <div className="tc_footer_left">
                  <ul>
                    <li><Link to="/about_us">About</Link></li>
                    <li><Link to="/press">Press</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                    <li><Link to="/coming_soon">Advertise</Link></li>
                    <li><Link to="/coming_soon">Developers</Link></li>
                    <li><Link to="/terms_of_use">Copyright</Link></li>
                    <li><Link to="/terms_of_use">Privacy Policy</Link></li>
                    <li><Link to="/terms_of_use">Terms</Link></li>
                  </ul>
                </div>
                <div className="tc_footer_right">
                  <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Error404;

