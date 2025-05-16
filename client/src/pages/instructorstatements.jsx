import React from "react";
import { Link } from "react-router-dom";

const statementRows = [
  { date: "13 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "12 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "11 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "10 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "9 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "8 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
  { date: "7 Apr 2020", orderId: "123456", type: "Sale", title: "Course Title Here", amount: "$10", fees: "-$5" },
];

const StatementsPage = () => (
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
              <Link to="/instructor_dashboard" className="menu--link" title="Dashboard">
                <i className="uil uil-apps menu--icon"></i>
                <span className="menu--label">Dashboard</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_courses" className="menu--link" title="Courses">
                <i className="uil uil-book-alt menu--icon"></i>
                <span className="menu--label">Courses</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_analyics" className="menu--link" title="Analyics">
                <i className="uil uil-analysis menu--icon"></i>
                <span className="menu--label">Analyics</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/create_new_course" className="menu--link" title="Create Course">
                <i className="uil uil-plus-circle menu--icon"></i>
                <span className="menu--label">Create Course</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_messages" className="menu--link" title="Messages">
                <i className="uil uil-comments menu--icon"></i>
                <span className="menu--label">Messages</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_notifications" className="menu--link" title="Notifications">
                <i className="uil uil-bell menu--icon"></i>
                <span className="menu--label">Notifications</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_my_certificates" className="menu--link" title="My Certificates">
                <i className="uil uil-award menu--icon"></i>
                <span className="menu--label">My Certificates</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_all_reviews" className="menu--link" title="Reviews">
                <i className="uil uil-star menu--icon"></i>
                <span className="menu--label">Reviews</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_earning" className="menu--link" title="Earning">
                <i className="uil uil-dollar-sign menu--icon"></i>
                <span className="menu--label">Earning</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_payout" className="menu--link" title="Payout">
                <i className="uil uil-wallet menu--icon"></i>
                <span className="menu--label">Payout</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_statements" className="menu--link active" title="Statements">
                <i className="uil uil-file-alt menu--icon"></i>
                <span className="menu--label">Statements</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/instructor_verification" className="menu--link" title="Verification">
                <i className="uil uil-check-circle menu--icon"></i>
                <span className="menu--label">Verification</span>
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
              <Link to="/feedback" className="menu--link" title="Send Feedback">
                <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                <span className="menu--label">Send Feedback</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="st_title"><i className="uil uil-file-alt"></i> Statements</h2>
            </div>
          </div>
          <div className="row">
            {/* Earnings Summary */}
            <div className="col-lg-8 col-md-7">
              <div className="top_countries mt-30">
                <div className="top_countries_title">
                  <h2>Earnings</h2>
                </div>
                <div className="statement_content">
                  <p className="tt-body">Your sales earnings over the last 30 days</p>
                  <table className="statement-summary__table">
                    <thead>
                      <tr>
                        <th><p className="t-heading">My funds</p></th>
                        <th><p className="t-heading">Earnings</p></th>
                        <th><p className="t-heading">Edututs+ Fees</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="statement-summary__funds">
                          <p className="js-earnings__instructor-funds-wrapper">
                            <span className="js-earnngs__instructor-funds t-currency">$289.64</span>
                          </p>
                        </td>
                        <td className="statement-summary__earnings">
                          <p className="js-earnings__earnings-wrapper">
                            <span className="tt__earning">+</span>
                            <span className="js-earnings__earnings t-currency">$458.00</span>
                          </p>
                        </td>
                        <td className="statement-summary__fees">
                          <p className="js-earnings__fees-wrapper">
                            <span className="tt__earning">-</span>
                            <span className="js-earnings__fees t-currency">$154.86</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Invoices */}
            <div className="col-lg-4 col-md-5">
              <div className="top_countries mt-30">
                <div className="top_countries_title">
                  <h2>View Invoices</h2>
                </div>
                <div className="statement_invoice_content">
                  <div className="date_selector mt-0">
                    <div className="ui selection dropdown skills-search vchrt-dropdown invoice-dropdown">
                      <input name="date" type="hidden" value="default" />
                      <i className="dropdown icon d-icon"></i>
                      <div className="text">Monthly Invoices</div>
                      <div className="menu">
                        <div className="item" data-value="0">April 2020</div>
                        <div className="item" data-value="1">March 2020</div>
                      </div>
                    </div>
                    <button className="st_download_btn"><i className="uil uil-download-alt"></i></button>
                  </div>
                </div>
              </div>
            </div>
            {/* Statement Table Controls */}
            <div className="col-lg-12 col-md-12">
              <ul className="more_options_tt">
                <li><button className="more_items_14 active">This Month</button></li>
                <li><button className="more_items_14">Last Month</button></li>
                <li>
                  <div className="explore_search">
                    <div className="ui search focus">
                      <div className="ui left icon input swdh11 swdh15">
                        <input className="prompt srch_explore" type="text" placeholder="Document Number" />
                        <i className="uil uil-search-alt icon icon8"></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Statement Table */}
            <div className="col-lg-12 col-md-12">
              <div className="table-responsive mt-30">
                <table className="table ucp-table earning__table">
                  <thead className="thead-s">
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Type</th>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Fees</th>
                      <th scope="col">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statementRows.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.date}</td>
                        <td>{row.orderId}</td>
                        <td>{row.type}</td>
                        <td>{row.title}</td>
                        <td>{row.amount}</td>
                        <td>{row.fees}</td>
                        <td><a href="#">View</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer mt-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="item_f1">
                <Link to="/terms_of_use">Copyright Policy</Link>
                <Link to="/terms_of_use">Terms</Link>
                <Link to="/terms_of_use">Privacy Policy</Link>
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
  </div>
);

export default StatementsPage;

