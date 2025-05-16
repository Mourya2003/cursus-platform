import React from "react";
import { Link } from "react-router-dom";

// Example live streams data
const liveStreams = [
  { img: "/images/left-imgs/img-1.jpg", name: "John Doe" },
  { img: "/images/left-imgs/img-2.jpg", name: "Jassica" },
  { img: "/images/left-imgs/img-9.jpg", name: "Edututs+" },
  { img: "/images/left-imgs/img-3.jpg", name: "Joginder Singh" },
  { img: "/images/left-imgs/img-4.jpg", name: "Zoena" },
  { img: "/images/left-imgs/img-5.jpg", name: "Albert Dua" },
  { img: "/images/left-imgs/img-6.jpg", name: "Poonam" },
];

const categories = [
  "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity",
  "Personal Development", "Design", "Marketing", "Lifestyle", "Photography",
  "Health & Fitness", "Music", "Teaching & Academics"
];

const footerLinks = [
  { to: "/about_us", label: "About" },
  { to: "/press", label: "Press" },
  { to: "/contact_us", label: "Contact Us" },
  { to: "/coming_soon", label: "Advertise" },
  { to: "/coming_soon", label: "Developers" },
  { to: "/terms_of_use", label: "Copyright" },
  { to: "/terms_of_use", label: "Privacy Policy" },
  { to: "/terms_of_use", label: "Terms" },
];

const AllLiveStreams = () => (
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
        <Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link>
        <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="Logo" /></Link>
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
          {/* ...other dropdowns and account menu as needed */}
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
            {/* ...add more sidebar items as needed */}
          </ul>
        </div>
        {/* ...add more sidebar sections as needed */}
        <div className="left_footer">
          <ul>
            {footerLinks.map(link => (
              <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
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
            <div className="col-xl-9 col-lg-8">
              <div className="section3125">
                <h4 className="item_title">All Live Streams</h4>
                <div className="la5lo1">
                  <div className="row">
                    {liveStreams.map((stream, idx) => (
                      <div className="col-md-3" key={idx}>
                        <div className="stream_1 mb-30">
                          <Link to="/live_output" className="stream_bg">
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
            {/* Optionally, add a right sidebar or more content here */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AllLiveStreams;

