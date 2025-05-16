import React from "react";

const CertificationCenter = () => (
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

    {/* Certification Banner */}
    <div className="_215certibg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cert_banner_text">
              <h1>Certification Center</h1>
              <p>For Students and Instructors</p>
              <ul className="certi_icons">
                <li><a href="#" className="edttslogo"><img src="/images/logo1.svg" alt="" /></a></li>
                <li><div className="edttsplus"><img src="/images/cerificate_center/plus.svg" alt="" /></div></li>
                <li><a href="#" className="edttslogo1"><img src="/images/cerificate_center/certicon.svg" alt="" /></a></li>
              </ul>
              <button className="certi-btn" onClick={() => window.location.href = '/certification_start_form'}>Start Certification</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Find Certificate Form */}
    <div className="_215xd5">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-12">
              <div className="title889">
                <h2>Find Certificate</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ui search focus mt-30">
                <div className="ui left icon input swdh11 swdh19">
                  <input className="prompt srch_explore" type="text" name="cerificate[number]" maxLength="10" placeholder="# Number" required />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ui search focus mt-30">
                <div className="ui left icon input swdh11 swdh19">
                  <input className="prompt srch_explore" type="text" name="fullname" maxLength="64" placeholder="Full Name" required />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <select className="ui hj145 dropdown cntry152 prompt srch_explore mt-30">
                <option value="">Select Category</option>
                <option value="1">Development</option>
                <option value="2">Finance & Accounting</option>
                <option value="3">Design</option>
                <option value="4">Marketing</option>
                <option value="5">Teaching & Academics</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-6">
              <button className="login-btn" type="submit">Find Certificate</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    {/* Our Certification Tabs */}
    <div className="_215td5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title589">
              <h2>Our Certification</h2>
              <p>We prepared tests for the most popular categories and get cerificate</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="catey-tabs">
              <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-development-tab" data-toggle="pill" href="#pills-development" role="tab" aria-controls="pills-development" aria-selected="true">Development</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-accounting-tab" data-toggle="pill" href="#pills-accounting" role="tab" aria-controls="pills-accounting" aria-selected="false">Finance & Accounting</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-design-tab" data-toggle="pill" href="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false">Design</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-marketing-tab" data-toggle="pill" href="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false">Marketing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-teaching-tab" data-toggle="pill" href="#pills-teaching" role="tab" aria-controls="pills-teaching" aria-selected="false">Teaching & Academics</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {/* Development Tab */}
                <div className="tab-pane fade show active" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
                  <div className="certicates">
                    <div className="row">
                      {["WordPress", "HTML CSS", "MotoCMS 3", "Joomla", "OpenCart", "Joomla Pro", "WordPress Pro", "WordPress Elementor", "WordPress Elementor Pro", "PrestaShop"].map((item, idx) => (
                        <div className="col-md-3 col-sm-6" key={item}>
                          <a href="#" className="certilink__152">{item}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Accounting Tab */}
                <div className="tab-pane fade" id="pills-accounting" role="tabpanel" aria-labelledby="pills-accounting-tab">
                  <div className="certicates">
                    <div className="row">
                      {["Accounting", "Finance Fundamentals", "Bookkeeping", "Political Science", "Finance", "Cryptocurrency"].map((item, idx) => (
                        <div className="col-md-3 col-sm-6" key={item}>
                          <a href="#" className="certilink__152">{item}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Design Tab */}
                <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                  <div className="certicates">
                    <div className="row">
                      {["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe InDesign", "Unity", "Drawing", "Game Development Fundamentals", "3D Modeling", "Motion Graphics", "2D Animation", "T-Shirt Design"].map((item, idx) => (
                        <div className="col-md-3 col-sm-6" key={item}>
                          <a href="#" className="certilink__152">{item}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Marketing Tab */}
                <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab">
                  <div className="certicates">
                    <div className="row">
                      {["Google Ads (Adwords)", "Google Ads (AdWords) Certification", "Social Marketing", "Email Marketing", "Business Strategy", "SEO", "PPC Advertising", "Blogging"].map((item, idx) => (
                        <div className="col-md-3 col-sm-6" key={item}>
                          <a href="#" className="certilink__152">{item}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Teaching Tab */}
                <div className="tab-pane fade" id="pills-teaching" role="tabpanel" aria-labelledby="pills-teaching-tab">
                  <div className="certicates">
                    <div className="row">
                      {["Math", "Humanities", "Engineering", "Science", "Social Science", "English Language", "German Language", "Sign Language", "IELTS", "French Language", "Spanish Language", "English Grammar"].map((item, idx) => (
                        <div className="col-md-3 col-sm-6" key={item}>
                          <a href="#" className="certilink__152">{item}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Who Can Get Benefit */}
    <div className="_485td5">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-12">
            <div className="titleceti89">
              <h2>Who Can Get Benefit From This?</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6">
            <div className="who_get">
              <div className="who_img">
                <img src="/images/cerificate_center/student.svg" alt="" />
              </div>
              <h4>Students</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6">
            <div className="who_get">
              <div className="who_img">
                <img src="/images/cerificate_center/instructor.svg" alt="" />
              </div>
              <h4>Instructor</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* What Will You Get */}
    <div className="_215td5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-12">
            <div className="title589">
              <h2>What Will You Get?</h2>
              <p>Cursus company, which confirms your skills and knowledge of Certification</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="knowledge_dts">
              <p>Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula et. Nulla vehicula pharetra lacus ornare gravida. Vivamus mollis ullamcorper dui quis gravida. Aenean pulvinar pulvinar arcu a suscipit.</p>
              <button className="knowledge_btn" onClick={() => window.location.href = '#'}>Knowledge Base</button>
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

export default CertificationCenter;