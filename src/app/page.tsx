import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import QuoteForm from "@/components/forms/QuoteForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <ServicesPreview />
      <ServiceArea />
      <Testimonials />
      <CTABanner />
      <QuoteForm />
    </>
  );
}
