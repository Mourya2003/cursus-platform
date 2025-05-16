import React from "react";
// import "./style.css"; // Add your stylesheets as needed

const OurBlog = () => (
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
                            <a href="https://gambolthemes.net/cdn-cgi/l/email-protection" className="__cf_email__">[email&#160;protected]</a>
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
      <div className="_215cd2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div className="nav nav-tabs tab_crse  justify-content-center">
                    <a className="nav-item nav-link" href="about_us.html">About</a>
                    <a className="nav-item nav-link active" href="our_blog.html">Blog</a>
                    <a className="nav-item nav-link" href="company_details.html">Company</a>
                    <a className="nav-item nav-link" href="career.html">Careers</a>
                    <a className="nav-item nav-link" href="press.html">Press</a>
                  </div>
                </nav>
              </div>
              <div className="title129 mt-35 mb-35">
                <h2>Insights, ideas, and stories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_205ef5">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-5">
              <div className="fcrse_3 mt-50">
                <ul className="blogleft12">
                  <li>
                    <div className="explore_search blg152">
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh15">
                          <input className="prompt srch_explore" type="text" placeholder="Search" />
                          <i className="uil uil-search-alt icon icon2"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#collapse1" className="category-topics cate-right collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapse1">Labels</a>
                    <div className="collapse" id="collapse1" style={{}}>
                      <ul className="category-card">
                        <li>
                          <a href="#" className="category-item1 active">All</a>
                          <a href="#" className="category-item1">Students</a>
                          <a href="#" className="category-item1">Instructors</a>
                          <a href="#" className="category-item1">Ideas & Opinions</a>
                          <a href="#" className="category-item1">Edututs+ News</a>
                          <a href="#" className="category-item1">Social Innovation</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#collapse2" className="category-topics cate-right collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse2">Archive</a>
                    <div className="collapse" id="collapse2" style={{}}>
                      <ul className="category-card">
                        <li>
                          <a href="#" className="category-item1">January 2020</a>
                          <a href="#" className="category-item1">February 2020</a>
                          <a href="#" className="category-item1">March 2020</a>
                          <a href="#" className="category-item1">April 2020</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="socl148">
                      <button className="twiter158" data-href="#" id="twitter-share">
                        <i className="uil uil-twitter ic45"></i>Follow
                      </button>
                      <button className="facebook158" data-href="#" id="facebook-share">
                        <i className="uil uil-facebook ic45"></i>Follow
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="help_link">
                      <p>Learn More</p>
                      <a href="#">Cursus Help Center</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Blog Posts */}
            <div className="col-lg-9 col-md-7">
              <div className="blogbg_1 mt-50">
                <a href="blog_single_view.html" className="hf_img">
                  <img src="images/blog/img-1.jpg" alt="" />
                  <div className="course-overlay"></div>
                </a>
                <div className="hs_content">
                  <div className="vdtodt">
                    <span className="vdt14">109k views</span>
                    <span className="vdt14">March 10, 2020</span>
                  </div>
                  <a href="blog_single_view.html" className="crse14s title900">Blog Title Here</a>
                  <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.</p>
                  <a href="blog_single_view.html" className="view-blog-link">Read More<i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
              {/* Repeat for each blog */}
              <div className="blogbg_1 mt-30">
                <a href="blog_single_view.html" className="hf_img">
                  <img src="images/blog/img-2.jpg" alt="" />
                  <div className="course-overlay"></div>
                </a>
                <div className="hs_content">
                  <div className="vdtodt">
                    <span className="vdt14">109k views</span>
                    <span className="vdt14">March 10, 2020</span>
                  </div>
                  <a href="blog_single_view.html" className="crse14s title900">Blog Title Here</a>
                  <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor interdum mollis arcu interdum mollis arcu.</p>
                  <a href="blog_single_view.html" className="view-blog-link">Read More<i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
              <div className="blogbg_1 mt-30">
                <a href="blog_single_view.html" className="hf_img">
                  <img src="images/blog/img-3.jpg" alt="" />
                  <div className="course-overlay"></div>
                </a>
                <div className="hs_content">
                  <div className="vdtodt">
                    <span className="vdt14">109k views</span>
                    <span className="vdt14">March 10, 2020</span>
                  </div>
                  <a href="blog_single_view.html" className="crse14s title900">Blog Title Here</a>
                  <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor interdum mollis arcu.</p>
                  <a href="blog_single_view.html" className="view-blog-link">Read More<i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
              <div className="blogbg_1 mt-30">
                <a href="blog_single_view.html" className="hf_img">
                  <img src="images/blog/img-4.jpg" alt="" />
                  <div className="course-overlay"></div>
                </a>
                <div className="hs_content">
                  <div className="vdtodt">
                    <span className="vdt14">109k views</span>
                    <span className="vdt14">March 10, 2020</span>
                  </div>
                  <a href="blog_single_view.html" className="crse14s title900">Blog Title Here</a>
                  <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor interdum mollis arcu.</p>
                  <a href="blog_single_view.html" className="view-blog-link">Read More<i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
              {/* Pagination */}
              <div className="main-p-pagination">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">PREV</a>
                    </li>
                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">24</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">NEXT</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* End Blog Posts */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
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

export default OurBlog;
