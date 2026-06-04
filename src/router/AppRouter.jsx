import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

// Layouts
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

// Public pages
import SplashPage from '../pages/public/SplashPage';
import LandingPage from '../pages/public/LandingPage';
import WelcomePage from '../pages/public/WelcomePage';
import LoginPage from '../pages/public/LoginPage';
import SignupPage from '../pages/public/SignupPage';
import OtpPage from '../pages/public/OtpPage';
import ForgotPasswordPage from '../pages/public/ForgotPasswordPage';

// Patient pages
import PatientHomePage from '../pages/patient/PatientHomePage';
import SymptomInputPage from '../pages/patient/SymptomInputPage';
import DoctorProfilePage from '../pages/patient/DoctorProfilePage';
import SlotBookingPage from '../pages/patient/SlotBookingPage';
import BookingConfirmPage from '../pages/patient/BookingConfirmPage';
import MyAppointmentsPage from '../pages/patient/MyAppointmentsPage';
import HealthRecordsPage from '../pages/patient/HealthRecordsPage';
import NotificationsPage from '../pages/patient/NotificationsPage';
import PatientProfilePage from '../pages/patient/PatientProfilePage';

// Doctor pages
import DoctorHomePage from '../pages/doctor/DoctorHomePage';
import AvailabilityPage from '../pages/doctor/AvailabilityPage';
import PatientQueuePage from '../pages/doctor/PatientQueuePage';
import DoctorAnalyticsPage from '../pages/doctor/DoctorAnalyticsPage';
import DoctorProfileEditPage from '../pages/doctor/DoctorProfileEditPage';

// Admin pages
import AdminHomePage from '../pages/admin/AdminHomePage';
import UserManagementPage from '../pages/admin/UserManagementPage';
import DoctorVerifyPage from '../pages/admin/DoctorVerifyPage';
import ApptAnalyticsPage from '../pages/admin/ApptAnalyticsPage';
import MLManagementPage from '../pages/admin/MLManagementPage';
import BlockchainLogsPage from '../pages/admin/BlockchainLogsPage';
import SystemHealthPage from '../pages/admin/SystemHealthPage';
import SecurityDashPage from '../pages/admin/SecurityDashPage';

// ML pages
import MLVizPage from '../pages/ml/MLVizPage';
import AIChatbotPage from '../pages/ml/AIChatbotPage';

// Utility pages
import NotFoundPage from '../pages/utility/NotFoundPage';
import MaintenancePage from '../pages/utility/MaintenancePage';
import OfflinePage from '../pages/utility/OfflinePage';
import HelpCenterPage from '../pages/utility/HelpCenterPage';
import OnboardingPage from '../pages/utility/OnboardingPage';
import DesignSystemPage from '../pages/utility/DesignSystemPage';

function ProtectedRoute({ children, allowedRoles }) {
  const { state } = useApp();
  if (!state.user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(state.role))
    return <Navigate to="/404" replace />;
  return children;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<SplashPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/design-system" element={<DesignSystemPage />} />
      <Route path="/ml-viz" element={<MLVizPage />} />

      {/* Auth (two-column layout) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Patient Portal */}
      <Route element={
        <ProtectedRoute allowedRoles={['patient']}>
          <DashboardLayout role="patient" />
        </ProtectedRoute>
      }>
        <Route path="/patient/home" element={<PatientHomePage />} />
        <Route path="/patient/symptom-input" element={<SymptomInputPage />} />
        <Route path="/patient/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="/patient/slot-booking" element={<SlotBookingPage />} />
        <Route path="/patient/booking-confirm" element={<BookingConfirmPage />} />
        <Route path="/patient/appointments" element={<MyAppointmentsPage />} />
        <Route path="/patient/health-records" element={<HealthRecordsPage />} />
        <Route path="/patient/notifications" element={<NotificationsPage />} />
        <Route path="/patient/profile" element={<PatientProfilePage />} />
      </Route>

      {/* Doctor Portal */}
      <Route element={
        <ProtectedRoute allowedRoles={['doctor']}>
          <DashboardLayout role="doctor" />
        </ProtectedRoute>
      }>
        <Route path="/doctor/home" element={<DoctorHomePage />} />
        <Route path="/doctor/availability" element={<AvailabilityPage />} />
        <Route path="/doctor/queue" element={<PatientQueuePage />} />
        <Route path="/doctor/analytics" element={<DoctorAnalyticsPage />} />
        <Route path="/doctor/profile-edit" element={<DoctorProfileEditPage />} />
      </Route>

      {/* Admin Panel */}
      <Route element={
        <ProtectedRoute allowedRoles={['admin']}>
          <DashboardLayout role="admin" />
        </ProtectedRoute>
      }>
        <Route path="/admin/home" element={<AdminHomePage />} />
        <Route path="/admin/users" element={<UserManagementPage />} />
        <Route path="/admin/doctor-verify" element={<DoctorVerifyPage />} />
        <Route path="/admin/analytics" element={<ApptAnalyticsPage />} />
        <Route path="/admin/ml" element={<MLManagementPage />} />
        <Route path="/admin/blockchain" element={<BlockchainLogsPage />} />
        <Route path="/admin/system-health" element={<SystemHealthPage />} />
        <Route path="/admin/security" element={<SecurityDashPage />} />
      </Route>

      {/* Utility */}
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/ai-chatbot" element={<AIChatbotPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="/offline" element={<OfflinePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
