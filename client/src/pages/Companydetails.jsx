import React from "react";
import { Link } from "react-router-dom"; // Remove if not using React Router

const CompanyPage = () => (
  <div>
    {/* Header */}
    <header className="header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="back_link">
              <Link to="/" className="hde151">Back To Cursus</Link>
              <Link to="/" className="hde152">Back</Link>
            </div>
            <div className="ml_item">
              <div className="main_logo main_logo15" id="logo">
                <Link to="/"><img src="/images/logo.svg" alt="" /></Link>
                <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></Link>
              </div>
            </div>
            <div className="header_right pr-0">
              <ul>
                <li className="ui top right pointing dropdown">
                  <a href="#" className="opts_account">
                    <img src="/images/hd_dp.jpg" alt="" />
                  </a>
                  <div className="menu dropdown_account">
                    <div className="channel_my">
                      <div className="profile_link">
                        <img src="/images/hd_dp.jpg" alt="" />
                        <div className="pd_content">
                          <div className="rhte85">
                            <h6>Joginder Singh</h6>
                            <div className="mef78" title="Verify">
                              <i className="uil uil-check-circle"></i>
                            </div>
                          </div>
                          <span>
                            <a href="mailto:email@protected" className="__cf_email__">
                              [email&#160;protected]
                            </a>
                          </span>
                        </div>
                      </div>
                      <Link to="/my_instructor_profile_view" className="dp_link_12">View Instructor Profile</Link>
                    </div>
                    <div className="night_mode_switch__btn">
                      <a href="#" id="night-mode" className="btn-night-mode">
                        <i className="uil uil-moon"></i> Night mode
                        <span className="btn-night-mode-switch">
                          <span className="uk-switch-button"></span>
                        </span>
                      </a>
                    </div>
                    <Link to="/instructor_dashboard" className="item channel_item">Cursus Dashboard</Link>
                    <Link to="/sign_in" className="item channel_item">Sign Out</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <div className="wrapper _bg4586 _new89">
      <div className="_215cd2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div className="nav nav-tabs tab_crse justify-content-center">
                    <Link className="nav-item nav-link" to="/about_us">About</Link>
                    <Link className="nav-item nav-link" to="/our_blog">Blog</Link>
                    <Link className="nav-item nav-link active" to="/company_details">Company</Link>
                    <Link className="nav-item nav-link" to="/career">Careers</Link>
                    <Link className="nav-item nav-link" to="/press">Press</Link>
                  </div>
                </nav>
              </div>
              <div className="title129 mt-35 mb-35">
                <h2>Expanding learning opportunities</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_215zd5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title484">
                <h2>Our Origins</h2>
                <img className="line-title" src="/images/line.svg" alt="" />
                <p>
                  Cursus was founded in 2020 by computer science instructor with a vision to provide anyone, anywhere with access to the world’s best education. Now many instructors put their courses online for anyone to take and taught more learners in a few months than they could over an entire lifetime in the classroom. Today, Cursus has expanded to reach more than 40 million people and 2,300 businesses around the world. On Cursus you can find online courses, instructors, and certificates from Cursus.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="story125">
                <img src="/images/about/company.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_215td5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title589 text-center">
                <h2>Our Offices</h2>
                <p>Cursus branches around the world</p>
                <img className="line-title" src="/images/line.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="branches_all">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="blogbg_1 mt-30">
                  <a href="#" className="cpy_img">
                    <img src="/images/about/company-1.jpg" alt="" />
                    <div className="course-overlay"></div>
                  </a>
                  <div className="cpy_content">
                    <a href="#" className="cmpy14s title900">Punjab, India</a>
                    <p className="blog_des">
                      #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India<br />
                      <a href="#" className="cmpylink"><i className="uil uil-phone"></i> 0161-1234567</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="blogbg_1 mt-30">
                  <a href="#" className="cpy_img">
                    <img src="/images/about/company-2.jpg" alt="" />
                    <div className="course-overlay"></div>
                  </a>
                  <div className="cpy_content">
                    <a href="#" className="cmpy14s title900">San Francisco, CA</a>
                    <p className="blog_des">
                      586 Lorem st. 5 floor,<br /> San Francisco, CA 94107<br />
                      <a href="#" className="cmpylink"><i className="uil uil-phone"></i> +1 415-1234567</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="blogbg_1 mt-30">
                  <a href="#" className="cpy_img">
                    <img src="/images/about/company-3.jpg" alt="" />
                    <div className="course-overlay"></div>
                  </a>
                  <div className="cpy_content">
                    <a href="#" className="cmpy14s title900">São Paulo, Brazil</a>
                    <p className="blog_des">
                      Lorem ipsum 589,<br /> Vila Madalena, São Paulo - SP 01443-010<br />
                      <a href="#" className="cmpylink"><i className="uil uil-phone"></i> +55-11-1234567</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/about_us">About</Link>
                <Link to="/our_blog">Blog</Link>
                <Link to="/career">Careers</Link>
                <Link to="/press">Press</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/help">Help</Link>
                <Link to="/coming_soon">Advertise</Link>
                <Link to="/coming_soon">Developers</Link>
                <Link to="/contact_us">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/terms_of_use">Copyright Policy</Link>
                <Link to="/terms_of_use">Terms</Link>
                <Link to="/terms_of_use">Privacy Policy</Link>
                <Link to="/sitemap">Sitemap</Link>
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
                        <div className="item"><span className="description">English</span>English</div>
                        <div className="item"><span className="description">Español</span>Spanish</div>
                        <div className="item"><span className="description">Français</span>French</div>
                        {/* Add more languages as desired */}
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
                        <Link to="/">
                          <div className="footer_logo">
                            <img src="/images/logo1.svg" alt="" />
                          </div>
                        </Link>
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
  </div>
);

export default CompanyPage;

