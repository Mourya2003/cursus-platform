import React from "react";
// import your CSS files here, e.g.
// import './style.css';

const MyInstructorProfileView = () => (
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
        <a href="index.html"><img src="images/logo.svg" alt="" /></a>
        <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
      </div>
      <div className="top-category">
        <div className="ui compact menu cate-dpdwn">
          <div className="ui simple dropdown item">
            <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
            <div className="menu dropdown_category5">
              {/* List of categories */}
              {[
                "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity",
                "Personal Development", "Design", "Marketing", "Lifestyle", "Photography", "Health & Fitness",
                "Music", "Teaching & Academics"
              ].map(cat => (
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
              <i className="uil uil-shopping-cart-alt"></i><span className="noti_count">2</span>
            </a>
          </li>
          {/* Messages Dropdown */}
          <li className="ui dropdown">
            <a href="#" className="option_links" title="Messages">
              <i className="uil uil-envelope-alt"></i><span className="noti_count">3</span>
            </a>
            <div className="menu dropdown_ms">
              {/* Message entries */}
              {/* ... */}
              <a className="vbm_btn" href="instructor_messages.html">View All <i className="uil uil-arrow-right"></i></a>
            </div>
          </li>
          {/* Notifications Dropdown */}
          <li className="ui dropdown">
            <a href="#" className="option_links" title="Notifications">
              <i className="uil uil-bell"></i><span className="noti_count">3</span>
            </a>
            <div className="menu dropdown_mn">
              {/* Notification entries */}
              {/* ... */}
              <a className="vbm_btn" href="instructor_notifications.html">View All <i className="uil uil-arrow-right"></i></a>
            </div>
          </li>
          {/* Account Dropdown */}
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
                      <div className="mef78" title="Verify"><i className="uil uil-check-circle"></i></div>
                    </div>
                    <span>
                      <a href="mailto:email@protected" className="__cf_email__">[email&#160;protected]</a>
                    </span>
                  </div>
                </div>
                <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>
              </div>
              <div className="night_mode_switch__btn">
                <a href="#" id="night-mode" className="btn-night-mode">
                  <i className="uil uil-moon"></i> Night mode
                  <span className="btn-night-mode-switch"><span className="uk-switch-button"></span></span>
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
            {/* Main menu - Home, Streams, Explore etc. */}
            {/* ...repeat structure per your HTML... */}
          </ul>
        </div>
        <div className="left_section">
          <h6 className="left_title">SUBSCRIPTIONS</h6>
          <ul>
            {/* Subscription menu */}
            {/* ... */}
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            {/* Settings, Help, etc. */}
            {/* ... */}
          </ul>
        </div>
        <div className="left_footer">
          <ul>
            {/* Footer links */}
            {/* ... */}
          </ul>
          <div className="left_footer_content">
            <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </nav>

    <div className="wrapper _bg4586">
      {/* Top Profile Section */}
      <div className="_216b01">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="section3125 rpt145">
                <div className="row">
                  <div className="col-lg-7">
                    <a href="#" className="_216b22"><span><i className="uil uil-cog"></i></span>Setting</a>
                    <div className="dp_dt150">
                      <div className="img148">
                        <img src="images/hd_dp.jpg" alt="" />
                      </div>
                      <div className="prfledt1">
                        <h2>Joginder Singh</h2>
                        <span>UI / UX Designer and Web Developer</span>
                      </div>
                    </div>
                    <ul className="_ttl120">
                      {/* Profile stats */}
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Enroll Students</div>
                          <div className="_ttl123">612K</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Courses</div>
                          <div className="_ttl123">8</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Reviews</div>
                          <div className="_ttl123">11K</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Subscriptions</div>
                          <div className="_ttl123">452K</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <a href="setting.html" className="_216b12"><span><i className="uil uil-cog"></i></span>Setting</a>
                    <div className="rgt-145">
                      <ul className="tutor_social_links">
                        <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                    <ul className="_bty149">
                      <li><button className="studio-link-btn btn500" onClick={() => window.location.href = 'instructor_dashboard.html'}>Cursus Studio</button></li>
                      <li><button className="msg125 btn500" onClick={() => window.location.href = 'setting.html'}>Edit</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Section */}
      <div className="_215b15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div className="nav nav-tabs tab_crse" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-selected="true">About</a>
                    <a className="nav-item nav-link" id="nav-courses-tab" data-toggle="tab" href="#nav-courses" role="tab" aria-selected="false">Courses</a>
                    <a className="nav-item nav-link" id="nav-purchased-tab" data-toggle="tab" href="#nav-purchased" role="tab" aria-selected="false">Purchased</a>
                    <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-selected="false">Discussion</a>
                    <a className="nav-item nav-link" id="nav-subscriptions-tab" data-toggle="tab" href="#nav-subscriptions" role="tab" aria-selected="false">Subscriptions</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Content */}
      <div className="_215b17">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tab_content">
                <div className="tab-content" id="nav-tabContent">
                  {/* About Tab */}
                  <div className="tab-pane fade show active" id="nav-about" role="tabpanel">
                    <div className="_htg451">
                      <div className="_htg452">
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nibh sed ligula blandit...</p>
                      </div>
                    </div>
                  </div>
                  {/* Courses Tab */}
                  {/* ...repeat for other tabs as needed, following your HTML structure... */}
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
            {/* Footer columns */}
            {/* ... */}
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default MyInstructorProfileView;
