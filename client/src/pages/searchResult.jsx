import React from "react";

const SearchResults = () => (
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
                            <a href="https://gambolthemes.net/cdn-cgi/l/email-protection" className="__cf_email__">
                              [email&#160;protected]
                            </a>
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
                        <li className="breadcrumb-item active" aria-current="page">Search Results</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="titleright">
                  <div className="explore_search">
                    <div className="ui search focus">
                      <div className="ui left icon input swdh11 swdh15">
                        <input className="prompt srch_explore" type="text" placeholder="Search" />
                        <i className="uil uil-search-alt icon icon2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title126">
                <h2>Search Results</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sa4d25 mb4d25">
        <div className="container">
          <div className="row justify-content-between">
            {/* Filters Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="section3125 hstry142">
                <div className="result_stitles">
                  <div className="rs6t_title">Filters</div>
                  <div className="filter_selector">
                    <div className="ui inline dropdown flt145">
                      <div className="text">Sort</div>
                      <i className="dropdown icon"></i>
                      <div className="menu">
                        <div className="item">Most Relevant</div>
                        <div className="item">Most Reviewed</div>
                        <div className="item">Highest Rated</div>
                        <div className="item">Newest</div>
                        <div className="item">Lowest Price</div>
                        <div className="item">Highest Price</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Filter Accordions (static structure) */}
                <div className="tb_145">
                  {/* Each filter panel */}
                  {/* ...copy and paste each filter panel as per your HTML... */}
                  {/* For brevity, only one shown here; repeat others as in your HTML */}
                  <div className="panel-group accordion" id="accordionfilter">
                    {/* ... all filter panels ... */}
                  </div>
                </div>
              </div>
            </div>
            {/* Results List */}
            <div className="col-lg-9 col-md-8">
              <div className="_14d25 mb-20">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mhs_title">5 Results</h4>
                    {/* Course result cards */}
                    {[
                      {
                        img: "images/courses/img-1.jpg",
                        badge: "Bestseller",
                        reviews: 4.5,
                        timer: "25 hours",
                        views: "109k views",
                        ago: "15 days ago",
                        title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
                        category: "Web Development | Python",
                        author: "John Doe",
                        price: "$10"
                      },
                      {
                        img: "images/courses/img-2.jpg",
                        badge: "Bestseller",
                        reviews: 4.5,
                        timer: "28 hours",
                        views: "5M views",
                        ago: "15 days ago",
                        title: "The Complete JavaScript Course 2020: Build Real Projects!",
                        category: "Development | JavaScript",
                        author: "Jassica William",
                        price: "$5"
                      },
                      {
                        img: "images/courses/img-3.jpg",
                        badge: "Bestseller",
                        reviews: 4.5,
                        timer: "12 hours",
                        views: "1M views",
                        ago: "18 days ago",
                        title: "Beginning C++ Programming - From Beginner to Beyond",
                        category: "Development | C++",
                        author: "Joginder Singh",
                        price: "$13"
                      },
                      {
                        img: "images/courses/img-4.jpg",
                        badge: "Bestseller",
                        reviews: 5.0,
                        timer: "1 hours",
                        views: "153k views",
                        ago: "3 months ago",
                        title: "The Complete Digital Marketing Course - 12 Courses in 1",
                        category: "Digital Marketing | Marketing",
                        author: "Poonam Verma",
                        price: "$12"
                      }
                    ].map((course, idx) => (
                      <div className={`fcrse_1${idx > 0 ? " mt-30" : ""}`} key={course.title}>
                        <a href="course_detail_view.html" className="hf_img">
                          <img src={course.img} alt="" />
                          <div className="course-overlay">
                            <div className="badge_seller">{course.badge}</div>
                            <div className="crse_reviews">
                              <i className="uil uil-star"></i>{course.reviews}
                            </div>
                            <span className="play_btn1"><i className="uil uil-play"></i></span>
                            <div className="crse_timer">{course.timer}</div>
                          </div>
                        </a>
                        <div className="hs_content">
                          <div className="eps_dots eps_dots10 more_dropdown">
                            <a href="#"><i className="uil uil-ellipsis-v"></i></a>
                            <div className="dropdown-content">
                              <span><i className="uil uil-share-alt"></i>Share</span>
                              <span><i className="uil uil-heart"></i>Save</span>
                              <span><i className="uil uil-ban"></i>Not Interested</span>
                              <span><i className="uil uil-windsock"></i>Report</span>
                            </div>
                          </div>
                          <div className="vdtodt">
                            <span className="vdt14">{course.views}</span>
                            <span className="vdt14">{course.ago}</span>
                          </div>
                          <a href="course_detail_view.html" className="crse14s title900">{course.title}</a>
                          <a href="#" className="crse-cate">{course.category}</a>
                          <div className="auth1lnkprce">
                            <p className="cr1fot">By <a href="#">{course.author}</a></p>
                            <div className="prce142">{course.price}</div>
                            <button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="main-loader mt-50">
                      <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Results List */}
          </div>
        </div>
      </div>
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

export default SearchResults;
