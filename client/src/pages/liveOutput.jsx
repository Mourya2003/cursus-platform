import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity",
  "Personal Development", "Design", "Marketing", "Lifestyle", "Photography",
  "Health & Fitness", "Music", "Teaching & Academics"
];

const sidebarCategories = [
  "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity",
  "Personal Development", "Design", "Marketing", "Lifestyle", "Photography",
  "Health & Fitness", "Music", "Teaching & Academics"
];

const sidebarPages = [
  { label: "About", to: "/about_us" },
  { label: "Press", to: "/press" },
  { label: "Contact Us", to: "/contact_us" },
  { label: "Advertise", to: "/coming_soon" },
  { label: "Developers", to: "/coming_soon" },
  { label: "Copyright", to: "/terms_of_use" },
  { label: "Privacy Policy", to: "/terms_of_use" },
  { label: "Terms", to: "/terms_of_use" },
];

const chatMessages = [
  { user: "John Doe", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet molestie leo ac pellentesque" },
  { user: "Poonam", message: "Class aptent taciti sociosqu ad litora torquent per conubia nostra" },
  { user: "Jass", message: "Nulla sollicitudin nec nisi at pellentesque. Cras fringilla est et sem tempor" },
  { user: "Albert Smith", message: "Pellentesque ultricies, ante ac laoreet dictum, tellus arcu cursus sapien, in commodo sem" }
];

const LiveOutput = () => (
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
              {categories.map(cat => (
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
              <Link to="/" className="menu--link" title="Home">
                <i className="uil uil-home-alt menu--icon"></i>
                <span className="menu--label">Home</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/live_streams" className="menu--link active" title="Live Streams">
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
            <li className="menu--item menu--item__has_sub_menu">
              <label className="menu--link" title="Categories">
                <i className="uil uil-layers menu--icon"></i>
                <span className="menu--label">Categories</span>
              </label>
              <ul className="sub_menu">
                {sidebarCategories.map(cat => (
                  <li className="sub_menu--item" key={cat}>
                    <a href="#" className="sub_menu--link">{cat}</a>
                  </li>
                ))}
              </ul>
            </li>
            {/* ...other menu items and submenus */}
            <li className="menu--item">
              <Link to="/saved_courses" className="menu--link" title="Saved Courses">
                <i className="uil uil-heart-alt menu--icon"></i>
                <span className="menu--label">Saved Courses</span>
              </Link>
            </li>
            {/* ...pages, tests, etc. */}
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
            {sidebarPages.map(page => (
              <li key={page.label}><Link to={page.to}>{page.label}</Link></li>
            ))}
          </ul>
          <div className="left_footer_content">
            <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="section3125">
                <div className="live1452">
                  <iframe
                    src="https://www.youtube.com/embed/EEIk7gwjgIM?autoplay=1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Live Stream"
                    style={{ width: "100%", height: "400px", border: 0 }}
                  ></iframe>
                </div>
                <div className="user_dt5">
                  <div className="user_dt_left">
                    <div className="live_user_dt">
                      <div className="user_img5">
                        <img src="/images/left-imgs/img-4.jpg" alt="" />
                      </div>
                      <div className="user_cntnt">
                        <h4>Jassica William</h4>
                        <button className="subscribe-btn">Subscribe</button>
                      </div>
                    </div>
                  </div>
                  <div className="user_dt_right">
                    <ul>
                      <li>
                        <a href="#" className="lkcm152"><i className="uil uil-eye"></i><span>1452</span></a>
                      </li>
                      <li>
                        <a href="#" className="lkcm152"><i className="uil uil-thumbs-up"></i><span>100</span></a>
                      </li>
                      <li>
                        <a href="#" className="lkcm152"><i className="uil uil-thumbs-down"></i><span>20</span></a>
                      </li>
                      <li>
                        <a href="#" className="lkcm152"><i className="uil uil-share-alt"></i><span>9</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Live Chat */}
            <div className="col-xl-4 col-lg-4">
              <div className="right_side">
                <div className="fcrse_3">
                  <div className="cater_ttle">
                    <h4>Live Chat</h4>
                  </div>
                  <div className="live_chat">
                    {chatMessages.map((msg, idx) => (
                      <p key={idx}>
                        <a href="#">{msg.user}</a>
                        {msg.message}
                      </p>
                    ))}
                  </div>
                  {/* Optionally, add a chat input here */}
                </div>
              </div>
            </div>
            {/* End Live Chat */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LiveOutput;

