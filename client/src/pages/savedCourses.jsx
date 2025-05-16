import React from "react";
// import "./style.css"; // Import your CSS as needed

const SavedCourses = () => (
  <>
    <header className="header clearfix">
      <button type="button" id="toggleMenu" className="toggle_menu">
        <i className="uil uil-bars"></i>
      </button>
      <button id="collapse_menu" className="collapse_menu">
        <i className="uil uil-bars collapse_menu--icon "></i>
        <span className="collapse_menu--label"></span>
      </button>
      <div className="main_logo" id="logo">
        <a href="index.html"><img src="images/logo.svg" alt="" /></a>
        <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
      </div>
      <div className="top-category">
        <div className="ui compact menu cate-dpdwn">
          <div className="ui simple dropdown item">
            <a href="#" className="option_links p-0" title="categories">
              <i className="uil uil-apps"></i>
            </a>
            <div className="menu dropdown_category5">
              {/* Categories */}
              {["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography", "Health & Fitness", "Music", "Teaching & Academics"].map(cat => (
                <a href="#" className="item channel_item" key={cat}>{cat}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="search120">
        <div className="ui search">
          <div className="ui left icon input swdh10">
            <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
            <i className="uil uil-search-alt icon icon1"></i>
          </div>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>
            <a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a>
          </li>
          <li>
            <a href="shopping_cart.html" className="option_links" title="cart">
              <i className="uil uil-shopping-cart-alt"></i>
              <span className="noti_count">2</span>
            </a>
          </li>
          {/* Messages dropdown */}
          <li className="ui dropdown">
            <a href="#" className="option_links" title="Messages">
              <i className="uil uil-envelope-alt"></i>
              <span className="noti_count">3</span>
            </a>
            <div className="menu dropdown_ms">
              {/* ...messages... */}
              <a className="vbm_btn" href="instructor_messages.html">
                View All <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </li>
          {/* Notifications dropdown */}
          <li className="ui dropdown">
            <a href="#" className="option_links" title="Notifications">
              <i className="uil uil-bell"></i>
              <span className="noti_count">3</span>
            </a>
            <div className="menu dropdown_mn">
              {/* ...notifications... */}
              <a className="vbm_btn" href="instructor_notifications.html">
                View All <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </li>
          {/* Account dropdown */}
          <li className="ui dropdown">
            <a href="#" className="opts_account" title="Account">
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
              <a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>
              <a href="membership.html" className="item channel_item">Paid Memberships</a>
              <a href="setting.html" className="item channel_item">Setting</a>
              <a href="help.html" className="item channel_item">Help</a>
              <a href="feedback.html" className="item channel_item">Send Feedback</a>
              <a href="sign_in.html" className="item channel_item">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    </header>

    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            <li className="menu--item">
              <a href="index.html" className="menu--link" title="Home">
                <i className="uil uil-home-alt menu--icon"></i>
                <span className="menu--label">Home</span>
              </a>
            </li>
            {/* ...other menu items... */}
            <li className="menu--item">
              <a href="saved_courses.html" className="menu--link active" title="Saved Courses">
                <i className="uil uil-heart-alt menu--icon"></i>
                <span className="menu--label">Saved Courses</span>
              </a>
            </li>
            {/* ...other menu items... */}
          </ul>
        </div>
        <div className="left_section">
          <h6 className="left_title">SUBSCRIPTIONS</h6>
          <ul>
            <li className="menu--item">
              <a href="instructor_profile_view.html" className="menu--link user_img">
                <img src="images/left-imgs/img-1.jpg" alt="" />
                Rock Smith
                <div className="alrt_dot"></div>
              </a>
            </li>
            <li className="menu--item">
              <a href="instructor_profile_view.html" className="menu--link user_img">
                <img src="images/left-imgs/img-2.jpg" alt="" />
                Jassica William
              </a>
              <div className="alrt_dot"></div>
            </li>
            <li className="menu--item">
              <a href="all_instructor.html" className="menu--link" title="Browse Instructors">
                <i className="uil uil-plus-circle menu--icon"></i>
                <span className="menu--label">Browse Instructors</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            <li className="menu--item">
              <a href="setting.html" className="menu--link" title="Setting">
                <i className="uil uil-cog menu--icon"></i>
                <span className="menu--label">Setting</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="help.html" className="menu--link" title="Help">
                <i className="uil uil-question-circle menu--icon"></i>
                <span className="menu--label">Help</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="report_history.html" className="menu--link" title="Report History">
                <i className="uil uil-windsock menu--icon"></i>
                <span className="menu--label">Report History</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="feedback.html" className="menu--link" title="Send Feedback">
                <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                <span className="menu--label">Send Feedback</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="left_footer">
          <ul>
            <li><a href="about_us.html">About</a></li>
            <li><a href="press.html">Press</a></li>
            <li><a href="contact_us.html">Contact Us</a></li>
            <li><a href="coming_soon.html">Advertise</a></li>
            <li><a href="coming_soon.html">Developers</a></li>
            <li><a href="terms_of_use.html">Copyright</a></li>
            <li><a href="terms_of_use.html">Privacy Policy</a></li>
            <li><a href="terms_of_use.html">Terms</a></li>
          </ul>
          <div className="left_footer_content">
            <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </nav>

    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 ">
              <div className="section3125 hstry142">
                <div className="grp_titles pt-0">
                  <div className="ht_title">Saved Courses</div>
                  <a href="#" className="ht_clr">Remove All</a>
                </div>
                <div className="tb_145">
                  <div className="wtch125">
                    <span className="vdt14">4 Courses</span>
                  </div>
                  <a href="#" className="rmv-btn"><i className="uil uil-trash-alt"></i>Remove Saved Courses</a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="_14d25 mb-20">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mhs_title">Saved Courses</h4>
                    {/* Saved Courses List */}
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
                            <span className="play_btn1">
                              <i className="uil uil-play"></i>
                            </span>
                            <div className="crse_timer">{course.timer}</div>
                          </div>
                        </a>
                        <div className="hs_content">
                          <div className="eps_dots eps_dots10 more_dropdown">
                            <a href="#"><i className="uil uil-ellipsis-v"></i></a>
                            <div className="dropdown-content">
                              <span><i className="uil uil-times"></i>Remove</span>
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
                            <button className="shrt-cart-btn" title="cart">
                              <i className="uil uil-shopping-cart-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Saved Courses List */}
                  </div>
                </div>
              </div>
            </div>
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
                        {/* ...languages... */}
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
                        <p>© 2020 <strong>Edututs+</strong>. All Rights Reserved.</p>
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

export default SavedCourses;
