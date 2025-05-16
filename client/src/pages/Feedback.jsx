import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeedbackPage = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your feedback submission logic here
    alert("Feedback submitted! Thank you.");
    setEmail("");
    setDescription("");
    setScreenshot(null);
  };

  return (
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
                  "Personal Development", "Design", "Marketing", "Lifestyle", "Photography",
                  "Health & Fitness", "Music", "Teaching & Academics"
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
                <Link to="/explore" className="menu--link" title="Explore">
                  <i className="uil uil-search menu--icon"></i>
                  <span className="menu--label">Explore</span>
                </Link>
              </li>
              {/* ...other menu items and submenus */}
              <li className="menu--item">
                <Link to="/feedback" className="menu--link active" title="Send Feedback">
                  <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                  <span className="menu--label">Send Feedback</span>
                </Link>
              </li>
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
              <div className="col-lg-12">
                <h2 className="st_title"><i className="uil uil-comment-info-alt"></i> Send Feedback</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <form onSubmit={handleSubmit}>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 swdh19">
                          <input
                            className="prompt srch_explore"
                            type="email"
                            name="emailaddress"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            maxLength="64"
                            placeholder="Email address"
                          />
                        </div>
                      </div>
                      <div className="ui search focus mt-30">
                        <div className="ui form swdh30">
                          <div className="field">
                            <textarea
                              rows="6"
                              name="description"
                              id="id_about"
                              placeholder="Describe your issue or share your ideas"
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group1 mt-30">
                        <label htmlFor="file5">Add Screenshots</label>
                        <div className="image-upload-wrap">
                          <input
                            className="file-upload-input"
                            id="file5"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                          <div className="drag-text">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <h4>Select screenshots to upload</h4>
                            <p>or drag and drop screenshots</p>
                          </div>
                          {screenshot && (
                            <div className="mt-2">
                              <strong>Selected:</strong> {screenshot.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <button className="save_btn" type="submit">Send Feedback</button>
                    </form>
                  </div>
                  {/* Optionally, add an illustration or help text in the other column */}
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
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/about_us">About</Link>
                <Link to="/our_blog">Blog</Link>
                <Link to="/career">Careers</Link>
                <Link to="/press">Press</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/help">Help</Link>
                <Link to="/coming_soon">Advertise</Link>
                <Link to="/coming_soon">Developers</Link>
                <Link to="/contact_us">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f1">
                <Link to="/terms_of_use">Copyright Policy</Link>
                <Link to="/terms_of_use">Terms</Link>
                <Link to="/terms_of_use">Privacy Policy</Link>
                <Link to="/sitemap">Sitemap</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="item_f3">
                <a href="#" className="btn1542">Teach on Cursus</a>
                {/* Language dropdown can be added here */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="footer_bottm">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="fotb_left">
                      <li>
                        <Link to="/">
                          <div className="footer_logo">
                            <img src="/images/logo1.svg" alt="" />
                          </div>
                        </Link>
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
  );
};

export default FeedbackPage;

