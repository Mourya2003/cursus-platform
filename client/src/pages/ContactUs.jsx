import React from "react";
import { Link } from "react-router-dom";

// If you want to add the map, install react-map-gl or use Mapbox GL JS in useEffect

const ContactUs = () => (
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
      <div className="_215b15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title125">
                <div className="titleleft">
                  <div className="ttl121">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="titleright">
                  <Link to="/" className="blog_link">
                    <i className="uil uil-angle-double-left"></i>Back to Home
                  </Link>
                </div>
              </div>
              <div className="title126">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Links */}
      <div className="contact1256">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Link to="/help" className="contact_link_step">
                <img src="/images/help_icon.svg" alt="" />
                <h4>Help Center</h4>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/our_blog" className="contact_link_step">
                <img src="/images/blog_icon.svg" alt="" />
                <h4>Blog</h4>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/career" className="contact_link_step">
                <img src="/images/career_icon.svg" alt="" />
                <h4>Careers</h4>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link to="/coming_soon" className="contact_link_step">
                <img src="/images/developer_icon.svg" alt="" />
                <h4>Developer Area</h4>
              </Link>
            </div>

            {/* Map and Contact Info */}
            <div className="col-lg-8">
              <div className="contact_map">
                {/* For a real map, use react-map-gl or Mapbox JS */}
                <div id="map" style={{ width: "100%", height: "300px", background: "#eee" }}>
                  {/* Map goes here */}
                  <p style={{ textAlign: "center", padding: "120px 0", color: "#aaa" }}>Map Placeholder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_info">
                <div className="checkout_title">
                  <h4>Contact Information</h4>
                  <img src="/images/line.svg" alt="" />
                </div>
                <ul className="contact_list_info">
                  <li>
                    <div className="txt_cntct">
                      <span className="cntct_895"><i className="uil uil-location-point"></i>Main Address :</span>
                      <p>#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India</p>
                    </div>
                  </li>
                  <li>
                    <div className="txt_cntct">
                      <span className="cntct_895"><i className="uil uil-envelope"></i>Email Address :</span>
                      <p><a href="mailto:email@protected" className="__cf_email__">[email&#160;protected]</a>@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="txt_cntct">
                      <span className="cntct_895"><i className="uil uil-mobile-android-alt"></i>Phone Number :</span>
                      <p>+911234567890, 01610000000</p>
                    </div>
                  </li>
                </ul>
                <div className="edututs_links_social">
                  <ul className="tutor_social_links">
                    <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End map and info */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-30">
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
                        {/* Add more languages as needed */}
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

export default ContactUs;

