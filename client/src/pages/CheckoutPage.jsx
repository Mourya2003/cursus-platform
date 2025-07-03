// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const countries = [
//   { code: "af", name: "Afghanistan" },
//   { code: "ax", name: "Aland Islands" },
//   { code: "al", name: "Albania" },
//   { code: "dz", name: "Algeria" },
//   { code: "as", name: "American Samoa" },
//   { code: "ad", name: "Andorra" },
//   { code: "ao", name: "Angola" },
//   { code: "ai", name: "Anguilla" },
//   { code: "ag", name: "Antigua" },
//   { code: "ar", name: "Argentina" },
//   { code: "am", name: "Armenia" },
//   { code: "aw", name: "Aruba" },
//   { code: "au", name: "Australia" },
//   { code: "at", name: "Austria" },
//   { code: "az", name: "Azerbaijan" },
//   // ...add more as needed
// ];

// function CheckoutPage() {
//   const [form, setForm] = useState({
//     name: "Joginder",
//     surname: "Singh",
//     academyname: "Gambolthemes",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className="header clearfix">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="back_link">
//                 <Link to="/" className="hde151">Back To Cursus</Link>
//                 <Link to="/" className="hde152">Back</Link>
//               </div>
//               <div className="ml_item">
//                 <div className="main_logo main_logo15" id="logo">
//                   <Link to="/"><img src="/images/logo.svg" alt="" /></Link>
//                   <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></Link>
//                 </div>
//               </div>
//               <div className="header_right pr-0">
//                 <ul>
//                   <li className="ui top right pointing dropdown">
//                     <a href="#" className="opts_account">
//                       <img src="/images/hd_dp.jpg" alt="" />
//                     </a>
//                     <div className="menu dropdown_account">
//                       <div className="channel_my">
//                         <div className="profile_link">
//                           <img src="/images/hd_dp.jpg" alt="" />
//                           <div className="pd_content">
//                             <div className="rhte85">
//                               <h6>Joginder Singh</h6>
//                               <div className="mef78" title="Verify">
//                                 <i className="uil uil-check-circle"></i>
//                               </div>
//                             </div>
//                             <span>
//                               <a href="https://gambolthemes.net/cdn-cgi/l/email-protection" className="__cf_email__">
//                                 [email&#160;protected]
//                               </a>
//                             </span>
//                           </div>
//                         </div>
//                         <Link to="/my_instructor_profile_view" className="dp_link_12">View Instructor Profile</Link>
//                       </div>
//                       <div className="night_mode_switch__btn">
//                         <a href="#" id="night-mode" className="btn-night-mode">
//                           <i className="uil uil-moon"></i> Night mode
//                           <span className="btn-night-mode-switch">
//                             <span className="uk-switch-button"></span>
//                           </span>
//                         </a>
//                       </div>
//                       <Link to="/instructor_dashboard" className="item channel_item">Cursus Dashboard</Link>
//                       <Link to="/sign_in" className="item channel_item">Sign Out</Link>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="wrapper _bg4586 _new89">
//         <div className="_215b15">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="title125">
//                   <div className="titleleft">
//                     <div className="ttl121">
//                       <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb">
//                           <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                           <li className="breadcrumb-item"><Link to="/membership">Paid Membership</Link></li>
//                           <li className="breadcrumb-item active" aria-current="page">Checkout</li>
//                         </ol>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="title126">
//                   <h2>Checkout</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Billing Details */}
//         <div className="mb4d25">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <div className="membership_chk_bg">
//                   <div className="checkout_title">
//                     <h4>Billing Details</h4>
//                     <img src="/images/line.svg" alt="" />
//                   </div>
//                   <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
//                     <div className="panel panel-default">
//                       <div className="panel-heading" role="tab" id="address1">
//                         <div className="panel-title">
//                           <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseaddress1" aria-expanded="false" aria-controls="collapseaddress1">
//                             Edit Address
//                           </a>
//                         </div>
//                       </div>
//                       <div id="collapseaddress1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="address1">
//                         <div className="panel-body">
//                           <form>
//                             <div className="row">
//                               <div className="col-lg-6">
//                                 <div className="ui search focus mt-30 lbel25">
//                                   <label>First Name*</label>
//                                   <div className="ui left icon input swdh11 swdh19">
//                                     <input
//                                       className="prompt srch_explore"
//                                       type="text"
//                                       name="name"
//                                       value={form.name}
//                                       onChange={handleChange}
//                                       id="id_name"
//                                       required
//                                       maxLength="64"
//                                       placeholder="First Name"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-lg-6">
//                                 <div className="ui search focus mt-30 lbel25">
//                                   <label>Last Name*</label>
//                                   <div className="ui left icon input swdh11 swdh19">
//                                     <input
//                                       className="prompt srch_explore"
//                                       type="text"
//                                       name="surname"
//                                       value={form.surname}
//                                       onChange={handleChange}
//                                       id="id_surname"
//                                       required
//                                       maxLength="64"
//                                       placeholder="Last Name"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-lg-12">
//                                 <div className="ui search focus mt-30 lbel25">
//                                   <label>Academy Name*</label>
//                                   <div className="ui left icon input swdh11 swdh19">
//                                     <input
//                                       className="prompt srch_explore"
//                                       type="text"
//                                       name="academyname"
//                                       value={form.academyname}
//                                       onChange={handleChange}
//                                       id="id_academy"
//                                       required
//                                       maxLength="64"
//                                       placeholder="Academy Name"
//                                     />
//                                   </div>
//                                   <div className="help-block">
//                                     If you want your invoices addressed to an academy. Leave blank to use your full name.
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-lg-12">
//                                 <div className="mt-30 lbel25">
//                                   <label>Country*</label>
//                                 </div>
//                                 <div className="ui fluid search selection dropdown focus cntry152">
//                                   <select
//                                     name="country"
//                                     className="prompt srch_explore"
//                                     value={form.country}
//                                     onChange={handleChange}
//                                     required
//                                   >
//                                     <option value="">Select Country</option>
//                                     {countries.map((c) => (
//                                       <option key={c.code} value={c.code}>{c.name}</option>
//                                     ))}
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                     {/* ...other panels/components as needed */}
//                   </div>
//                 </div>
//               </div>
//               {/* ...right column or summary as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;

