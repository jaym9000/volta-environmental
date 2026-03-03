import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTABanner({
  heading = "Ready for a Cleaner Yard?",
  subtext = "Get a free, no-obligation quote in minutes.",
  ctaText = "Get Your Free Quote",
  ctaLink = "/contact/",
}: CTABannerProps) {
  return (
    <section className="bg-volta-blue py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-volta-blue-100 text-lg mb-8">{subtext}</p>
        <Button href={ctaLink} variant="white" size="lg">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
