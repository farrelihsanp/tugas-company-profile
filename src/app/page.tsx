import HeroSection from "./components/homepage/hero-section";
import CompanyOverview from "./components/homepage/company-overview";
import ProductServices from "./components/homepage/product-services";
import Testimonials from "./components/homepage/testimonials";

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <ProductServices />
      <Testimonials />
    </div>
  );
}
