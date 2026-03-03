import Image from "next/image";
import Button from "@/components/ui/Button";
import { Leaf, CalendarCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dog.jpg"
          alt="Happy dog in a clean green backyard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-volta-blue-900/85 via-volta-blue-900/70 to-volta-blue-900/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="text-volta-blue-200 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4">
            Powering Clean Environments
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted Pet Waste &amp; Yard Cleanup Service
          </h1>
          <p className="text-volta-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-8">
            Professional, eco-friendly pet waste removal so your family and pets
            can enjoy a clean, safe yard. Serving communities across New Brunswick.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button href="/contact/" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services/" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-volta-green" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck size={18} className="text-volta-blue-200" />
              <span>Reliable Weekly Service</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-volta-blue-200" />
              <span>Serving Your Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
