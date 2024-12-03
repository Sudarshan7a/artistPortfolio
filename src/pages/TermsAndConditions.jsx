import PageNav from "./components/PageNav";
import TermsAndConditionsHero from "./components/TermsAndConditions/TermsAndConditionsHero";
import CommissionGuildLines from "./components/TermsAndConditions/CommissionGuildLines";
import Footer from "./components/Footer";

/**
 * Terms and Conditions Page component.
 * This component renders the navigation and hero section for the terms and conditions page.
 */
function Termsandconditionspage() {
  return (
    <div>
      <PageNav />
      <TermsAndConditionsHero />
      <CommissionGuildLines />
      <Footer />
    </div>
  );
}

export default Termsandconditionspage;
