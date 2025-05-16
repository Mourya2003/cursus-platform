import React from "react";

const CertificationStartForm = () => (
  <div className="wrapper _bg4586 _new89">
    {/* Header */}
    <header className="header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="back_link">
              <a href="/" className="hde151">Back To Cursus</a>
              <a href="/" className="hde152">Back</a>
            </div>
            <div className="ml_item">
              <div className="main_logo main_logo15" id="logo">
                <a href="/"><img src="/images/logo.svg" alt="" /></a>
                <a href="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></a>
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
                            <a href="mailto:email@protected">[email&#160;protected]</a>
                          </span>
                        </div>
                      </div>
                      <a href="/my_instructor_profile_view" className="dp_link_12">View Instructor Profile</a>
                    </div>
                    <div className="night_mode_switch__btn">
                      <a href="#" id="night-mode" className="btn-night-mode">
                        <i className="uil uil-moon"></i> Night mode
                        <span className="btn-night-mode-switch">
                          <span className="uk-switch-button"></span>
                        </span>
                      </a>
                    </div>
                    <a href="/instructor_dashboard" className="item channel_item">Cursus Dashboard</a>
                    <a href="/sign_in" className="item channel_item">Sign Out</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Breadcrumb and Title */}
    <div className="_215b15">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title125">
              <div className="titleleft">
                <div className="ttl121">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/certification_center">Certification Center</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Certification Fill Form</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="titleright">
                <a href="/certification_center" className="blog_link">
                  <i className="uil uil-angle-double-left"></i>Back to Certification Center
                </a>
              </div>
            </div>
            <div className="title126">
              <h2>Certification Fill Form</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Certification Form */}
    <div className="faq1256">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-6 col-md-8">
            <div className="certi_form">
              <div className="sign_form">
                <h2>Fill in before you start:</h2>
                <form>
                  <div className="ui search focus mt-40">
                    <div className="ui left icon input swdh11 swdh19">
                      <input className="prompt srch_explore" type="text" name="fullname" required maxLength="64" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="ui search focus mt-15">
                    <div className="ui left icon input swdh11 swdh19">
                      <input className="prompt srch_explore" type="email" name="emailaddress" required maxLength="64" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="ui search focus mt-15">
                    <div className="ui left icon input swdh11 swdh19">
                      <input className="prompt srch_explore" type="text" name="phonenumber" required maxLength="10" placeholder="Phone Number" />
                    </div>
                  </div>
                  {/* Category Accordion */}
                  <div className="category_cop">
                    <h4>Select Category</h4>
                    <div className="panel-groupaccordion" id="accordiontest">
                      {/* Development */}
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingOne">
                          <div className="panel-title10">
                            <a className="collapsed" data-toggle="collapse" data-target="#collapseOne" href="#" aria-expanded="false" aria-controls="collapseOne">
                              Development
                            </a>
                          </div>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" aria-labelledby="headingOne" data-parent="#accordiontest">
                          <div className="panel-body">
                            <div className="ui form">
                              <div className="grouped fields">
                                {["WordPress", "HTML CSS", "Full Time", "MotoCMS 3", "Joomla", "Full Time", "OpenCart", "Joomla Pro", "WordPress Pro", "WordPress Elementor", "WordPress Elementor Pro", "PrestaShop"].map((item, idx) => (
                                  <div className="field fltr-radio" key={item + idx}>
                                    <div className="ui radio checkbox">
                                      <input type="radio" name="development" tabIndex="0" className="hidden" />
                                      <label>{item}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Finance & Accounting */}
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingTwo">
                          <div className="panel-title10">
                            <a className="collapsed" data-toggle="collapse" data-target="#collapseTwo" href="#" aria-expanded="false" aria-controls="collapseTwo">
                              Finance & Accounting
                            </a>
                          </div>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" aria-labelledby="headingTwo" data-parent="#accordiontest">
                          <div className="panel-body">
                            <div className="ui form">
                              <div className="grouped fields">
                                {["Accounting", "Finance Fundamentals", "Bookkeeping", "Political Science", "Finance", "Cryptocurrency"].map((item, idx) => (
                                  <div className="field fltr-radio" key={item + idx}>
                                    <div className="ui radio checkbox">
                                      <input type="radio" name="finance" tabIndex="0" className="hidden" />
                                      <label>{item}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Design */}
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingThree">
                          <div className="panel-title10">
                            <a className="collapsed" data-toggle="collapse" data-target="#collapseThree" href="#" aria-expanded="false" aria-controls="collapseThree">
                              Design
                            </a>
                          </div>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" aria-labelledby="headingThree" data-parent="#accordiontest">
                          <div className="panel-body">
                            <div className="ui form">
                              <div className="grouped fields">
                                {["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe InDesign", "Unity", "Drawing", "Game Development Fundamentals", "3D Modeling", "Motion Graphics", "2D Animation", "T-Shirt Design"].map((item, idx) => (
                                  <div className="field fltr-radio" key={item + idx}>
                                    <div className="ui radio checkbox">
                                      <input type="radio" name="design" tabIndex="0" className="hidden" />
                                      <label>{item}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Marketing */}
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingfour">
                          <div className="panel-title10">
                            <a className="collapsed" data-toggle="collapse" data-target="#collapsefour" href="#" aria-expanded="false" aria-controls="collapsefour">
                              Marketing
                            </a>
                          </div>
                        </div>
                        <div id="collapsefour" className="panel-collapse collapse" aria-labelledby="headingfour" data-parent="#accordiontest">
                          <div className="panel-body">
                            <div className="ui form">
                              <div className="grouped fields">
                                {["Google Ads (Adwords)", "Google Ads (AdWords) Certification", "Social Marketing", "Email Marketing", "Business Strategy", "SEO", "PPC Advertising", "Blogging"].map((item, idx) => (
                                  <div className="field fltr-radio" key={item + idx}>
                                    <div className="ui radio checkbox">
                                      <input type="radio" name="marketing" tabIndex="0" className="hidden" />
                                      <label>{item}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Teaching & Academics */}
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingfive">
                          <div className="panel-title10">
                            <a className="collapsed" data-toggle="collapse" data-target="#collapsefive" href="#" aria-expanded="false" aria-controls="collapsefive">
                              Teaching & Academics
                            </a>
                          </div>
                        </div>
                        <div id="collapsefive" className="panel-collapse collapse" aria-labelledby="headingfive" data-parent="#accordiontest">
                          <div className="panel-body">
                            <div className="ui form">
                              <div className="grouped fields">
                                {["Math", "Humanities", "Engineering", "Science", "Social Science", "English Language", "German Language", "Sign Language", "French Language", "Spanish Language", "English Grammar", "IELTS"].map((item, idx) => (
                                  <div className="field fltr-radio" key={item + idx}>
                                    <div className="ui radio checkbox">
                                      <input type="radio" name="teaching" tabIndex="0" className="hidden" />
                                      <label>{item}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="testtrm145">
                    By signing up, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a>.
                  </p>
                  <button className="login-btn" type="submit">Lets Go</button>
                </form>
                <p className="questrm145">
                  Please be ready to answer <span>20 questions</span> within <span>1 hours</span>.
                </p>
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
              <a href="/about_us">About</a>
              <a href="/our_blog">Blog</a>
              <a href="/career">Careers</a>
              <a href="/press">Press</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f1">
              <a href="/help">Help</a>
              <a href="/coming_soon">Advertise</a>
              <a href="/coming_soon">Developers</a>
              <a href="/contact_us">Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f1">
              <a href="/terms_of_use">Copyright Policy</a>
              <a href="/terms_of_use">Terms</a>
              <a href="/terms_of_use">Privacy Policy</a>
              <a href="/sitemap">Sitemap</a>
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
                      {/* Language items omitted for brevity */}
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
                      <a href="/">
                        <div className="footer_logo">
                          <img src="/images/logo1.svg" alt="" />
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
);

export default CertificationStartForm;