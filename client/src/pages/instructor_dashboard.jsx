import React from "react";

const Dashboard = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Gambolthemes" />
        <meta name="author" content="Gambolthemes" />
        <title>Cursus - Dashboard</title>
        <link rel="icon" type="image/png" href="images/fav.png" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500" rel="stylesheet" />
        <link href="vendor/unicons-2.0.1/css/unicons.css" rel="stylesheet" />
        <link href="css/vertical-responsive-menu1.min.css" rel="stylesheet" />
        <link href="css/instructor-dashboard.css" rel="stylesheet" />
        <link href="css/instructor-responsive.css" rel="stylesheet" />
        <link href="css/night-mode.css" rel="stylesheet" />
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link href="vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
        <link href="vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="vendor/semantic/semantic.min.css" />
      </head>

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

        {/* Category Dropdown */}
        <div className="top-category">
          <div className="ui compact menu cate-dpdwn">
            <div className="ui simple dropdown item">
              <a href="#!" className="option_links p-0" title="categories">
                <i className="uil uil-apps"></i>
              </a>
              <div className="menu dropdown_category5">
                {[
                  "Development", "Business", "Finance & Accounting", "IT & Software",
                  "Office Productivity", "Personal Development", "Design", "Marketing",
                  "Lifestyle", "Photography", "Health & Fitness", "Music", "Teaching & Academics"
                ].map((item, index) => (
                  <a href="#!" className="item channel_item" key={index}>{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
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

        {/* Header Right */}
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

            {/* Messages */}
            <li className="ui dropdown">
              <a href="#!" className="option_links" title="Messages">
                <i className="uil uil-envelope-alt"></i>
                <span className="noti_count">3</span>
              </a>
              <div className="menu dropdown_ms">
                {[
                  { name: "Zoena Singh", message: "Hi! Sir, How are you...", time: "2 min ago", img: "img-6.jpg" },
                  { name: "Joy Dua", message: "I paid you video tutorial but did not play...", time: "10 min ago", img: "img-5.jpg" },
                  { name: "Jass", message: "Thanks Sir, Such a nice video.", time: "25 min ago", img: "img-8.jpg" },
                ].map((msg, i) => (
                  <a href="#!" className="channel_my item" key={i}>
                    <div className="profile_link">
                      <img src={`images/left-imgs/${msg.img}`} alt="" />
                      <div className="pd_content">
                        <h6>{msg.name}</h6>
                        <p>{msg.message}</p>
                        <span className="nm_time">{msg.time}</span>
                      </div>
                    </div>
                  </a>
                ))}
                <a className="vbm_btn" href="instructor_messages.html">View All <i className="uil uil-arrow-right"></i></a>
              </div>
            </li>

            {/* Notifications */}
            <li className="ui dropdown">
              <a href="#!" className="option_links" title="Notifications">
                <i className="uil uil-bell"></i>
                <span className="noti_count">3</span>
              </a>
              <div className="menu dropdown_mn">
                <a href="#!" className="channel_my item">
                  <div className="profile_link">
                    <img src="images/left-imgs/img-1.jpg" alt="" />
                    <div className="pd_content">
                      <h6>Rock William</h6>
                      <p>Like Your Comment On Video <strong>How to create sidebar menu</strong>.</p>
                      <span className="nm_time">2 min ago</span>
                    </div>
                  </div>
                </a>
                <a href="#!" className="channel_my item">
                  <div className="profile_link">
                    <img src="images/left-imgs/img-2.jpg" alt="" />
                    <div className="pd_content">
                      <h6>Jassica Smith</h6>
                      <p>Added New Review In Video <strong>Full Stack PHP Developer</strong>.</p>
                      <span className="nm_time">12 min ago</span>
                    </div>
                  </div>
                </a>
                <a href="#!" className="channel_my item">
                  <div className="profile_link">
                    <img src="images/left-imgs/img-9.jpg" alt="" />
                    <div className="pd_content">
                      <p>Your Membership Approved <strong>Upload Video</strong>.</p>
                      <span className="nm_time">20 min ago</span>
                    </div>
                  </div>
                </a>
                <a className="vbm_btn" href="instructor_notifications.html">View All <i className="uil uil-arrow-right"></i></a>
              </div>
            </li>

            {/* User Account */}
            <li className="ui dropdown">
              <a href="#!" className="opts_account" title="Account">
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
                      <span>example@email.com</span>
                    </div>
                  </div>
                  {[
                    { label: "My Profile", href: "my_instructor_profile_view.html" },
                    { label: "Dashboard", href: "instructor_dashboard.html" },
                    { label: "My Courses", href: "instructor_courses.html" },
                    { label: "Earnings", href: "instructor_earnings.html" },
                    { label: "Notifications", href: "instructor_notifications.html" },
                    { label: "Messages", href: "instructor_messages.html" },
                    { label: "Orders", href: "instructor_orders.html" },
                    { label: "Account Settings", href: "instructor_setting.html" },
                  ].map((item, i) => (
                    <a key={i} href={item.href} className="item channel_item">{item.label}</a>
                  ))}
                  <a href="#!" className="item channel_item" id="logout">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
