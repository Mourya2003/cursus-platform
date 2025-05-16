import React from "react";
import { Link } from "react-router-dom";

const InstructorProfileView = () => (
  <div>
    {/* Header */}
    <header className="header clearfix">
      <button type="button" id="toggleMenu" className="toggle_menu">
        <i className="uil uil-bars"></i>
      </button>
      <button id="collapse_menu" className="collapse_menu">
        <i className="uil uil-bars collapse_menu--icon"></i>
        <span className="collapse_menu--label"></span>
      </button>
      <div className="main_logo" id="logo">
        <Link to="/"><img src="/images/logo.svg" alt="" /></Link>
        <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></Link>
      </div>
      <div className="top-category">
        <div className="ui compact menu cate-dpdwn">
          <div className="ui simple dropdown item">
            <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
            <div className="menu dropdown_category5">
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
            <Link to="/create_new_course" className="upload_btn" title="Create New Course">Create New Course</Link>
          </li>
          <li>
            <Link to="/shopping_cart" className="option_links" title="cart">
              <i className="uil uil-shopping-cart-alt"></i>
              <span className="noti_count">2</span>
            </Link>
          </li>
          {/* Messages, Notifications, Account dropdowns can be added here */}
        </ul>
      </div>
    </header>

    {/* Sidebar Navigation */}
    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            <li className="menu--item">
              <Link to="/" className="menu--link active" title="Home">
                <i className="uil uil-home-alt menu--icon"></i>
                <span className="menu--label">Home</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/live_streams" className="menu--link" title="Live Streams">
                <i className="uil uil-kayak menu--icon"></i>
                <span className="menu--label">Live Streams</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/explore" className="menu--link" title="Explore">
                <i className="uil uil-search menu--icon"></i>
                <span className="menu--label">Explore</span>
              </Link>
            </li>
            {/* Categories, Tests, Pages, etc. */}
            <li className="menu--item">
              <Link to="/saved_courses" className="menu--link" title="Saved Courses">
                <i className="uil uil-heart-alt menu--icon"></i>
                <span className="menu--label">Saved Courses</span>
              </Link>
            </li>
            {/* ...other menu items */}
          </ul>
        </div>
        <div className="left_section">
          <h6 className="left_title">SUBSCRIPTIONS</h6>
          <ul>
            <li className="menu--item">
              <Link to="/instructor_profile_view" className="menu--link user_img">
                <img src="/images/left-imgs/img-1.jpg" alt="" />
                Rock Smith
                <div className="alrt_dot"></div>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_profile_view" className="menu--link user_img">
                <img src="/images/left-imgs/img-2.jpg" alt="" />
                Jassica William
                <div className="alrt_dot"></div>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/all_instructor" className="menu--link" title="Browse Instructors">
                <i className="uil uil-plus-circle menu--icon"></i>
                <span className="menu--label">Browse Instructors</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            <li className="menu--item">
              <Link to="/setting" className="menu--link" title="Setting">
                <i className="uil uil-cog menu--icon"></i>
                <span className="menu--label">Setting</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/help" className="menu--link" title="Help">
                <i className="uil uil-question-circle menu--icon"></i>
                <span className="menu--label">Help</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/report_history" className="menu--link" title="Report History">
                <i className="uil uil-windsock menu--icon"></i>
                <span className="menu--label">Report History</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/feedback" className="menu--link" title="Send Feedback">
                <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                <span className="menu--label">Send Feedback</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="left_footer">
          <ul>
            <li><Link to="/about_us">About</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/contact_us">Contact Us</Link></li>
            <li><Link to="/coming_soon">Advertise</Link></li>
            <li><Link to="/coming_soon">Developers</Link></li>
            <li><Link to="/terms_of_use">Copyright</Link></li>
            <li><Link to="/terms_of_use">Privacy Policy</Link></li>
            <li><Link to="/terms_of_use">Terms</Link></li>
          </ul>
          <div className="left_footer_content">
            <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="wrapper _bg4586">
      <div className="_216b01">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="section3125 rpt145">
                <div className="row">
                  <div className="col-lg-7">
                    <a href="#" className="_216b22">
                      <span><i className="uil uil-windsock"></i></span>Report Profile
                    </a>
                    <div className="dp_dt150">
                      <div className="img148">
                        <img src="/images/left-imgs/img-1.jpg" alt="" />
                      </div>
                      <div className="prfledt1">
                        <h2>John Doe</h2>
                        <span>Web Developer</span>
                      </div>
                    </div>
                    <ul className="_ttl120">
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
                          <div className="_ttl123">115K</div>
                        </div>
                      </li>
                      <li>
                        <div className="_ttl121">
                          <div className="_ttl122">Subscribers</div>
                          <div className="_ttl123">452K</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <a href="#" className="_216b12">
                      <span><i className="uil uil-windsock"></i></span>Report Profile
                    </a>
                    <div className="rgt-145">
                      <ul className="tutor_social_links">
                        <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                    <ul className="_bty149">
                      <li><button className="subscribe-btn btn500">Subscribe</button></li>
                      <li><button className="msg125 btn500">Message</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Add more profile sections here as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InstructorProfileView;

