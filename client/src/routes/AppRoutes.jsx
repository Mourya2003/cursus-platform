// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from '../pages/SignIn.jsx';
// // import SignUpSteps from '../pages/SignUpSteps.jsx';
// import SignUp from '../pages/SignUp.jsx';
// import StudentDashboard from "../pages/StudentDashboard.jsx";
// import DashboardLayout from '../components/DashboardLayout.jsx';
// import ProtectedRoute from '../utils/ProtectedRoute.jsx';
// import PublicRoute from '../utils/PublicRoute.jsx';
// // import Navbar from "../components/navbar.jsx";
// // // import '../styles/signin.css';
// // // ...import other pages...
// // // import React component corresponding to help.html

// const AppRoutes = () => {
//   // This state is used to force re-render after login/logout
//   const [authChanged, setAuthChanged] = useState(false);
//   const [signedUp, setSignedUp] = useState(false);
//   // Handler to be passed to SignIn/SignUp to trigger re-render after login
//   const handleAuthChange = () => setAuthChanged((prev) => !prev);
//    const handleSignUp = () => setSignedUp(true); // <-- NEW

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Navigate to="/dashboard" replace />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/sign_in"
//           element={
//             <PublicRoute>
//               <SignIn onLogin={handleAuthChange} />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/sign_up"
//           element={
//             signedUp ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <PublicRoute>
//                 <SignUp onSignUp={handleSignUp} />
//               </PublicRoute>
//             )
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <StudentDashboard />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         {/* ...other routes... */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default AppRoutes;



import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import PublicRoute from "../utils/PublicRoute.jsx";
import EnrollPage from "../pages/EnrollPage.jsx";

const AppRoutes = () => {
  const [authChanged, setAuthChanged] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const handleAuthChange = () => setAuthChanged((prev) => !prev);
  const handleSignUp = () => setSignedUp(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/dashboard" replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign_in"
          element={
            <PublicRoute>
              <SignIn onLogin={handleAuthChange} />
            </PublicRoute>
          }
        />
        <Route
          path="/sign_up"
          element={
            signedUp ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <PublicRoute>
                <SignUp onSignUp={handleSignUp} />
              </PublicRoute>
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <StudentDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EnrollPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        {/* ...other routes... */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;


