import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  return (
    <>
      <header className="header clearfix">
        <button type="button" id="toggleMenu" className="toggle_menu">
          <i className="uil uil-bars"></i>
        </button>
        <button id="collapse_menu" className="collapse_menu">
          <i className="uil uil-bars collapse_menu--icon"></i>
          <span className="collapse_menu--label"></span>
        </button>
        <div className="main_logo" id="logo">
          <a href="index.html">
            <img src="images/logo.svg" alt="" />
          </a>
          <a href="index.html">
            <img className="logo-inverse" src="images/ct_logo.svg" alt="" />
          </a>
        </div>
        <div className="top-category">
          <div className="ui compact menu cate-dpdwn">
            <div className="ui simple dropdown item">
              <a href="#" className="option_links p-0" title="categories">
                <i className="uil uil-apps"></i>
              </a>
              <div className="menu dropdown_category5">
                {[
                  "Development",
                  "Business",
                  "Finance & Accounting",
                  "IT & Software",
                  "Office Productivity",
                  "Personal Development",
                  "Design",
                  "Marketing",
                  "Lifestyle",
                  "Photography",
                  "Health & Fitness",
                  "Music",
                  "Teaching & Academics",
                ].map((category) => (
                  <a key={category} href="#" className="item channel_item">
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="search120">
          <div className="ui search">
            <div className="ui left icon input swdh10">
              <input
                className="prompt srch10"
                type="text"
                placeholder="Search for Tuts Videos, Tutors, Tests and more.."
              />
              <i className="uil uil-search-alt icon icon1"></i>
            </div>
          </div>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <a href="create_new_course.html" className="upload_btn" title="Create New Course">
                Create New Course
              </a>
            </li>
            <li>
              <a href="shopping_cart.html" className="option_links" title="cart">
                <i className="uil uil-shopping-cart-alt"></i>
                <span className="noti_count">2</span>
              </a>
            </li>
            <li className="ui dropdown">
              <a href="#" className="option_links" title="Messages">
                <i className="uil uil-envelope-alt"></i>
                <span className="noti_count">3</span>
              </a>
              <div className="menu dropdown_ms">
                {[
                  {
                    img: "images/left-imgs/img-6.jpg",
                    name: "Zoena Singh",
                    message:
                      "Hi! Sir, How are you. I ask you one thing please explain it this video price.",
                    time: "2 min ago",
                  },
                  {
                    img: "images/left-imgs/img-5.jpg",
                    name: "Joy Dua",
                    message: "Hello, I paid you video tutorial but did not play error 404.",
                    time: "10 min ago",
                  },
                  {
                    img: "images/left-imgs/img-8.jpg",
                    name: "Jass",
                    message: "Thanks Sir, Such a nice video.",
                    time: "25 min ago",
                  },
                ].map(({ img, name, message, time }, i) => (
                  <a key={i} href="#" className="channel_my item">
                    <div className="profile_link">
                      <img src={img} alt="" />
                      <div className="pd_content">
                        <h6>{name}</h6>
                        <p>{message}</p>
                        <span className="nm_time">{time}</span>
                      </div>
                    </div>
                  </a>
                ))}
                <a className="vbm_btn" href="instructor_messages.html">
                  View All <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="ui dropdown">
              <a href="#" className="option_links" title="Notifications">
                <i className="uil uil-bell"></i>
                <span className="noti_count">3</span>
              </a>
              <div className="menu dropdown_mn">
                {[
                  {
                    img: "images/left-imgs/img-1.jpg",
                    name: "Rock William",
                    message: (
                      <>
                        Like Your Comment On Video <strong>How to create sidebar menu</strong>.
                      </>
                    ),
                    time: "2 min ago",
                  },
                  {
                    img: "images/left-imgs/img-2.jpg",
                    name: "Jassica Smith",
                    message: (
                      <>
                        Added New Review In Video <strong>Full Stack PHP Developer</strong>.
                      </>
                    ),
                    time: "12 min ago",
                  },
                  {
                    img: "images/left-imgs/img-9.jpg",
                    name: "",
                    message: (
                      <>
                        Your Membership Approved <strong>Upload Video</strong>.
                      </>
                    ),
                    time: "20 min ago",
                  },
                ].map(({ img, name, message, time }, i) => (
                  <a key={i} href="#" className="channel_my item">
                    <div className="profile_link">
                      <img src={img} alt="" />
                      <div className="pd_content">
                        {name && <h6>{name}</h6>}
                        <p>{message}</p>
                        <span className="nm_time">{time}</span>
                      </div>
                    </div>
                  </a>
                ))}
                <a className="vbm_btn" href="instructor_notifications.html">
                  View All <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </li>
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
                        <a
                          href="https://gambolthemes.net/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="cbacaaa6a9a4a7f2fff88baca6aaa2a7e5a8a4a6"
                        >
                          [email&#160;protected]
                        </a>
                      </span>
                    </div>
                  </div>
                  <a href="my_instructor_profile_view.html" className="dp_link_12">
                    View Instructor Profile
                  </a>
                </div>
                <div className="night_mode_switch__btn">
                  <a href="#" id="night-mode" className="btn-night-mode">
                    <i className="uil uil-moon"></i> Night mode
                    <span className="btn-night-mode-switch">
                      <span className="uk-switch-button"></span>
                    </span>
                  </a>
                </div>
                <a href="instructor_dashboard.html" className="item channel_item">
                  Cursus dashboard
                </a>
                <a href="membership.html" className="item channel_item">
                  Paid Memberships
                </a>
                <a href="setting.html" className="item channel_item">
                  Setting
                </a>
                <a href="help.html" className="item channel_item">
                  Help
                </a>
                <a href="feedback.html" className="item channel_item">
                  Send Feedback
                </a>
                <a href="sign_in.html" className="item channel_item">
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <nav className="vertical_nav">
        <div className="left_section menu_left" id="js-menu">
          <div className="left_section">
            <ul>
              {[
                { href: "instructor_dashboard.html", icon: "uil-apps", label: "Dashboard" },
                { href: "instructor_courses.html", icon: "uil-book-alt", label: "Courses" },
                { href: "instructor_analyics.html", icon: "uil-analysis", label: "Analyics" },
                { href: "create_new_course.html", icon: "uil-plus-circle", label: "Create Course" },
                { href: "instructor_message.html", icon: "uil-envelope-alt", label: "Messages" },
                { href: "help.html", icon: "uil-question-circle", label: "Help" },
                { href: "setting.html", icon: "uil-cog", label: "Setting" },
                { href: "feedback.html", icon: "uil-comment-alt-message", label: "Send Feedback" },
                { href: "sign_in.html", icon: "uil-sign-out-alt", label: "Sign Out" },
              ].map(({ href, icon, label }) => (
                <li key={label} className={label === "Help" ? "active" : ""}>
                  <a href={href} className="menu_item">
                    <span>
                      <i className={`uil ${icon}`}></i>
                    </span>
                    <span className="menu_title">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <div className="sa4d25">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="st_title">
                  <i className="uil uil-star"></i> Instructor Reviews
                </h2>
                <div className="review_resent">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="review_item">
                      <div className="live_user_dt">
                        <div className="live_user_thumb">
                          <img
                            src="images/left-imgs/img-7.jpg"
                            alt=""
                            className="circle-img"
                          />
                        </div>
                        <div className="live_user_name">
                          <h4>Daniel Med</h4>
                          <span>12th March 2020</span>
                        </div>
                      </div>
                      <div className="live_user_rating">
                        <ul className="review_star">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="uil uil-star"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>Really good explained with clear presentation.</p>
                    </div>
                  ))}
                </div>
                <a href="#" className="more_reviews">
                  More Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReviews;
