// import React from 'react';

// const InstructorCertificates = () => {
//   return (
//     <div className="wrapper">
//       <header className="header clearfix">
//         <button type="button" id="toggleMenu" className="toggle_menu">
//           <i className='uil uil-bars'></i>
//         </button>
//         <button id="collapse_menu" className="collapse_menu">
//           <i className="uil uil-bars collapse_menu--icon "></i>
//           <span className="collapse_menu--label"></span>
//         </button>
//         <div className="main_logo" id="logo">
//           <a href="index.html"><img src="images/logo.svg" alt="" /></a>
//           <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
//         </div>
//         <div className="top-category">
//           <div className="ui compact menu cate-dpdwn">
//             <div className="ui simple dropdown item">
//               <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
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
//                 <a href="#" className="item channel_item">Photography</a>
//                 <a href="#" className="item channel_item">Health & Fitness</a>
//                 <a href="#" className="item channel_item">Music</a>
//                 <a href="#" className="item channel_item">Teaching & Academics</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="search120">
//           <div className="ui search">
//             <div className="ui left icon input swdh10">
//               <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
//               <i className='uil uil-search-alt icon icon1'></i>
//             </div>
//           </div>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>
//               <a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a>
//             </li>
//             <li>
//               <a href="shopping_cart.html" className="option_links" title="cart"><i className='uil uil-shopping-cart-alt'></i><span className="noti_count">2</span></a>
//             </li>
//             <li className="ui dropdown">
//               <a href="#" className="option_links" title="Messages"><i className='uil uil-envelope-alt'></i><span className="noti_count">3</span></a>
//               <div className="menu dropdown_ms">
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-6.jpg" alt="" />
//                     <div className="pd_content">
//                       <h6>Zoena Singh</h6>
//                       <p>Hi! Sir, How are you. I ask you one thing please explain it this video price.</p>
//                       <span className="nm_time">2 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-5.jpg" alt="" />
//                     <div className="pd_content">
//                       <h6>Joy Dua</h6>
//                       <p>Hello, I paid you video tutorial but did not play error 404.</p>
//                       <span className="nm_time">10 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-8.jpg" alt="" />
//                     <div className="pd_content">
//                       <h6>Jass</h6>
//                       <p>Thanks Sir, Such a nice video.</p>
//                       <span className="nm_time">25 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a className="vbm_btn" href="instructor_messages.html">View All <i className='uil uil-arrow-right'></i></a>
//               </div>
//             </li>
//             <li className="ui dropdown">
//               <a href="#" className="option_links" title="Notifications"><i className='uil uil-bell'></i><span className="noti_count">3</span></a>
//               <div className="menu dropdown_mn">
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-1.jpg" alt="" />
//                     <div className="pd_content">
//                       <h6>Rock William</h6>
//                       <p>Like Your Comment On Video <strong>How to create sidebar menu</strong>.</p>
//                       <span className="nm_time">2 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-2.jpg" alt="" />
//                     <div className="pd_content">
//                       <h6>Jassica Smith</h6>
//                       <p>Added New Review In Video <strong>Full Stack PHP Developer</strong>.</p>
//                       <span className="nm_time">12 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="#" className="channel_my item">
//                   <div className="profile_link">
//                     <img src="images/left-imgs/img-9.jpg" alt="" />
//                     <div className="pd_content">
//                       <p> Your Membership Approved <strong>Upload Video</strong>.</p>
//                       <span className="nm_time">20 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a className="vbm_btn" href="instructor_notifications.html">View All <i className='uil uil-arrow-right'></i></a>
//               </div>
//             </li>
//             <li className="ui dropdown">
//               <a href="#" className="opts_account" title="Account">
//                 <img src="images/hd_dp.jpg" alt="" />
//               </a>
//               <div className="menu dropdown_account">
//                 <div className="channel_my">
//                   <div className="profile_link">
//                     <img src="images/hd_dp.jpg" alt="" />
//                     <div className="pd_content">
//                       <div className="rhte85">
//                         <h6>Joginder Singh</h6>
//                         <div className="mef78" title="Verify">
//                           <i className='uil uil-check-circle'></i>
//                         </div>
//                       </div>
//                       <span><a href="https://gambolthemes.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b9ded8d4dbd6d5808d8af9ded4d8d0d597dad6d4">[email&#160;protected]</a></span>
//                     </div>
//                   </div>
//                   <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>
//                 </div>
//                 <div className="night_mode_switch__btn">
//                   <a href="#" id="night-mode" className="btn-night-mode">
//                     <i className="uil uil-moon"></i> Night mode
//                     <span className="btn-night-mode-switch">
//                       <span className="uk-switch-button"></span>
//                     </span>
//                   </a>
//                 </div>
//                 <a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>
//                 <a href="membership.html" className="item channel_item">Paid Memberships</a>
//                 <a href="setting.html" className="item channel_item">Setting</a>
//                 <a href="help.html" className="item channel_item">Help</a>
//                 <a href="feedback.html" className="item channel_item">Send Feedback</a>
//                 <a href="sign_in.html" className="item channel_item">Sign Out</a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </header>

