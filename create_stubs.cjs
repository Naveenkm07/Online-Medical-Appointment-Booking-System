const fs = require('fs');
const path = require('path');

const pages = {
  public: ['SplashPage', 'LandingPage', 'WelcomePage', 'LoginPage', 'SignupPage', 'OtpPage', 'ForgotPasswordPage'],
  patient: ['PatientHomePage', 'SymptomInputPage', 'DoctorProfilePage', 'SlotBookingPage', 'BookingConfirmPage', 'MyAppointmentsPage', 'HealthRecordsPage', 'NotificationsPage', 'PatientProfilePage'],
  doctor: ['DoctorHomePage', 'AvailabilityPage', 'PatientQueuePage', 'DoctorAnalyticsPage', 'DoctorProfileEditPage'],
  admin: ['AdminHomePage', 'UserManagementPage', 'DoctorVerifyPage', 'ApptAnalyticsPage', 'MLManagementPage', 'BlockchainLogsPage', 'SystemHealthPage', 'SecurityDashPage'],
  ml: ['MLVizPage', 'AIChatbotPage'],
  utility: ['NotFoundPage', 'MaintenancePage', 'OfflinePage', 'HelpCenterPage', 'OnboardingPage', 'DesignSystemPage']
};

const srcPagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(srcPagesDir)) {
  fs.mkdirSync(srcPagesDir, { recursive: true });
}

for (const [folder, files] of Object.entries(pages)) {
  const dir = path.join(srcPagesDir, folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const file of files) {
    const filePath = path.join(dir, `${file}.jsx`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, `export default function ${file}() { return <div className="page-placeholder">${file} Stub</div>; }\n`);
    }
  }
}
console.log('Stubs created!');
