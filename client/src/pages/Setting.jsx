// import React from "react";

// const Setting = () => (
//   <div className="wrapper">
//     {/* Header */}
//     <header className="header clearfix">
//       <button type="button" id="toggleMenu" className="toggle_menu">
//         <i className="uil uil-bars"></i>
//       </button>
//       <button id="collapse_menu" className="collapse_menu">
//         <i className="uil uil-bars collapse_menu--icon"></i>
//         <span className="collapse_menu--label"></span>
//       </button>
//       <div className="main_logo" id="logo">
//         <a href="/"><img src="/images/logo.svg" alt="" /></a>
//         <a href="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></a>
//       </div>
//       {/* ...top-category, search, and header_right omitted for brevity... */}
//     </header>

//     {/* Vertical Navigation */}
//     {/* ...vertical_nav code omitted for brevity, can be added as a separate component if needed... */}

//     <div className="sa4d25">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-12">
//             <h2 className="st_title"><i className="uil uil-cog"></i> Setting</h2>
//             <div className="setting_tabs">
//               <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
//                 <li className="nav-item">
//                   <a className="nav-link active" id="pills-account-tab" data-toggle="pill" href="#pills-account" role="tab" aria-selected="true">Account</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" id="pills-notification-tab" data-toggle="pill" href="#pills-notification" role="tab" aria-selected="false">Notification</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" id="pills-privacy-tab" data-toggle="pill" href="#pills-privacy" role="tab" aria-selected="false">Privacy</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" id="pills-bllingpayment-tab" data-toggle="pill" href="#pills-bllingpayment" role="tab" aria-selected="false">Billing and Payouts</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" id="pills-api-tab" data-toggle="pill" href="#pills-api" role="tab" aria-selected="false">API Clients</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" id="pills-closeaccount-tab" data-toggle="pill" href="#pills-closeaccount" role="tab" aria-selected="false">Close Account</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="tab-content" id="pills-tabContent">
//               {/* Account Tab */}
//               <div className="tab-pane fade show active" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
//                 {/* ...Account settings form code here... */}
//                 {/* For brevity, you can copy the HTML structure and convert to JSX as needed */}
//               </div>
//               {/* Notification Tab */}
//               <div className="tab-pane fade" id="pills-notification" role="tabpanel" aria-labelledby="pills-notification-tab">
//                 {/* ...Notification settings form code here... */}
//               </div>
//               {/* Privacy Tab */}
//               <div className="tab-pane fade" id="pills-privacy" role="tabpanel" aria-labelledby="pills-privacy-tab">
//                 {/* ...Privacy settings form code here... */}
//               </div>
//               {/* Billing and Payouts Tab */}
//               <div className="tab-pane fade" id="pills-bllingpayment" role="tabpanel" aria-labelledby="pills-bllingpayment-tab">
//                 {/* ...Billing and payouts form code here... */}
//               </div>
//               {/* API Clients Tab */}
//               <div className="tab-pane fade" id="pills-api" role="tabpanel" aria-labelledby="pills-api-tab">
//                 {/* ...API Clients info here... */}
//               </div>
//               {/* Close Account Tab */}
//               <div className="tab-pane fade" id="pills-closeaccount" role="tabpanel" aria-labelledby="pills-closeaccount-tab">
//                 {/* ...Close account form code here... */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Footer */}
//     <footer className="footer mt-30">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-3 col-sm-6">
//             <div className="item_f1">
//               <a href="/about_us">About</a>
//               <a href="/our_blog">Blog</a>
//               <a href="/career">Careers</a>
//               <a href="/press">Press</a>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-6">
//             <div className="item_f1">
//               <a href="/help">Help</a>
//               <a href="/coming_soon">Advertise</a>
//               <a href="/coming_soon">Developers</a>
//               <a href="/contact_us">Contact Us</a>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-6">
//             <div className="item_f1">
//               <a href="/terms_of_use">Copyright Policy</a>
//               <a href="/terms_of_use">Terms</a>
//               <a href="/terms_of_use">Privacy Policy</a>
//               <a href="/sitemap">Sitemap</a>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-6">
//             <div className="item_f3">
//               <a href="#" className="btn1542">Teach on Cursus</a>
//               <div className="lng_btn">
//                 <div className="ui language bottom right pointing dropdown floating" id="languages" data-content="Select Language">
//                   <a href="#"><i className="uil uil-globe lft"></i>Language<i className="uil uil-angle-down rgt"></i></a>
//                   <div className="menu">
//                     <div className="scrolling menu">
//                       {/* Language items omitted for brevity */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-12">
//             <div className="footer_bottm">
//               <div className="row">
//                 <div className="col-md-6">
//                   <ul className="fotb_left">
//                     <li>
//                       <a href="/">
//                         <div className="footer_logo">
//                           <img src="/images/logo1.svg" alt="" />
//                         </div>
//                       </a>
//                     </li>
//                     <li>
//                       <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="edu_social_links">
//                     <a href="#"><i className="fab fa-facebook-f"></i></a>
//                     <a href="#"><i className="fab fa-twitter"></i></a>
//                     <a href="#"><i className="fab fa-google-plus-g"></i></a>
//                     <a href="#"><i className="fab fa-linkedin-in"></i></a>
//                     <a href="#"><i className="fab fa-instagram"></i></a>
//                     <a href="#"><i className="fab fa-youtube"></i></a>
//                     <a href="#"><i className="fab fa-pinterest-p"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   </div>
// );

// export default Setting;