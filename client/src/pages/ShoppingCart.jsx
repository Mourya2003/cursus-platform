import React from "react";

const ShoppingCart = () => (
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
                      <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="title126">
              <h2>Shopping Cart</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Cart Content */}
    <div className="mb4d25">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="fcrse_1">
              <a href="/course_detail_view" className="hf_img">
                <img className="cart_img" src="/images/courses/img-2.jpg" alt="" />
              </a>
              <div className="hs_content">
                <div className="eps_dots eps_dots10 more_dropdown">
                  <a href="#"><i className="uil uil-times"></i></a>
                </div>
                <a href="/course_detail_view" className="crse14s title900 pt-2">The Web Developer Bootcamp</a>
                <a href="#" className="crse-cate">Web Development | Python</a>
                <div className="auth1lnkprce">
                  <p className="cr1fot">By <a href="#">John Doe</a></p>
                  <div className="prce142">$10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="membership_chk_bg rght1528">
              <div className="checkout_title">
                <h4>Total</h4>
                <img src="/images/line.svg" alt="" />
              </div>
              <div className="order_dt_section">
                <div className="order_title">
                  <h4>Orignal Price</h4>
                  <div className="order_price">$15</div>
                </div>
                <div className="order_title">
                  <h6>Discount Price</h6>
                  <div className="order_price">$5</div>
                </div>
                <div className="order_title">
                  <h2>Total</h2>
                  <div className="order_price5">$10</div>
                </div>
                <div className="coupon_code">
                  <p>Learn now is applied.</p>
                  <div className="coupon_input">
                    <div className="ui search focus mt-15">
                      <div className="ui left icon input swdh11 swdh19">
                        <input className="prompt srch_explore" type="text" name="couponcode" maxLength="6" placeholder="Enter Coupon Code" />
                      </div>
                      <button className="code-apply-btn" type="submit">Apply</button>
                    </div>
                  </div>
                </div>
                <a href="#" className="chck-btn22">Checkout Now</a>
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

export default ShoppingCart;