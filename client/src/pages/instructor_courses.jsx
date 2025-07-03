// import React, { useState } from "react";

// export default function InstructorCourses() {
//   const [activeTab, setActiveTab] = useState("courses");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "courses":
//         return (
//           <div className="table-responsive mt0">
//             <table className="table ucp-table" id="instructor_course">
//               <thead className="thead-s">
//                 <tr>
//                   <th className="text-center" scope="col">Image</th>
//                   <th scope="col">Title</th>
//                   <th className="text-center" scope="col">Enrolled</th>
//                   <th className="text-center" scope="col">Progress</th>
//                   <th className="text-center" scope="col">Status</th>
//                   <th className="text-center" scope="col">Price</th>
//                   <th className="text-center" scope="col">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="text-center">
//                     <img src="images/courses/img-1.jpg" alt="course" className="course_img" />
//                   </td>
//                   <td>Angular - The Complete Guide</td>
//                   <td className="text-center">14</td>
//                   <td className="text-center">
//                     <div className="progress">
//                       <div
//                         className="progress-bar bg-success"
//                         style={{ width: "60%" }}
//                         aria-valuenow={60}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </td>
//                   <td className="text-center">Active</td>
//                   <td className="text-center">$120</td>
//                   <td className="text-center">
//                     <a href="#" className="gray-s" title="Edit"><i className="uil uil-edit" /></a>
//                     <a href="#" className="gray-s" title="Delete"><i className="uil uil-trash-alt" /></a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         );
//       case "purchases":
//         return <p>Purchases content goes here...</p>;
//       case "upcoming":
//         return <p>Upcoming content goes here...</p>;
//       case "reviews":
//         return <p>Reviews content goes here...</p>;
//       case "messages":
//         return <p>Messages content goes here...</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="wrapper _bg4586">
//       <header className="header clearfix">
//         <button type="button" id="toggleMenu" className="toggle_menu"><i className="uil uil-bars" /></button>
//         <button id="collapse_menu" className="collapse_menu"><i className="uil uil-bars collapse_menu--icon" /><span className="collapse_menu--label" /></button>
//         <div className="main_logo" id="logo">
//           <a href="index.html"><img src="images/logo.svg" alt="" /></a>
//           <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
//         </div>
//         <div className="top-category">
//           <div className="ui compact menu cate-dpdwn">
//             <div className="ui simple dropdown item">
//               <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps" /></a>
//               <div className="menu dropdown_category5">
//                 <a href="#" className="item channel_item">Development</a>
//                 <a href="#" className="item channel_item">Business</a>
//                 <a href="#" className="item channel_item">Finance &amp; Accounting</a>
//                 <a href="#" className="item channel_item">IT &amp; Software</a>
//                 <a href="#" className="item channel_item">Office Productivity</a>
//                 <a href="#" className="item channel_item">Personal Development</a>
//                 <a href="#" className="item channel_item">Design</a>
//                 <a href="#" className="item channel_item">Marketing</a>
//                 <a href="#" className="item channel_item">Lifestyle</a>
//                 <a href="#" className="item channel_item">Photography</a>
//                 <a href="#" className="item channel_item">Health &amp; Fitness</a>
//                 <a href="#" className="item channel_item">Music</a>
//                 <a href="#" className="item channel_item">Teaching &amp; Academics</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="search120">
//           <div className="ui search">
//             <div className="ui left icon input swdh10">
//               <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
//               <i className="uil uil-search-alt icon icon1" />
//             </div>
//           </div>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li><a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a></li>
//             <li><a href="shopping_cart.html" className="option_links" title="cart"><i className="uil uil-shopping-cart-alt" /><span className="noti_count">2</span></a></li>
//             <li className="ui dropdown">
//               <a href="#" className="option_links" title="Messages"><i className="uil uil-envelope-alt" /><span className="noti_count">3</span></a>
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
//                 <a className="vbm_btn" href="instructor_messages.html">View All <i className="uil uil-arrow-right" /></a>
//               </div>
//             </li>
//             <li className="ui dropdown">
//               <a href="#" className="option_links" title="Notifications"><i className="uil uil-bell" /><span className="noti_count">3</span></a>
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
//                       <p>Your Membership Approved <strong>Upload Video</strong>.</p>
//                       <span className="nm_time">20 min ago</span>
//                     </div>
//                   </div>
//                 </a>
//                 <a className="vbm_btn" href="instructor_notifications.html">View All <i className="uil uil-arrow-right" /></a>
//               </div>
//             </li>
//             <li className="ui dropdown">
//               <a href="#" className="opts_account"><img src="images/hd_dp.jpg" alt="" /></a>
//               <div className="menu dropdown_account">
//                 <div className="channel_my">
//                   <div className="profile_link">
//                     <img src="images/hd_dp.jpg" alt="" />
//                     <div className="pd_content">
//                       <div className="rhte85">
//                         <h6>Kelly William</h6>
//                         <div className="mef78" title="Verify"><i className="uil uil-check-circle" /></div>
//                       </div>
//                       <span>example@gmail.com</span>
//                     </div>
//                   </div>
//                   <a href="instructor_profile_view.html" className="item channel_item">My Profile</a>
//                   <a href="instructor_dashboard.html" className="item channel_item">Dashboard</a>
//                   <a href="instructor_courses.html" className="item channel_item">My Courses</a>
//                   <a href="instructor_messages.html" className="item channel_item">Messages</a>
//                   <a href="instructor_notifications.html" className="item channel_item">Notifications</a>
//                   <a href="instructor_invoice.html" className="item channel_item">Invoice</a>
//                   <a href="login.html" className="item channel_item">Logout</a>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </header>

//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-xl-12 col-lg-12 col-md-12">
//             <div className="instructor_coursed_sidebar dn-1199">
//               <div className="course_tabs vertical_tabs mt0">
//                 <ul className="nav nav-tabs flex-column" role="tablist">
//                   <li className="nav-item" role="presentation">
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === "courses" ? "active" : ""}`}
//                       onClick={() => setActiveTab("courses")}
//                       role="tab"
//                       aria-selected={activeTab === "courses"}
//                     >
//                       <i className="uil uil-book-alt" /> My Courses
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === "purchases" ? "active" : ""}`}
//                       onClick={() => setActiveTab("purchases")}
//                       role="tab"
//                       aria-selected={activeTab === "purchases"}
//                     >
//                       <i className="uil uil-file-alt" /> Purchases
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
//                       onClick={() => setActiveTab("upcoming")}
//                       role="tab"
//                       aria-selected={activeTab === "upcoming"}
//                     >
//                       <i className="uil uil-calendar-alt" /> Upcoming
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
//                       onClick={() => setActiveTab("reviews")}
//                       role="tab"
//                       aria-selected={activeTab === "reviews"}
//                     >
//                       <i className="uil uil-star" /> Reviews
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === "messages" ? "active" : ""}`}
//                       onClick={() => setActiveTab("messages")}
//                       role="tab"
//                       aria-selected={activeTab === "messages"}
//                     >
//                       <i className="uil uil-envelope-alt" /> Messages
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="instructor_coursed_list">
//               <div className="tab-content" id="myTabContent">
//                 {renderTabContent()}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
