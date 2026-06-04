import LandingNav from './LandingNav';
import LandingHero from './LandingHero';
import LandingProblems from './LandingProblems';
import LandingFeatures from './LandingFeatures';
import LandingHowItWorks from './LandingHowItWorks';
import LandingComparison from './LandingComparison';
import LandingTestimonials from './LandingTestimonials';
import LandingFaq from './LandingFaq';
import LandingContact from './LandingContact';
import LandingFooter from './LandingFooter';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <LandingNav />
      <LandingHero />
      <LandingProblems />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingComparison />
      <LandingTestimonials />
      <LandingFaq />
      <LandingContact />
      <LandingFooter />
    </div>
  );
}
