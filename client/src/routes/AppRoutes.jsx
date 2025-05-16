import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import BlogSingleView from "../pages/BlogSingleView";
import CertificationCenter from "../pages/CertificationCenter";
import AllInstructor from "../pages/AllInstructor";
import BlogSingleView from "../pages/BlogSingleView";
import AboutUs from "../pages/AboutUs";
import CertificationCenter from "../pages/CertificationCenter";
import CertificationStartForm from "../pages/CertificationStartForm";
import CertificationTestResult from "./pages/CertificationTestResult";
import CertificationTestView from "../pages/CertificationTestView";
import CheckoutPage from "../pages/CheckoutPage";
import ComingSoon from "../pages/Comingsoon";
import CompanyPage from "../pages/Companydetails";
import ContactUs from "../pages/ContactUs";
import CourseDetailView from "../pages/CourseDetailView";
import CreateCourseModals from "../pages/CreateNewCourse";
import Error404 from "../pages/error404";
import ExplorePage from "../pages/ExplorePage";
import FeedbackPage from "../pages/Feedback";
import ForgotPassword from "../pages/ForgetPassword";
import HelpPage from "../pages/help";
import Index from "../pages/index";
import AllReviews from "../pages/instructor_all_reviews";
import InstructorAnalytics from "../pages/instructor_analyics";
import InstructorCourses from "../pages/instructor_courses";
import Dashboard from "../pages/instructor_dashboard";
import EarningPage from "../pages/instructor_earning";
import InstructorMessagesPage from "../pages/instructor_messages";
import InstructorCertificates from "../pages/instructor_my_certificates";
import InstructorNotifications from "../pages/instructor_notifications";
import PayoutPage from "../pages/instructorpayout";
import InstructorProfileView from "../pages/instructorProfileView";
import StatementsPage from "../pages/instructorstatements";
import VerificationPage from "../pages/instructorVerification";
import InvoiceMembership from "../pages/invoice";
import LiveOutput from "../pages/liveOutput";
import AllLiveStreams from "../pages/liveStreams";
import PaidMembershipPage from "../pages/membership";
import MyInstructorProfileView from "../pages/myInstructorProfileView";
import OurBlog from "../pages/OurBlog";
import PressPage from "../pages/press";
import ReportHistory from "../pages/reportHistory";
import SavedCourses from "../pages/savedCourses";
import SearchResults from "../pages/searchResult";
import Setting from '../pages/Setting';
import ShoppingCart from '../pages/ShoppingCart';
import SignIn from '../pages/SignIn';
import SignUpSteps from '../pages/SignUpSteps';
import SignUp from '../pages/SignUp';
// import React component corresponding to help.html

// ...import other pages

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AboutUs />} />
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
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up_steps" element={<SignUpSteps />} />
      <Route path="/sign_up" element={<SignUp />} />
      {/* Add other routes here */}
      {/* Example: <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
