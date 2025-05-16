import React from "react";
// Import CSS files as needed, e.g.:
// import './style.css';

const PaidMembershipPage = () => (
  <>
    <header className="header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="back_link">
              <a href="index.html" className="hde151">Back To Cursus</a>
              <a href="index.html" className="hde152">Back</a>
            </div>
            <div className="ml_item">
              <div className="main_logo main_logo15" id="logo">
                <a href="index.html"><img src="images/logo.svg" alt="" /></a>
                <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
              </div>
            </div>
            <div className="header_right pr-0">
              <ul>
                <li className="ui top right pointing dropdown">
                  <a href="#" className="opts_account">
                    <img src="images/hd_dp.jpg" alt="" />
                  </a>
                  <div className="menu dropdown_account">
                    <div className="channel_my">
                      <div className="profile_link">
                        <img src="images/hd_dp.jpg" alt="" />
                        <div className="pd_content">
                          <div className="rhte85">
                            <h6>Joginder Singh</h6>
                            <div className="mef78" title="Verify">
                              <i className="uil uil-check-circle"></i>
                            </div>
                          </div>
                          <span>
                            <a href="mailto:email@protected" className="__cf_email__">[email&#160;protected]</a>
                          </span>
                        </div>
                      </div>
                      <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>
                    </div>
                    <div className="night_mode_switch__btn">
                      <a href="#" id="night-mode" className="btn-night-mode">
                        <i className="uil uil-moon"></i> Night mode
                        <span className="btn-night-mode-switch">
                          <span className="uk-switch-button"></span>
                        </span>
                      </a>
                    </div>
                    <a href="instructor_dashboard.html" className="item channel_item">Cursus Dashboard</a>
                    <a href="sign_in.html" className="item channel_item">Sign Out</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="wrapper _bg4586 _new89">
      <div className="_215b15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title125">
                <div className="titleleft">
                  <div className="ttl121">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Paid Membership</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="title126">
                <h2>Paid Membership</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="memb4d25">
        <div className="container">
          <div className="row">
            {/* Baby Plan */}
            <div className="col-md-6">
              <div className="membership_bg">
                <div className="membership_title">
                  <div className="membership__left">
                    <h2>Baby Plan</h2>
                    <div className="memmbership_price">$49/month</div>
                    <div className="save_price">Save $79 when paid annually</div>
                  </div>
                  <div className="membership__right">
                    <img src="images/membership/icon-1.svg" alt="" />
                  </div>
                </div>
                <div className="membership_des">
                  <p>For instructors launching their first digital products.</p>
                </div>
                <div className="panel-group accordion" id="accordion0">
                  {/* Repeat for each plan feature */}
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingOne">
                      <div className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-target="#collapseOne" href="#" aria-expanded="false" aria-controls="collapseOne">
                          <i className="uil uil-check chck_icon"></i>Your own shop
                        </a>
                      </div>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion0">
                      <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
                    </div>
                  </div>
                  {/* ...repeat similar structure for other features */}
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingTwo">
                      <div className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-target="#collapseTwo" href="#" aria-expanded="false" aria-controls="collapseTwo">
                          <i className="uil uil-check chck_icon"></i>Online courses
                        </a>
                      </div>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion0">
                      <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
                    </div>
                  </div>
                  {/* ...continue for all plan details ... */}
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingThree">
                      <div className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-target="#collapseThree" href="#" aria-expanded="false" aria-controls="collapseThree">
                          <i className="uil uil-check chck_icon"></i>Email marketing
                        </a>
                      </div>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion0">
                      <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                    </div>
                  </div>
                  {/* ...other panels ... */}
                  <div className="panel panel-default-1">
                    <div className="panel-heading">
                      <div className="panel-title-1">
                        <a className="collapsed">
                          <i className="uil uil-times chck_icon_1"></i>Memberships
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* ...continue as per HTML structure */}
                </div>
                <button className="prmb_btn">Purchase Membership</button>
              </div>
            </div>
            {/* Business Plan */}
            <div className="col-md-6">
              <div className="membership_bg">
                <div className="membership_title">
                  <div className="membership__left">
                    <h2>Business Plan</h2>
                    <div className="memmbership_price">$99/month</div>
                    <div className="save_price">Save $189 when paid annually</div>
                  </div>
                  <div className="membership__right">
                    <img src="images/membership/icon-2.svg" alt="" />
                  </div>
                </div>
                <div className="membership_des">
                  <p>For instructors who are ready to grow their business.</p>
                </div>
                <div className="panel-group accordion" id="accordion1">
                  {/* Repeat similar to above for business plan features */}
                  {/* ... */}
                </div>
                <button className="prmb_btn">Purchase Membership</button>
              </div>
            </div>
          </div>
          {/* Membership FAQ */}
          <div className="row">
            <div className="col-lg-12">
              <div className="title589 mt-62">
                <h2>Membership FAQ</h2>
                <p>Wait, what about…</p>
              </div>
              <div className="membership_faq_bg">
                <div className="panel-group mt-4 accordion" id="accordion2">
                  {/* FAQ Items - repeat as per your HTML */}
                  <div className="panel panel-default">
                    <div className="panel-heading" id="headingOne2">
                      <div className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-target="#collapseOne2" href="#" aria-expanded="false" aria-controls="collapseOne2">
                          Is it easy to change plans?
                        </a>
                      </div>
                    </div>
                    <div id="collapseOne2" className="panel-collapse collapse" aria-labelledby="headingOne2" data-parent="#accordion2">
                      <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
                    </div>
                  </div>
                  {/* ...repeat for each FAQ ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <a href="about_us.html">About</a>
                <a href="our_blog.html">Blog</a>
                <a href="career.html">Careers</a>
                <a href="press.html">Press</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <a href="help.html">Help</a>
                <a href="coming_soon.html">Advertise</a>
                <a href="coming_soon.html">Developers</a>
                <a href="contact_us.html">Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <a href="terms_of_use.html">Copyright Policy</a>
                <a href="terms_of_use.html">Terms</a>
                <a href="terms_of_use.html">Privacy Policy</a>
                <a href="sitemap.html">Sitemap</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f3">
                <a href="#" className="btn1542">Teach on Cursus</a>
                <div className="lng_btn">
                  <div className="ui language bottom right pointing dropdown floating" id="languages" data-content="Select Language">
                    <a href="#"><i className="uil uil-globe lft"></i>Language<i className="uil uil-angle-down rgt"></i></a>
                    <div className="menu">
                      <div className="scrolling menu">
                        {/* Repeat for each language */}
                        <div className="item" data-percent="100" data-value="en" data-english="English">
                          <span className="description">English</span>
                          English
                        </div>
                        {/* ...other languages... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="footer_bottm">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="fotb_left">
                      <li>
                        <a href="index.html">
                          <div className="footer_logo">
                            <img src="images/logo1.svg" alt="" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="edu_social_links">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-google-plus-g"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default PaidMembershipPage;
