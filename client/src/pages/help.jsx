// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const HelpPage = () => {
//   const [activeTab, setActiveTab] = useState("instructor");

//   return (
//     <>
//       {/* HEADER */}
//       <header className="header clearfix">
//         <button type="button" id="toggleMenu" className="toggle_menu">
//           <i className="uil uil-bars"></i>
//         </button>
//         <button id="collapse_menu" className="collapse_menu">
//           <i className="uil uil-bars collapse_menu--icon"></i>
//           <span className="collapse_menu--label"></span>
//         </button>
//         <div className="main_logo" id="logo">
//           <Link to="/">
//             <img src="images/logo.svg" alt="Logo" />
//           </Link>
//           <Link to="/">
//             <img className="logo-inverse" src="images/ct_logo.svg" alt="Logo inverse" />
//           </Link>
//         </div>

//         {/* Top Category Dropdown (static) */}
//         <div className="top-category">
//           <div className="ui compact menu cate-dpdwn">
//             <div className="ui simple dropdown item">
//               <a href="#" className="option_links p-0" title="categories">
//                 <i className="uil uil-apps"></i>
//               </a>
//               <div className="menu dropdown_category5">
//                 <a href="#" className="item channel_item">Development</a>
//                 <a href="#" className="item channel_item">Business</a>
//                 <a href="#" className="item channel_item">Finance & Accounting</a>
//                 <a href="#" className="item channel_item">IT & Software</a>
//                 <a href="#" className="item channel_item">Office Productivity</a>
//                 <a href="#" className="item channel_item">Personal Development</a>
//                 <a href="#" className="item channel_item">Design</a>
//                 <a href="#" className="item channel_item">Marketing</a>
//                 <a href="#" className="item channel_item">Lifestyle</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search bar */}
//         <div className="search120">
//           <div className="ui search">
//             <div className="ui left icon input swdh10">
//               <input
//                 className="prompt srch10"
//                 type="text"
//                 placeholder="Search for Tuts Videos, Tutors, Tests and more.."
//               />
//               <i className="uil uil-search-alt icon icon1"></i>
//             </div>
//           </div>
//         </div>

//         {/* Header Right */}
//         <div className="header_right">
//           <ul>
//             <li>
//               <Link to="/create_new_course" className="upload_btn" title="Create New Course">
//                 Create New Course
//               </Link>
//             </li>
//             <li>
//               <Link to="/shopping_cart" className="option_links" title="cart">
//                 <i className="uil uil-shopping-cart-alt"></i>
//                 <span className="noti_count">2</span>
//               </Link>
//             </li>
//             {/* Messages and notifications could be added similarly */}
//           </ul>
//         </div>
//       </header>

//       {/* SIDEBAR NAVIGATION */}
//       <nav className="vertical_nav">
//         <div className="left_section menu_left" id="js-menu">
//           <ul>
//             <li className="menu--item">
//               <Link to="/" className="menu--link" title="Home">
//                 <i className="uil uil-home-alt menu--icon"></i>
//                 <span className="menu--label">Home</span>
//               </Link>
//             </li>
//             <li className="menu--item">
//               <Link to="/live_streams" className="menu--link" title="Live Streams">
//                 <i className="uil uil-kayak menu--icon"></i>
//                 <span className="menu--label">Live Streams</span>
//               </Link>
//             </li>
//             <li className="menu--item">
//               <Link to="/courses" className="menu--link" title="Courses">
//                 <i className="uil uil-book-alt menu--icon"></i>
//                 <span className="menu--label">Courses</span>
//               </Link>
//             </li>
//             <li className="menu--item">
//               <Link to="/help" className="menu--link active" title="Help">
//                 <i className="uil uil-question-circle menu--icon"></i>
//                 <span className="menu--label">Help</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* MAIN CONTENT WRAPPER */}
//       <div className="wrapper _bg4586">
//         {/* Search Help Section */}
//         <div className="_215v12">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="section3125">
//                   <div className="row justify-content-md-center">
//                     <div className="col-md-6">
//                       <div className="help_stitle">
//                         <h2>How may we help you?</h2>
//                         <div className="explore_search">
//                           <div className="ui search focus">
//                             <div className="ui left icon input swdh11">
//                               <input
//                                 className="prompt srch_explore"
//                                 type="text"
//                                 placeholder="Search for solutions"
//                               />
//                               <i className="uil uil-search-alt icon icon2"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Help Tabs */}
//         <div className="_215b15">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="course_tabs">
//                   <nav>
//                     <div className="nav nav-tabs help_tabs tab_crse justify-content-center" id="nav-tab" role="tablist">
//                       <button
//                         className={`nav-item nav-link ${activeTab === "instructor" ? "active" : ""}`}
//                         onClick={() => setActiveTab("instructor")}
//                         role="tab"
//                         aria-selected={activeTab === "instructor"}
//                       >
//                         Instructor
//                       </button>
//                       <button
//                         className={`nav-item nav-link ${activeTab === "student" ? "active" : ""}`}
//                         onClick={() => setActiveTab("student")}
//                         role="tab"
//                         aria-selected={activeTab === "student"}
//                       >
//                         Student
//                       </button>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="_215b17">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="course_tab_content">
//                   <div className="tab-content" id="nav-tabContent">
//                     {activeTab === "instructor" && (
//                       <div
//                         className="tab-pane fade show active"
//                         id="nav-instructor"
//                         role="tabpanel"
//                       >
//                         <div className="tpc152">
//                           <div className="crse_content">
//                             <h3>Select a topic to search for help</h3>
//                           </div>
//                           <div className="section3126 mt-20">
//                             <div className="row">
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-laptop-cloud"></i>
//                                   <h4>Creating courses</h4>
//                                 </a>
//                               </div>
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-clipboard-alt"></i>
//                                   <h4>Video tutorials</h4>
//                                 </a>
//                               </div>
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-folder-plus"></i>
//                                   <h4>Organizing content</h4>
//                                 </a>
//                               </div>
//                               {/* Add other instructor topics here */}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {activeTab === "student" && (
//                       <div
//                         className="tab-pane fade show active"
//                         id="nav-student"
//                         role="tabpanel"
//                       >
//                         <div className="tpc152">
//                           <div className="crse_content">
//                             <h3>Select a topic to search for help</h3>
//                           </div>
//                           <div className="section3126 mt-20">
//                             <div className="row">
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-laptop-cloud"></i>
//                                   <h4>Search courses</h4>
//                                 </a>
//                               </div>
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-clipboard-alt"></i>
//                                   <h4>Payment options</h4>
//                                 </a>
//                               </div>
//                               <div className="col-md-4">
//                                 <a href="#" className="value_props">
//                                   <i className="uil uil-folder-plus"></i>
//                                   <h4>Account settings</h4>
//                                 </a>
//                               </div>
//                               {/* Add other student topics here */}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HelpPage;
