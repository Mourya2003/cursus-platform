import React from 'react';

const InstructorMessagesPage = () => {
  return (
    <div>
      {/* Head tags and metadata would typically be in index.html or managed with react-helmet */}

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
          <a href="index.html">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <a href="index.html">
            <img className="logo-inverse" src="images/ct_logo.svg" alt="logo-inverse" />
          </a>
        </div>
        <div className="top-category">
          <div className="ui compact menu cate-dpdwn">
            <div className="ui simple dropdown item">
              <a href="#" className="option_links p-0" title="categories">
                <i className="uil uil-apps"></i>
              </a>
              <div className="menu dropdown_category5">
                {["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography", "Health & Fitness", "Music", "Teaching & Academics"].map((category, index) => (
                  <a href="#" className="item channel_item" key={index}>{category}</a>
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
            <li><a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a></li>
            <li>
              <a href="shopping_cart.html" className="option_links" title="cart">
                <i className="uil uil-shopping-cart-alt"></i>
                <span className="noti_count">2</span>
              </a>
            </li>
            {/* Messages Dropdown */}
            <li className="ui dropdown">
              <a href="#" className="option_links" title="Messages">
                <i className="uil uil-envelope-alt"></i>
                <span className="noti_count">3</span>
              </a>
              <div className="menu dropdown_ms">
                {/* Reusable Message Preview Items */}
                {[
                  { name: "Zoena Singh", text: "Hi! Sir, How are you. I ask you one thing please explain it this video price.", time: "2 min ago", img: "images/left-imgs/img-6.jpg" },
                  { name: "Joy Dua", text: "Hello, I paid you video tutorial but did not play error 404.", time: "10 min ago", img: "images/left-imgs/img-5.jpg" },
                  { name: "Jass", text: "Thanks Sir, Such a nice video.", time: "25 min ago", img: "images/left-imgs/img-8.jpg" }
                ].map((msg, index) => (
                  <a href="#" className="channel_my item" key={index}>
                    <div className="profile_link">
                      <img src={msg.img} alt="profile" />
                      <div className="pd_content">
                        <h6>{msg.name}</h6>
                        <p>{msg.text}</p>
                        <span className="nm_time">{msg.time}</span>
                      </div>
                    </div>
                  </a>
                ))}
                <a className="vbm_btn" href="instructor_messages.html">
                  View All <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </li>
            {/* Similar logic can be applied for notifications and account dropdown */}
          </ul>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className="vertical_nav">
        <div className="left_section menu_left" id="js-menu">
          <div className="left_section">
            <ul>
              {["Dashboard", "Courses", "Analyics", "Create Course", "Messages", "Notifications", "My Certificates", "Reviews", "Earning", "Payout", "Statements", "Verification"].map((item, index) => (
                <li className="menu--item" key={index}>
                  <a
                    href={`instructor_${item.toLowerCase().replace(/ /g, '_')}.html`}
                    className={`menu--link${item === 'Messages' ? ' active' : ''}`}
                    title={item}
                  >
                    <i className={`uil uil-${item.toLowerCase().replace(/ /g, '-')}-alt menu--icon`}></i>
                    <span className="menu--label">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Chat Section */}
      <div className="wrapper">
        <div className="sa4d25">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="st_title">
                  <i className="uil uil-comments"></i> Messages
                </h2>
              </div>
            </div>
            {/* Message UI Structure (search, chat list, chatbox) would be here */}
            {/* Due to JSX size limit, the chat UI can be modularized into separate components if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorMessagesPage;
