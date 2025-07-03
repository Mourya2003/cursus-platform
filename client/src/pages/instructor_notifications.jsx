// import React from "react";

// const InstructorNotifications = () => {
//   return (
//     <>
//       <head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="description" content="Gambolthemes" />
//         <meta name="author" content="Gambolthemes" />
//         <title>Cursus - Notifications</title>
//         <link rel="icon" type="image/png" href="images/fav.png" />
//         <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500" rel="stylesheet" />
//         <link href="vendor/unicons-2.0.1/css/unicons.css" rel="stylesheet" />
//         <link href="css/vertical-responsive-menu1.min.css" rel="stylesheet" />
//         <link href="css/instructor-dashboard.css" rel="stylesheet" />
//         <link href="css/instructor-responsive.css" rel="stylesheet" />
//         <link href="css/night-mode.css" rel="stylesheet" />
//         <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
//         <link href="vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
//         <link href="vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
//         <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
//         <link rel="stylesheet" type="text/css" href="vendor/semantic/semantic.min.css" />
//       </head>

//       <body>
//         <header className="header clearfix">
//           <button type="button" id="toggleMenu" className="toggle_menu">
//             <i className="uil uil-bars"></i>
//           </button>
//           <button id="collapse_menu" className="collapse_menu">
//             <i className="uil uil-bars collapse_menu--icon "></i>
//             <span className="collapse_menu--label"></span>
//           </button>
//           <div className="main_logo" id="logo">
//             <a href="index.html"><img src="images/logo.svg" alt="" /></a>
//             <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
//           </div>
//           <div className="top-category">
//             <div className="ui compact menu cate-dpdwn">
//               <div className="ui simple dropdown item">
//                 <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
//                 <div className="menu dropdown_category5">
//                   {["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography", "Health & Fitness", "Music", "Teaching & Academics"].map((cat, i) => (
//                     <a key={i} href="#" className="item channel_item">{cat}</a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="search120">
//             <div className="ui search">
//               <div className="ui left icon input swdh10">
//                 <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
//                 <i className="uil uil-search-alt icon icon1"></i>
//               </div>
//             </div>
//           </div>
//           <div className="header_right">
//             <ul>
//               <li><a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a></li>
//               <li><a href="shopping_cart.html" className="option_links" title="cart"><i className="uil uil-shopping-cart-alt"></i><span className="noti_count">2</span></a></li>
//               <li className="ui dropdown">
//                 <a href="#" className="option_links" title="Messages"><i className="uil uil-envelope-alt"></i><span className="noti_count">3</span></a>
//                 <div className="menu dropdown_ms">
//                   {[
//                     { name: "Zoena Singh", img: "img-6", msg: "Hi! Sir, How are you. I ask you one thing please explain it this video price.", time: "2 min ago" },
//                     { name: "Joy Dua", img: "img-5", msg: "Hello, I paid you video tutorial but did not play error 404.", time: "10 min ago" },
//                     { name: "Jass", img: "img-8", msg: "Thanks Sir, Such a nice video.", time: "25 min ago" }
//                   ].map((m, i) => (
//                     <a key={i} href="#" className="channel_my item">
//                       <div className="profile_link">
//                         <img src={`images/left-imgs/${m.img}.jpg`} alt="" />
//                         <div className="pd_content">
//                           <h6>{m.name}</h6><p>{m.msg}</p><span className="nm_time">{m.time}</span>
//                         </div>
//                       </div>
//                     </a>
//                   ))}
//                   <a className="vbm_btn" href="instructor_messages.html">View All <i className="uil uil-arrow-right"></i></a>
//                 </div>
//               </li>
//               <li className="ui dropdown">
//                 <a href="#" className="option_links" title="Notifications"><i className="uil uil-bell"></i><span className="noti_count">3</span></a>
//                 <div className="menu dropdown_mn">
//                   {[
//                     { name: "Rock William", img: "img-1", msg: "Like Your Comment On Video", detail: "How to create sidebar menu", time: "2 min ago" },
//                     { name: "Jassica Smith", img: "img-2", msg: "Added New Review In Video", detail: "Full Stack PHP Developer", time: "12 min ago" },
//                     { name: "", img: "img-9", msg: "Your Membership Approved", detail: "Upload Video", time: "20 min ago" }
//                   ].map((n, i) => (
//                     <a key={i} href="#" className="channel_my item">
//                       <div className="profile_link">
//                         <img src={`images/left-imgs/${n.img}.jpg`} alt="" />
//                         <div className="pd_content">
//                           {n.name && <h6>{n.name}</h6>}
//                           <p>{n.msg} <strong>{n.detail}</strong>.</p>
//                           <span className="nm_time">{n.time}</span>
//                         </div>
//                       </div>
//                     </a>
//                   ))}
//                   <a className="vbm_btn" href="instructor_notifications.html">View All <i className="uil uil-arrow-right"></i></a>
//                 </div>
//               </li>
//               <li className="ui dropdown">
//                 <a href="#" className="opts_account" title="Account"><img src="images/hd_dp.jpg" alt="" /></a>
//                 <div className="menu dropdown_account">
//                   <a href="instructor_dashboard.html" className="item channel_item"><i className="uil uil-apps"></i>Dashboard</a>
//                   <a href="edit_profile.html" className="item channel_item"><i className="uil uil-edit-alt"></i>Edit Profile</a>
//                   <a href="setting.html" className="item channel_item"><i className="uil uil-cog"></i>Settings</a>
//                   <a href="help.html" className="item channel_item"><i className="uil uil-question-circle"></i>Help</a>
//                   <a href="feedback.html" className="item channel_item"><i className="uil uil-comment-alt-exclamation"></i>Send Feedback</a>
//                   <a href="logout.html" className="item channel_item"><i className="uil uil-lock-alt"></i>Sign Out</a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </header>
//       </body>
//     </>
//   );
// };

// export default InstructorNotifications;
