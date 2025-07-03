// import React from "react";
// // import './style.css';

// const ReportHistory = () => (
//   <>
//     <header className="header clearfix">
//       <button type="button" id="toggleMenu" className="toggle_menu">
//         <i className="uil uil-bars"></i>
//       </button>
//       <button id="collapse_menu" className="collapse_menu">
//         <i className="uil uil-bars collapse_menu--icon "></i>
//         <span className="collapse_menu--label"></span>
//       </button>
//       <div className="main_logo" id="logo">
//         <a href="index.html"><img src="images/logo.svg" alt="" /></a>
//         <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
//       </div>
//       <div className="top-category">
//         <div className="ui compact menu cate-dpdwn">
//           <div className="ui simple dropdown item">
//             <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
//             <div className="menu dropdown_category5">
//               <a href="#" className="item channel_item">Development</a>
//               <a href="#" className="item channel_item">Business</a>
//               <a href="#" className="item channel_item">Finance & Accounting</a>
//               <a href="#" className="item channel_item">IT & Software</a>
//               <a href="#" className="item channel_item">Office Productivity</a>
//               <a href="#" className="item channel_item">Personal Development</a>
//               <a href="#" className="item channel_item">Design</a>
//               <a href="#" className="item channel_item">Marketing</a>
//               <a href="#" className="item channel_item">Lifestyle</a>
//               <a href="#" className="item channel_item">Photography</a>
//               <a href="#" className="item channel_item">Health & Fitness</a>
//               <a href="#" className="item channel_item">Music</a>
//               <a href="#" className="item channel_item">Teaching & Academics</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="search120">
//         <div className="ui search">
//           <div className="ui left icon input swdh10">
//             <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
//             <i className="uil uil-search-alt icon icon1"></i>
//           </div>
//         </div>
//       </div>
//       <div className="header_right">
//         <ul>
//           <li>
//             <a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a>
//           </li>
//           <li>
//             <a href="shopping_cart.html" className="option_links" title="cart"><i className="uil uil-shopping-cart-alt"></i><span className="noti_count">2</span></a>
//           </li>
//           {/* Messages Dropdown */}
//           <li className="ui dropdown">
//             <a href="#" className="option_links" title="Messages"><i className="uil uil-envelope-alt"></i><span className="noti_count">3</span></a>
//             <div className="menu dropdown_ms">
//               {/* ...message items... */}
//               <a className="vbm_btn" href="instructor_messages.html">View All <i className="uil uil-arrow-right"></i></a>
//             </div>
//           </li>
//           {/* Notifications Dropdown */}
//           <li className="ui dropdown">
//             <a href="#" className="option_links" title="Notifications"><i className="uil uil-bell"></i><span className="noti_count">3</span></a>
//             <div className="menu dropdown_mn">
//               {/* ...notification items... */}
//               <a className="vbm_btn" href="instructor_notifications.html">View All <i className="uil uil-arrow-right"></i></a>
//             </div>
//           </li>
//           {/* Account Dropdown */}
//           <li className="ui dropdown">
//             <a href="#" className="opts_account" title="Account">
//               <img src="images/hd_dp.jpg" alt="" />
//             </a>
//             <div className="menu dropdown_account">
//               <div className="channel_my">
//                 <div className="profile_link">
//                   <img src="images/hd_dp.jpg" alt="" />
//                   <div className="pd_content">
//                     <div className="rhte85">
//                       <h6>Joginder Singh</h6>
//                       <div className="mef78" title="Verify">
//                         <i className="uil uil-check-circle"></i>
//                       </div>
//                     </div>
//                     <span><a href="https://gambolthemes.net/cdn-cgi/l/email-protection" className="__cf_email__">[email&#160;protected]</a></span>
//                   </div>
//                 </div>
//                 <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>
//               </div>
//               <div className="night_mode_switch__btn">
//                 <a href="#" id="night-mode" className="btn-night-mode">
//                   <i className="uil uil-moon"></i> Night mode
//                   <span className="btn-night-mode-switch">
//                     <span className="uk-switch-button"></span>
//                   </span>
//                 </a>
//               </div>
//               <a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>
//               <a href="membership.html" className="item channel_item">Paid Memberships</a>
//               <a href="setting.html" className="item channel_item">Setting</a>
//               <a href="help.html" className="item channel_item">Help</a>
//               <a href="feedback.html" className="item channel_item">Send Feedback</a>
//               <a href="sign_in.html" className="item channel_item">Sign Out</a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </header>

