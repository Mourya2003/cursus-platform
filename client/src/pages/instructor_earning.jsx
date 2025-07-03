// import React from 'react';

// const EarningPage = () => {
//   return (
//     <div>
//       {/* Head section would typically go into index.html in React apps */}

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
//               <a href="#" className="option_links p-0" title="categories">
//                 <i className="uil uil-apps"></i>
//               </a>
//               <div className="menu dropdown_category5">
//                 {["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography", "Health & Fitness", "Music", "Teaching & Academics"].map((cat, idx) => (
//                   <a key={idx} href="#" className="item channel_item">{cat}</a>
//                 ))}
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
//           {/* Buttons and dropdowns here (e.g., messages, notifications, account) */}
//         </div>
//       </header>

//       <nav className="vertical_nav">
//         <div className="left_section menu_left" id="js-menu">
//           <div className="left_section">
//             <ul>
//               {["Dashboard", "Courses", "Analyics", "Create Course", "Messages", "Notifications", "My Certificates", "Reviews", "Earning", "Payout", "Statements", "Verification"].map((label, idx) => (
//                 <li className="menu--item" key={idx}>
//                   <a href={`instructor_${label.toLowerCase().replace(/ /g, '_')}.html`} className={`menu--link${label === 'Earning' ? ' active' : ''}`} title={label}>
//                     <i className={`uil uil-${label === 'Earning' ? 'dollar-sign' : 'apps'} menu--icon`}></i>
//                     <span className="menu--label">{label}</span>
//                   </a>
//                 </li>
//               ))}
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

//       <div className="wrapper">
//         <div className="sa4d25">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 <h2 className="st_title"><i className="uil uil-dollar-sign"></i> Earning</h2>
//               </div>
//             </div>
//             <div className="row">
//               {["$1146.78", "$1146.78", "$95895.54"].map((val, idx) => (
//                 <div key={idx} className="col-md-4">
//                   <div className="earning_steps">
//                     <p>{[
//                       "Sales earnings this month (April), after edututs+ fees, & before taxes:",
//                       "Your balance:",
//                       "Total value of your sales, before taxes:"
//                     ][idx]}</p>
//                     <h2>{val}</h2>
//                   </div>
//                 </div>
//               ))}
//               <div className="col-lg-4 col-md-12">
//                 <div className="top_countries mt-50">
//                   <div className="top_countries_title">
//                     <h2>Your Top Countries</h2>
//                   </div>
//                   <ul className="country_list">
//                     {[
//                       ["United States", "$48"],
//                       ["Bulgaria", "$35"],
//                       ["Dominica", "$25"],
//                       ["Italy", "$18"],
//                       ["Korea, Republic of", "$18"],
//                       ["Malaysia", "$10"],
//                       ["Netherlands", "$8"],
//                       ["Thailand", "$5"]
//                     ].map(([country, amount], idx) => (
//                       <li key={idx}>
//                         <div className="country_item">
//                           <div className="country_item_left">
//                             <span>{country}</span>
//                           </div>
//                           <div className="country_item_right">
//                             <span>{amount}</span>
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-lg-8 col-md-12">
//                 <div className="date_selector">
//                   <div className="ui selection dropdown skills-search vchrt-dropdown">
//                     <input name="date" type="hidden" value="default" />
//                     <i className="dropdown icon d-icon"></i>
//                     <div className="text">Item Sales</div>
//                     <div className="menu">
//                       <div className="item" data-value="0">Total Sales</div>
//                       <div className="item" data-value="1">2020</div>
//                     </div>
//                   </div>
//                   <div className="date_list152">
//                     <a href="#">All Time</a> /
//                     <a href="#">2020</a> /
//                     <a href="#">April</a>
//                   </div>
//                 </div>
//                 <div className="table-responsive mt-30">
//                   <table className="table ucp-table earning__table">
//                     <thead className="thead-s">
//                       <tr>
//                         <th scope="col">Date</th>
//                         <th scope="col">Item Sales Count</th>
//                         <th scope="col">Earning</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         ["1, Wednesday", 3, "$120.50"],
//                         ["2, Thursday", 2, "$84.00"],
//                         ["4, Saturday", 4, "$150.50"],
//                         ["5, Sunday", 3, "$102.24"],
//                         ["6, Monday", 2, "$80.50"],
//                         ["7, Tuesday", 3, "$70.50"],
//                         ["8, Wednesday", 5, "$130.00"],
//                         ["9, Thursday", 3, "$95.50"],
//                         ["10, Friday", 4, "$152.50"],
//                         ["11, Saturday", 3, "$100.40"],
//                         ["12, Sunday", 2, "$60.14"]
//                       ].map(([date, count, earning], idx) => (
//                         <tr key={idx}>
//                           <td>{date}</td>
//                           <td>{count}</td>
//                           <td>{earning}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                     <tfoot>
//                       <tr>
//                         <td>Total</td>
//                         <td>34</td>
//                         <td>$1146.78</td>
//                       </tr>
//                     </tfoot>
//                   </table>
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
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default EarningPage;
