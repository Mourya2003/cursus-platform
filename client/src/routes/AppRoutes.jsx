// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import AboutUs from "../pages/AboutUs.jsx";
// import BlogSingleView from "../pages/BlogSingleView.jsx";
// import CertificationCenter from "../pages/CertificationCenter.jsx";
// import AllInstructor from "../pages/AllInstructor.jsx";
// import CertificationStartForm from "../pages/CertificationStartForm.jsx";
// import CertificationTestResult from "../pages/CertificationTestResult.jsx";
// import CertificationTestView from "../pages/CertificationTestView.jsx";
// import CheckoutPage from "../pages/CheckoutPage.jsx";
// import ComingSoon from "../pages/Comingsoon.jsx";
// import CompanyPage from "../pages/Companydetails.jsx";
// import ContactUs from "../pages/ContactUs.jsx";
// import CourseDetailView from "../pages/CourseDetailView.jsx";
// import CreateCourseModals from "../pages/CreateNewCourse.jsx";
// import Error404 from "../pages/error404.jsx";
// import ExplorePage from "../pages/ExplorePage.jsx";
// import FeedbackPage from "../pages/Feedback.jsx";
// import ForgotPassword from "../pages/ForgetPassword.jsx";
// import HelpPage from "../pages/help.jsx";
// import Index from "../pages/index.jsx";
// import AllReviews from "../pages/instructor_all_reviews.jsx";
// import InstructorAnalytics from "../pages/instructor_analyics.jsx";
// import InstructorCourses from "../pages/instructor_courses.jsx";
// import Dashboard from "../pages/instructor_dashboard.jsx";
// import EarningPage from "../pages/instructor_earning.jsx";
// import InstructorMessagesPage from "../pages/instructor_messages.jsx";
// import InstructorCertificates from "../pages/instructor_my_certificates.jsx";
// import InstructorNotifications from "../pages/instructor_notifications.jsx";
// import PayoutPage from "../pages/instructorpayout.jsx";
// import InstructorProfileView from "../pages/instructorProfileView.jsx";
// import StatementsPage from "../pages/instructorstatements.jsx";
// import VerificationPage from "../pages/instructorVerification.jsx";
// import InvoiceMembership from "../pages/invoice.jsx";
// import LiveOutput from "../pages/liveOutput.jsx";
// import AllLiveStreams from "../pages/liveStreams.jsx";
// import PaidMembershipPage from "../pages/membership.jsx";
// import MyInstructorProfileView from "../pages/myInstructorProfileView.jsx";
// import OurBlog from "../pages/OurBlog.jsx";
// import PressPage from "../pages/press.jsx";
// import ReportHistory from "../pages/reportHistory.jsx";
// import SavedCourses from "../pages/savedCourses.jsx";
// import SearchResults from "../pages/searchResult.jsx";
// import Setting from '../pages/Setting.jsx';
// import ShoppingCart from '../pages/ShoppingCart.jsx';

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from '../pages/SignIn.jsx';
// import SignUpSteps from '../pages/SignUpSteps.jsx';
import SignUp from '../pages/SignUp.jsx';
import StudentDashboard from "../pages/StudentDashboard.jsx";
import DashboardLayout from '../components/DashboardLayout.jsx';
import ProtectedRoute from '../utils/ProtectedRoute.jsx';
import PublicRoute from '../utils/PublicRoute.jsx';
// import Navbar from "../components/navbar.jsx"; 
// // import '../styles/signin.css';
// // ...import other pages...
// // import React component corresponding to help.html





const AppRoutes = () => {
  // This state is used to force re-render after login/logout
  const [authChanged, setAuthChanged] = useState(false);
  const [signedUp, setSignedUp] = useState(false); 
  // Handler to be passed to SignIn/SignUp to trigger re-render after login
  const handleAuthChange = () => setAuthChanged((prev) => !prev);
   const handleSignUp = () => setSignedUp(true); // <-- NEW
   
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
        {/* ...other routes... */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;


