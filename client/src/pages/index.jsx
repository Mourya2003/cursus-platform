// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Index = () => {
//   return (
//     <div className="page">
//       {/* Sidebar */}
//       <aside className="navbar navbar-vertical navbar-expand-lg">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <h1 className="navbar-brand navbar-brand-autodark">
//             <a href="#">Cursus</a>
//           </h1>
//           <div className="collapse navbar-collapse" id="sidebar-menu">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">
//                   <span className="nav-link-icon d-md-none d-lg-inline-block">
//                     <i className="fas fa-home"></i>
//                   </span>
//                   <span className="nav-link-title">Home</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   <span className="nav-link-icon d-md-none d-lg-inline-block">
//                     <i className="fas fa-book"></i>
//                   </span>
//                   <span className="nav-link-title">Courses</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   <span className="nav-link-icon d-md-none d-lg-inline-block">
//                     <i className="fas fa-user"></i>
//                   </span>
//                   <span className="nav-link-title">Profile</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </aside>

//       {/* Header */}
//       <header className="navbar navbar-expand-md d-print-none">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="navbar-nav flex-row order-md-last">
//             <div className="nav-item">
//               <a href="#" className="nav-link px-0">🔔</a>
//             </div>
//             <div className="nav-item">
//               <a href="#" className="nav-link px-0">✉️</a>
//             </div>
//             <div className="nav-item dropdown">
//               <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown">
//                 <span className="avatar avatar-sm" style={{ backgroundImage: `url(https://preview.tabler.io/static/avatars/000m.jpg)` }}></span>
//                 <div className="d-none d-xl-block ps-2">
//                   <div>Alluri Tejavarma</div>
//                   <div className="mt-1 small text-muted">Student</div>
//                 </div>
//               </a>
//               <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                 <a href="#" className="dropdown-item">Profile</a>
//                 <a href="#" className="dropdown-item">Settings</a>
//                 <div className="dropdown-divider"></div>
//                 <a href="#" className="dropdown-item">Logout</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <div className="page-wrapper">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h1 className="page-title">Browse Courses</h1>
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="#">Home</a>
//                 </li>
//                 <li className="breadcrumb-item active" aria-current="page">
//                   Courses
//                 </li>
//               </ol>
//             </div>
//             <div className="col-auto ms-auto d-print-none">
//               <div className="btn-list">
//                 <span className="d-none d-sm-inline">
//                   <a href="#" className="btn btn-white">
//                     New view
//                   </a>
//                 </span>
//                 <a
//                   href="#"
//                   className="btn btn-primary d-none d-sm-inline-block"
//                   data-bs-toggle="modal"
//                   data-bs-target="#modal-report"
//                 >
//                   Create new report
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row row-deck row-cards">
//           {[...Array(12)].map((_, i) => (
//             <div className="col-sm-6 col-lg-3" key={i}>
//               <div className="card card-sm">
//                 <a href="#" className="d-block">
//                   <img
//                     src={`https://preview.tabler.io/static/courses/${(i % 6) + 1}.jpg`}
//                     className="card-img-top"
//                     alt="Course Preview"
//                   />
//                 </a>
//                 <div className="card-body">
//                   <div className="d-flex align-items-center">
//                     <span
//                       className="avatar me-3 rounded"
//                       style={{
//                         backgroundImage: `url(https://preview.tabler.io/static/avatars/${(i % 6) + 1}.jpg)`
//                       }}
//                     ></span>
//                     <div>
//                       <div>{`Course ${i + 1}`}</div>
//                       <div className="text-muted">by Instructor {i + 1}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="d-flex mt-4">
//           <ul className="pagination ms-auto">
//             <li className="page-item disabled">
//               <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
//                 prev
//               </a>
//             </li>
//             <li className="page-item active">
//               <a className="page-link" href="#">
//                 1
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 2
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 3
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 next
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
