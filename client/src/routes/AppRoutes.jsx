// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs.jsx";
import BlogSingleView from "../pages/BlogSingleView.jsx";
import CertificationCenter from "../pages/CertificationCenter.jsx";
import AllInstructor from "../pages/AllInstructor.jsx";
import CertificationStartForm from "../pages/CertificationStartForm.jsx";
import CertificationTestResult from "../pages/CertificationTestResult.jsx";
import CertificationTestView from "../pages/CertificationTestView.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import ComingSoon from "../pages/Comingsoon.jsx";
import CompanyPage from "../pages/Companydetails.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import CourseDetailView from "../pages/CourseDetailView.jsx";
import CreateCourseModals from "../pages/CreateNewCourse.jsx";
import Error404 from "../pages/error404.jsx";
import ExplorePage from "../pages/ExplorePage.jsx";
import FeedbackPage from "../pages/Feedback.jsx";
import ForgotPassword from "../pages/ForgetPassword.jsx";
import HelpPage from "../pages/help.jsx";
import Index from "../pages/index.jsx";
import AllReviews from "../pages/instructor_all_reviews.jsx";
import InstructorAnalytics from "../pages/instructor_analyics.jsx";
import InstructorCourses from "../pages/instructor_courses.jsx";
import Dashboard from "../pages/instructor_dashboard.jsx";
import EarningPage from "../pages/instructor_earning.jsx";
import InstructorMessagesPage from "../pages/instructor_messages.jsx";
import InstructorCertificates from "../pages/instructor_my_certificates.jsx";
import InstructorNotifications from "../pages/instructor_notifications.jsx";
import PayoutPage from "../pages/instructorpayout.jsx";
import InstructorProfileView from "../pages/instructorProfileView.jsx";
import StatementsPage from "../pages/instructorstatements.jsx";
import VerificationPage from "../pages/instructorVerification.jsx";
import InvoiceMembership from "../pages/invoice.jsx";
import LiveOutput from "../pages/liveOutput.jsx";
import AllLiveStreams from "../pages/liveStreams.jsx";
import PaidMembershipPage from "../pages/membership.jsx";
import MyInstructorProfileView from "../pages/myInstructorProfileView.jsx";
import OurBlog from "../pages/OurBlog.jsx";
import PressPage from "../pages/press.jsx";
import ReportHistory from "../pages/reportHistory.jsx";
import SavedCourses from "../pages/savedCourses.jsx";
import SearchResults from "../pages/searchResult.jsx";
import Setting from '../pages/Setting.jsx';
import ShoppingCart from '../pages/ShoppingCart.jsx';
import SignIn from '../pages/SignIn.jsx';
import SignUpSteps from '../pages/SignUpSteps.jsx';
import SignUp from '../pages/SignUp.jsx';
import StudentDashboard from "../pages/StudentDashboard.jsx";

// import '../styles/signin.css';
// ...import other pages...
// import React component corresponding to help.html

// ...import other pages


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<AboutUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<BlogSingleView />} />
      <Route path="/certification-center" element={<CertificationCenter />} />
      <Route path="/all-instructor" element={<AllInstructor />} />
      <Route path="/blog-single-view" element={<BlogSingleView />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/certification-center" element={<CertificationCenter />} />
      <Route
        path="/certification-start-form"
        element={<CertificationStartForm />}
      />
      <Route
        path="/certification-test-result"
        element={<CertificationTestResult />}
      />
      <Route
        path="/certification-test-view"
        element={<CertificationTestView />}
      />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/company-details" element={<CompanyPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/course-detail-view" element={<CourseDetailView />} />
      <Route path="/create-course" element={<CreateCourseModals />} />
      <Route path="/error-404" element={<Error404 />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/index" element={<Index />} />
      <Route path="/instructor_all_reviews" element={<AllReviews />} />
      <Route path="/instructor_analyics" element={<InstructorAnalytics />} />
      <Route path="/instructor_courses" element={<InstructorCourses />} />
      <Route path="/instructor_dashboard" element={<Dashboard />} />
      <Route path="/instructor_earning" element={<EarningPage />} />
      <Route path="/instructor_messages" element={<InstructorMessagesPage />} />
      <Route
        path="/instructor_my_certificates"
        element={<InstructorCertificates />}
      />
      <Route
        path="/instructor_notifications"
        element={<InstructorNotifications />}
      />
      <Route path="/instructorpayout" element={<PayoutPage />} />
      <Route
        path="/instructor_profile_view"
        element={<InstructorProfileView />}
      />
      <Route path="/instructorstatements" element={<StatementsPage />} />
      <Route path="/instructorVerification" element={<VerificationPage />} />
      <Route path="/invoice" element={<InvoiceMembership />} />
      <Route path="/live-output" element={<LiveOutput />} />
      <Route path="/all-live-streams" element={<AllLiveStreams />} />
      <Route path="/paid-membership" element={<PaidMembershipPage />} />
      <Route
        path="/my-instructor-profile-view"
        element={<MyInstructorProfileView />}
      />
      <Route path="/our-blog" element={<OurBlog />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/report-history" element={<ReportHistory />} />
      <Route path="/saved-courses" element={<SavedCourses />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} /> */}
      <Route path="/sign_in" element={<SignIn />} />
      {/* <Route path="/sign_up_steps" element={<SignUpSteps />} /> */}
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      {/* Add other routes here */}
      {/* Example: <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
