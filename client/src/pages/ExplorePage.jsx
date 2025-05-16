import React from "react";
import { Link } from "react-router-dom";

// Dummy data for live streams (replace with real data or props)
const liveStreams = [
  { img: "/images/left-imgs/img-1.jpg", name: "John Doe", href: "/live_output" },
  { img: "/images/left-imgs/img-2.jpg", name: "Jassica", href: "/live_output" },
  { img: "/images/left-imgs/img-9.jpg", name: "Edututs+", href: "/live_output" },
  { img: "/images/left-imgs/img-3.jpg", name: "Joginder Singh", href: "/live_output" },
  { img: "/images/left-imgs/img-4.jpg", name: "Zoena", href: "/live_output" },
];

const ExplorePage = () => (
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
          {/* Messages, Notifications, Account dropdowns would go here */}
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
              <Link to="/live_streams" className="menu--link" title="Live Streams">
                <i className="uil uil-kayak menu--icon"></i>
                <span className="menu--label">Live Streams</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/explore" className="menu--link active" title="Explore">
                <i className="uil uil-search menu--icon"></i>
                <span className="menu--label">Explore</span>
              </Link>
            </li>
            {/* ...other menu items and submenus */}
          </ul>
        </div>
        {/* ...other sidebar sections */}
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
    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-8">
              <div className="section3125">
                <div className="explore_search">
                  <div className="ui search focus">
                    <div className="ui left icon input swdh11">
                      <input className="prompt srch_explore" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
                      <i className="uil uil-search-alt icon icon2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Live Streams Section */}
            <div className="col-md-12">
              <div className="section3125 mb-15 mt-50">
                <h4 className="item_title">Live Streams</h4>
                <Link to="/live_streams" className="see150">See all</Link>
                <div className="la5lo1">
                  <div className="live_streams_row row">
                    {liveStreams.map((stream, idx) => (
                      <div className="col-md-2 col-sm-4 col-6" key={idx}>
                        <div className="stream_1">
                          <Link to={stream.href} className="stream_bg">
                            <img src={stream.img} alt={stream.name} />
                            <h4>{stream.name}</h4>
                            <p>live<span></span></p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* ...other sections can be added here */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExplorePage;