//     <nav className="vertical_nav">
//       <div className="left_section menu_left" id="js-menu">
//         <div className="left_section">
//           <ul>
//             <li className="menu--item">
//               <a href="index.html" className="menu--link" title="Home">
//                 <i className="uil uil-home-alt menu--icon"></i>
//                 <span className="menu--label">Home</span>
//               </a>
//             </li>
//             <li className="menu--item">
//               <a href="live_streams.html" className="menu--link" title="Live Streams">
//                 <i className="uil uil-kayak menu--icon"></i>
//                 <span className="menu--label">Live Streams</span>
//               </a>
//             </li>
//             <li className="menu--item">
//               <a href="explore.html" className="menu--link" title="Explore">
//                 <i className="uil uil-search menu--icon"></i>
//                 <span className="menu--label">Explore</span>
//               </a>
//             </li>
//             {/* ...categories, tests, and more sections as in your HTML... */}
//           </ul>
//         </div>
//         <div className="left_section">
//           <h6 className="left_title">SUBSCRIPTIONS</h6>
//           <ul>
//             {/* ...subscriptions... */}
//           </ul>
//         </div>
//         <div className="left_section pt-2">
//           <ul>
//             {/* ...settings, help, report history... */}
//           </ul>
//         </div>
//         <div className="left_footer">
//           <ul>
//             {/* ...footer links... */}
//           </ul>
//           <div className="left_footer_content">
//             <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </nav>

//     <div className="wrapper">
//       <div className="sa4d25">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <h2 className="st_title"><i className="uil uil-windsock"></i> Report history</h2>
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="report_history">
//                     <h4>Thanks for reporting</h4>
//                     <p>
//                       Any member of the Edututs+ community can flag content to us that they believe violates our Community Guidelines.
//                       When something is flagged, it’s not automatically taken down. Flagged content is reviewed in line with the following guidelines:
//                     </p>
//                     <ul>
//                       <li>
//                         <p>Content that violates our <a href="#">Community Guidelines</a> is removed from Edututs+.</p>
//                       </li>
//                       <li>
//                         <p>Content that may not be appropriate for all younger audiences may be age-restricted.</p>
//                       </li>
//                     </ul>
//                     <a href="#" className="lnk586">Learn more about reporting content on Edututs+.</a>
//                     <span>You haven't submitted any reports.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//       <footer className="footer mt-30">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-3 col-sm-6">
//               <div className="item_f1">
//                 <a href="about_us.html">About</a>
//                 <a href="our_blog.html">Blog</a>
//                 <a href="career.html">Careers</a>
//                 <a href="press.html">Press</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-3 col-sm-6">
//               <div className="item_f1">
//                 <a href="help.html">Help</a>
//                 <a href="coming_soon.html">Advertise</a>
//                 <a href="coming_soon.html">Developers</a>
//                 <a href="contact_us.html">Contact Us</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-3 col-sm-6">
//               <div className="item_f1">
//                 <a href="terms_of_use.html">Copyright Policy</a>
//                 <a href="terms_of_use.html">Terms</a>
//                 <a href="terms_of_use.html">Privacy Policy</a>
//                 <a href="sitemap.html">Sitemap</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-3 col-sm-6">
//               <div className="item_f3">
//                 <a href="#" className="btn1542">Teach on Cursus</a>
//                 <div className="lng_btn">
//                   <div className="ui language bottom right pointing dropdown floating" id="languages" data-content="Select Language">
//                     <a href="#"><i className="uil uil-globe lft"></i>Language<i className="uil uil-angle-down rgt"></i></a>
//                     <div className="menu">
//                       <div className="scrolling menu">
//                         {/* ...languages... */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-12">
//               <div className="footer_bottm">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <ul className="fotb_left">
//                       <li>
//                         <a href="index.html">
//                           <div className="footer_logo">
//                             <img src="images/logo1.svg" alt="" />
//                           </div>
//                         </a>
//                       </li>
//                       <li>
//                         <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="edu_social_links">
//                       <a href="#"><i className="fab fa-facebook-f"></i></a>
//                       <a href="#"><i className="fab fa-twitter"></i></a>
//                       <a href="#"><i className="fab fa-google-plus-g"></i></a>
//                       <a href="#"><i className="fab fa-linkedin-in"></i></a>
//                       <a href="#"><i className="fab fa-instagram"></i></a>
//                       <a href="#"><i className="fab fa-youtube"></i></a>
//                       <a href="#"><i className="fab fa-pinterest-p"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   </>
// );

// export default ReportHistory;