//       <nav className="vertical_nav">
//         <div className="left_section menu_left" id="js-menu">
//           <div className="left_section">
//             <ul>
//               <li className="menu--item">
//                 <a href="instructor_dashboard.html" className="menu--link" title="Dashboard">
//                   <i className="uil uil-apps menu--icon"></i>
//                   <span className="menu--label">Dashboard</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_courses.html" className="menu--link" title="Courses">
//                   <i className='uil uil-book-alt menu--icon'></i>
//                   <span className="menu--label">Courses</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_analyics.html" className="menu--link" title="Analyics">
//                   <i className='uil uil-analysis menu--icon'></i>
//                   <span className="menu--label">Analyics</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="create_new_course.html" className="menu--link" title="Create Course">
//                   <i className='uil uil-plus-circle menu--icon'></i>
//                   <span className="menu--label">Create Course</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_messages.html" className="menu--link" title="Messages">
//                   <i className='uil uil-comments menu--icon'></i>
//                   <span className="menu--label">Messages</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_notifications.html" className="menu--link" title="Notifications">
//                   <i className='uil uil-bell menu--icon'></i>
//                   <span className="menu--label">Notifications</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_my_certificates.html" className="menu--link active" title="My Certificates">
//                   <i className='uil uil-award menu--icon'></i>
//                   <span className="menu--label">My Certificates</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_all_reviews.html" className="menu--link" title="Reviews">
//                   <i className='uil uil-star menu--icon'></i>
//                   <span className="menu--label">Reviews</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_earning.html" className="menu--link" title="Earning">
//                   <i className='uil uil-dollar-sign menu--icon'></i>
//                   <span className="menu--label">Earning</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_payout.html" className="menu--link" title="Payout">
//                   <i className='uil uil-wallet menu--icon'></i>
//                   <span className="menu--label">Payout</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_statements.html" className="menu--link" title="Statements">
//                   <i className='uil uil-file-alt menu--icon'></i>
//                   <span className="menu--label">Statements</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="instructor_verification.html" className="menu--link" title="Verification">
//                   <i className='uil uil-check-circle menu--icon'></i>
//                   <span className="menu--label">Verification</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="left_section pt-2">
//             <ul>
//               <li className="menu--item">
//                 <a href="setting.html" className="menu--link" title="Setting">
//                   <i className='uil uil-cog menu--icon'></i>
//                   <span className="menu--label">Setting</span>
//                 </a>
//               </li>
//               <li className="menu--item">
//                 <a href="feedback.html" className="menu--link" title="Send Feedback">
//                   <i className='uil uil-comment-alt-exclamation menu--icon'></i>
//                   <span className="menu--label">Send Feedback</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="sa4d25">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <h2 className="st_title"><i className="uil uil-award"></i> My Certificates</h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               <div className="mt-10">
//                 <div className="card_dash1">
//                   <div className="card_dash_left1">
//                     <i className="uil uil-award"></i>
//                     <h1>Jump Into New Certificate</h1>
//                   </div>
//                   <div className="card_dash_right1">
//                     <button className="create_btn_dash" onClick={() => window.location.href = 'certification_center.html'}>New Certificate</button>
//                   </div>
//                 </div>
//                 <div className="table-cerificate">
//                   <div className="table-responsive">
//                     <table className="table ucp-table" id="content-table">
//                       <thead className="thead-s">
//                         <tr>
//                           <th className="text-center" scope="col">Item No.</th>
//                           <th scope="col">Title</th>
//                           <th className="text-center" scope="col">Marks</th>
//                           <th className="text-center" scope="col">Out Of</th>
//                           <th className="text-center" scope="col">Upload Date</th>
//                           <th className="text-center" scope="col">Certificate</th>
//                           <th className="text-center" scope="col">Controls</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="text-center">1</td>
//                           <td className="cell-ta">WordPress Certificate</td>
//                           <td className="text-center">15</td>
//                           <td className="text-center">20</td>
//                           <td className="text-center">6 April 2019</td>
//                           <td className="text-center"><a href="../../html-imgs/certificate.jpg" target="_blank" rel="noopener noreferrer">View</a></td>
//                           <td className="text-center">
//                             <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt"></i></a>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-center">2</td>
//                           <td className="cell-ta">WordPress Pro Certificate</td>
//                           <td className="text-center">14</td>
//                           <td className="text-center">20</td>
//                           <td className="text-center">4 April 2019</td>
//                           <td className="text-center"><a href="../../html-imgs/certificate.jpg" target="_blank" rel="noopener noreferrer">View</a></td>
//                           <td className="text-center">
//                             <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt"></i></a>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-center">3</td>
//                           <td className="cell-ta">HTML CSS Certificate</td>
//                           <td className="text-center">18</td>
//                           <td className="text-center">20</td>
//                           <td className="text-center">3 April 2019</td>
//                           <td className="text-center"><a href="../../html-imgs/certificate.jpg" target="_blank" rel="noopener noreferrer">View</a></td>
//                           <td className="text-center">
//                             <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt"></i></a>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <footer className="footer mt-40">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="item_f1">
//                 <a href="terms_of_use.html">Copyright Policy</a>
//                 <a href="terms_of_use.html">Terms</a>
//                 <a href="terms_of_use.html">Privacy Policy</a>
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
//   );
// };

// export default InstructorCertificates;
